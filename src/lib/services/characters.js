import axios from "axios"
import { createSearchParams } from "@/lib/utils/createSearchParams"

export const getCharacters = async (params) => {
  try {
    const urlSearchParams = createSearchParams({
      page: params?.currentPage || 1,
      ...params,
    })

    const requestURL = `${process.env.API_URL}/character?${urlSearchParams}`

    const response = await axios.get(requestURL)

    return response.data
  } catch (error) {
    return {
      results: [],
      info: {
        pages: 1,
      },
    }
  }
}

export const getMultipleCharacters = async (characterIds) => {
  try {
    if (characterIds.length === 0) {
      return []
    }

    const response = await axios.get(`${process.env.API_URL}/character/${characterIds.join(",")}`)

    if (Array.isArray(response.data)) {
      return response.data
    }

    return [response.data]
  } catch (error) {
    return null
  }
}

export const getCharacter = async (characterId) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/character/${characterId}`)

    return response.data
  } catch (error) {
    return null
  }
}

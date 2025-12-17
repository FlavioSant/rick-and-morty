import axios from "axios"
import { createSearchParams } from "@/lib/utils/createSearchParams"

export const getEpisodes = async (params) => {
  try {
    const urlSearchParams = createSearchParams({
      page: params?.currentPage || 1,
      ...params,
    })

    const requestURL = `${process.env.API_URL}/episode?${urlSearchParams.toString()}`

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

export const getMultipleEpisodes = async (episodeIds) => {
  try {
    if (episodeIds.length === 0) {
      return []
    }

    const response = await axios.get(`${process.env.API_URL}/episode/${episodeIds.join(",")}`)

    if (Array.isArray(response.data)) {
      return response.data
    }

    return [response.data]
  } catch (error) {
    return null
  }
}

export const getEpisode = async (episodeId) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/episode/${episodeId}`)

    return response.data
  } catch (error) {
    return null
  }
}

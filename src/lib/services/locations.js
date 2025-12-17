import axios from "axios"
import { createSearchParams } from "@/lib/utils/createSearchParams"

export const getLocations = async (params) => {
  try {
    const urlSearchParams = createSearchParams({
      page: params?.currentPage || 1,
      ...params,
    })

    const requestURL = `${process.env.API_URL}/location?${urlSearchParams.toString()}`

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

export const getLocation = async (locationId) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/location/${locationId}`)

    return response.data
  } catch (error) {
    return null
  }
}

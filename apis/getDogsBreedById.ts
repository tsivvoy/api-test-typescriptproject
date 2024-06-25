import { Config } from '../config'
import {fetchData} from './fetchData'

interface BreedResponse {
    weight: {
        imperial: string
        metric: string
    },
    height: {
        imperial: string
        metric: string
    },
    id: number
    name: string
    bred_for: string
    breed_group: string
    life_span: string
    temperament: string
    reference_image_id: string
}

// export const getDogsBreedById = async (breedId: number): Promise<BreedResponse> => {
//   const url = `${Config.BASE_URL}/breeds/${breedId}`;
//   const options: RequestInit = {
//     headers: Config.getHeaders() as HeadersInit,
//   };

//   return await fetchData<BreedResponse>(url, options);
// }

const getDogsBreedById = async (breedId: number): Promise<Response> => {
  const url = `${Config.BASE_URL}/breeds/${breedId}`;

  try {
    const response = await fetch(url, {
      headers: Config.getHeaders() as HeadersInit,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Response = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
};

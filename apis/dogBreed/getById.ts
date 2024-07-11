import { Config } from './config'
import { fetchData } from './fetchData'
import type { RequestInit as NodeFetchRequestInit } from 'node-fetch'

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

export const getById = async (breedId: number): Promise<BreedResponse> => {
  const url = `${Config.BASE_URL}/breeds/${breedId}`
  const options: NodeFetchRequestInit = {
    headers: Config.getHeaders(),
  };

  return await fetchData<BreedResponse>(url, options);
}
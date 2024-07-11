import { Config } from './config'
import { fetchData } from './fetchData'
import type { RequestInit as NodeFetchRequestInit } from 'node-fetch'


interface PostResponse {
  message: string
  id: string
}

export const create = async (imageId: string, subId: string): Promise<PostResponse> => {
  const url = `${Config.BASE_URL}/favourites`;
  const data = {
    image_id: imageId,
    sub_id: subId,
  };

  const options: NodeFetchRequestInit = {
    method: 'POST',
    headers: Config.getHeaders(),
    body: JSON.stringify(data),
  };

  return await fetchData<PostResponse>(url, options);
}

import { Config } from '../config'

interface PostFavoriteResponse {
  message: string
  id: string
}

export const postFavorite = async (imageId: string, subId: string): Promise<PostFavoriteResponse> => {
  const url = `${Config.BASE_URL}/favourites`;
  const data = {
    image_id: imageId,
    sub_id: subId,
  };

  const options: RequestInit = {
    method: 'POST',
    headers: Config.getHeaders() as HeadersInit,
    body: JSON.stringify(data),
  };

  return await fetchData<PostFavoriteResponse>(url, options);
}

// const postFavorite = async (imageId: string, subId: string): Promise<PostFavoriteResponse> => {
//   const url = `${Config.BASE_URL}/favourites`;
//   const data = {
//     image_id: imageId,
//     sub_id: subId,
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: Config.getHeaders() as HeadersInit,
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to post favorite. Status: ${response.status}`);
//     }

//     const responseData: PostFavoriteResponse = await response.json();
//     return responseData;
//   } catch (error) {
//     console.error('Error posting favorite:', error);
//     throw error;
//   }
// }

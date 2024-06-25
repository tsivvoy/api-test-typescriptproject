import { Config } from '../config'
import { getDogsBreedById } from '../apis'

import fetch from 'node-fetch';

describe('Dog API Tests', () => {
  const config = new Config();

  it('should fetch breed information by ID', async () => {
    const breedId = 8;

    try {
      const response = await getDogsBreedById(breedId)

      // Check HTTP response status
      expect(response.status).toBe(200)

      // Parse JSON data
      const data = await response.json()

      // Check properties in the returned data
      expect(data).toHaveProperty('id')
      expect(data).toHaveProperty('name')
      expect(data).toHaveProperty('bred_for')
      expect(data).toHaveProperty('breed_group')

      console.log('Fetched data:', data)
    } catch (error) {
      console.error('Error in fetching breed data:', error)
      // Fail the test if there's an error
      throw error
    }
  })

  })

  it('should successfully post a favourite', async () => {
    const imageId = '1238'
    const subId = 'my-user-1287'

    try {
      const response = await postFavorite(imageId, subId)

      // Check HTTP response status
      expect(response.message).toBe('SUCCESS')
      expect(response).toHaveProperty('id')
    } catch (error) {
      // Fail the test if there's an error
      throw error
    }
  })
})



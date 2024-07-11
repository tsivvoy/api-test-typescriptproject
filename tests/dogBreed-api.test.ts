import { Config } from '../apis/dogBreed/config'
import { getById, create } from '../apis/dogBreed/index'
import { v4 as uuidv4 } from 'uuid'

describe('Dog API Test', () => {
  const config = new Config()

  it('should fetch breed information by ID', async () => {
    const breedId = 8

    try {
      const response = await getById(breedId)

      // Check properties in the returned data
      expect(response).toHaveProperty('id')
      expect(response).toHaveProperty('name')
      expect(response).toHaveProperty('bred_for')
      expect(response).toHaveProperty('breed_group')

    } catch (error) {
      // Fail the test if there's an error
      console.error('Error in fetching breed data:', error)
      throw error
    }
  })

  it('should successfully create a favourite', async () => {
    const imageId = uuidv4() // Generate a random UUID
    const subId = `my-user-${uuidv4().slice(0, 8)}` // Generate a unique UUID

    try {
      const response = await create(imageId, subId)

      // Check properties in the returned data
      expect(response.message).toBe('SUCCESS')
      expect(response).toHaveProperty('id')
    } catch (error) {
      // Fail the test if there's an error
      console.error('Error in fetching breed data:', error)
      throw error
    }
  })
})



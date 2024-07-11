import { checkCSVIntegrity } from '../src/csvIntegrityChecker'

describe('CSV Integrity Checker', () => {
    it('should validate basic.csv file', async () => {
        const isValid = await checkCSVIntegrity('basic.csv');
        expect(isValid).toBe(true);
    });

    it('should validate category.csv file', async () => {
        const isValid = await checkCSVIntegrity('category.csv');
        expect(isValid).toBe(true);
    });

    it('should validate dateFormat.csv file', async () => {
      const isValid = await checkCSVIntegrity('dateFormat.csv');
      expect(isValid).toBe(true);
  });

  it('should validate numericValues.csv file', async () => {
      const isValid = await checkCSVIntegrity('numericValues.csv');
      expect(isValid).toBe(true);
  });

  it('should validate specialCharacters.csv file', async () => {
    const isValid = await checkCSVIntegrity('specialCharacters.csv');
    expect(isValid).toBe(true);
  });
});

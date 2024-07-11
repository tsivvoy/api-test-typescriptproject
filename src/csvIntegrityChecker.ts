import * as fs from 'fs'
import csv from 'csv-parser'
import * as path from 'path'

export const checkCSVIntegrity = (fileName: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '..', 'fixtures', fileName); // Adjust the path as needed
        let isValid = true;

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row: any) => {
                // Check for empty or undefined values
                Object.entries(row).forEach(([key, value]) => {
                    if (!value || typeof value !== 'string' || value.trim().length === 0) {
                        console.log(`Empty or undefined value found in column ${key}`);
                        isValid = false;
                    }
                });

                // Check for special characters (excluding valid email characters)
                Object.entries(row).forEach(([key, value]) => {
                    if (key !== 'email' && typeof value === 'string' && /[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                        console.log(`Invalid character found in column ${key}: ${value}`);
                        isValid = false;
                    }
                });

                // Check for numeric values in 'age' field
                if (row.hasOwnProperty('age')) {
                    const ageValue = row['age'].trim(); // Remove any surrounding whitespace
                    if (isNaN(parseInt(ageValue, 10))) {
                        console.log(`Non-numeric value found in age: ${ageValue}`);
                        isValid = false;
                    }
                }

                // Check for valid email format
                if (row.hasOwnProperty('email')) {
                    const emailValue = row['email'].trim(); // Remove any surrounding whitespace
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(emailValue)) {
                        console.log(`Invalid email format in email: ${emailValue}`);
                        isValid = false;
                    }
                }
            })
            .on('end', () => {
                resolve(isValid);
            })
            .on('error', (error: any) => {
                reject(error);
            });
    });
}

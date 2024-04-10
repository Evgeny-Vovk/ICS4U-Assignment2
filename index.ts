/*
 * This program takes a constant and does the "blowup" function 
 *
 * @author  Evgeny Vovk 
 * @version 1.0
 * @since   2024-03-10
 *
 */

import { createPrompt } from 'bun-promptx'

// Input         
const inputconst = createPrompt("Enter the width(inches): ")
const input = inputconst.value

// Proccess
function blowup(input: string): string {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (/[0-9]/.test(char)) {
            const count = parseInt(char);
            const nextChar = input[i + 1];
            if (nextChar !== undefined) {
                output += nextChar.repeat(count);
                i++; // skip the next character since we've already processed it
            }
        } else {
            output += char;
        }
    }
    return output;
}

// Output
console.log('Your constant is: ', blowup(input));

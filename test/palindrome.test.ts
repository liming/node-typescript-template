/**
 * The unit test for palindrome.js
 */

import { checkPalindrome } from '../src/palindrome';

describe('Test string palindrome', () => {
	it('Should return true', () => {
		const str: string = 'radar';

		const isPalindrome = checkPalindrome(str);

		expect(isPalindrome).toBeTruthy();
	});
});

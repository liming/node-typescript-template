/**
 * This file provide method to check whether the string premutation is palindrome or not
 */

// A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward.
export const checkPalindrome = (input: string): boolean => {
	if (!input.length) {
		return false;
	}

	const orgString: string = input;
	const splitedArr = input.split('');
	const reversedArr = splitedArr.reverse();
	const newString: string = reversedArr.join('');

	return orgString === newString;
}
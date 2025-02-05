function isPalindrome(x: number): boolean {
    const palindrome = x.toString()
    const size = Math.floor(palindrome.length / 2)

    for (let i = 0; i < size; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) return false;
    }

    return true
};

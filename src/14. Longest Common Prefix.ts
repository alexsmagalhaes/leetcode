function longestCommonPrefix(strs: string[]): string {
    let prefix = ''
    const first = strs[0]

    if (strs.length < 2) return first

    for (let i = 0; i < first.length; i++) {
        for (let row = 0; row < strs.length; row++) {
            if (strs[row][i] === first[i]) prefix += first[i]
            else
                return prefix;
        }
    }

    return prefix
};

console.log(longestCommonPrefix(["flower", 'flowweret', 'carww']))
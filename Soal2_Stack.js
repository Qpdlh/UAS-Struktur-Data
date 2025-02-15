function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // Jika karakter adalah tanda buka
            stack.push(char);
        } else {
            // Jika karakter adalah tanda tutup
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false; // Tidak valid
            }
        }
    }
    return stack.length === 0; // Valid jika stack kosong
}

// Contoh Penggunaan
console.log(isValid("()[]{}"));      // Output: true
console.log(isValid("(]"));           // Output: false
console.log(isValid("([{}])"));        // Output: true
console.log(isValid("({[}]"));      // Output: false

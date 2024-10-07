/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
        // Create a stack to keep track of opening brackets
        let stack = [];
        
        // Create a mapping of closing to opening brackets
        const bracketMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
    
        // Iterate through each character in the string
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
    
            // If it's a closing bracket, check if the stack has a matching opening bracket
            if (bracketMap[char]) {
                // Pop from the stack and check if it matches
                let topElement = stack.length === 0 ? '#' : stack.pop();
                if (topElement !== bracketMap[char]) {
                    return false; // Mismatched brackets
                }
            } else {
                // It's an opening bracket, push it onto the stack
                stack.push(char);
            }
        }
    
        // If the stack is empty, all opening brackets were properly closed
        return stack.length === 0;
    }
};

module.exports = { isValid };



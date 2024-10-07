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
    
       
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
    
            if (bracketMap[char]) {
          
                let topElement = stack.length === 0 ? '#' : stack.pop();
                if (topElement !== bracketMap[char]) {
                    return false; 
                }
            } else {
           
                stack.push(char);
            }
        }
    
        
        return stack.length === 0;
    }


module.exports = { isValid };



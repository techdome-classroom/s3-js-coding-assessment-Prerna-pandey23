/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map for Roman numerals and their corresponding integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialize the result variable to hold the final integer value
    let result = 0;

    // Loop through the string 's'
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        let currentVal = romanMap[s[i]];
        // Get the value of the next Roman numeral (if exists)
        let nextVal = romanMap[s[i + 1]];

        // If the next value is larger, subtract the current value from the result (subtraction rule)
        if (nextVal && currentVal < nextVal) {
            result -= currentVal;
        } else {
            // Otherwise, add the current value to the result
            result += currentVal;
        }
    }

    // Return the final integer value
    return result;
};


module.exports={romanToInt}
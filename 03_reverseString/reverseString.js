const reverseString = function(forwardstring) {
    let reversedString = ''
    for(let i = forwardstring.length-1; i > -1; i--){
        reversedString += forwardstring[i]
    }

    console.log(reversedString)
    return reversedString    
};

// Do not edit below this line
module.exports = reverseString;

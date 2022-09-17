const repeatString = function(string, number) {
    const stringArray = []
    let repeatedString = ''

    if(number < 0){
        return 'ERROR'
    }
    
    for(let i = 0; i < number; i++){
        stringArray.push(string)
    }

    for(let x = 0; x < stringArray.length; x++){
        repeatedString += stringArray[x]
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;

const removeFromArray = function() {
    const mixedArray = arguments[0]
    console.log("arg length: " + arguments.length)


    for(let x = 1; x < arguments.length; x++){
        for(let i = 0; i < arguments[0].length; i++){
            if(arguments[0][i] === arguments[x]){
                mixedArray.splice(i, 1)
            }
        }
    }

    
    console.log(mixedArray)
    return mixedArray
};

// Do not edit below this line
module.exports = removeFromArray;

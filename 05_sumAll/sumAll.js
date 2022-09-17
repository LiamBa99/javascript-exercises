const sumAll = function() {
    let lowNum = 0
    let highNum = 0
    let sumNum = 0

    console.log(typeof(arguments[1]))

    if(!(typeof(arguments[1]) === 'number')){
        return 'ERROR'
    }

    if(arguments[0] < 0 || arguments[1] < 0){
        return 'ERROR'
    }

    if(arguments[0] > arguments[1]){
        lowNum = arguments[1]
        highNum = arguments[0]
    }else{
        highNum = arguments[1]
        lowNum = arguments[0]
    }
    
    for(let i = highNum; i > lowNum -1; i--){
        sumNum += i
    }

    return sumNum
};

// Do not edit below this line
module.exports = sumAll;

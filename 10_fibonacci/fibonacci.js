const fibonacci = function() {
    if(arguments[0] < 0){
        return "OOPS"
    }

    let fibNum = arguments[0];
    let nextNum = 1;
    let n1 = 0;
    let n2 = 1;

    for(let i = 0; i < fibNum; i++){
        
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;

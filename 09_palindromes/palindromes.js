const palindromes = function () {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    let newString = arguments[0].replace(regex, '');
    newString = newString.toLowerCase();
    newString = newString.replace(/\s+/g, '');
    
    console.log(newString);
    for(let i = 0; i < (Math.ceil(newString.length/2)); i++){
        if(newString[i] != newString[(newString.length)-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

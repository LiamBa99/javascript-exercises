const getTheTitles = function(books) {
    let titleArray = [];

    for(let key in books){
        titleArray.push(books[key].title)
    }
    console.log(titleArray)
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;

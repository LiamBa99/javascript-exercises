const findTheOldest = function(people) {
    let curAge = 0;
    let oldestAge = 0;
    let oldest = '';
    let date = new Date();

    let curYear = date.getFullYear()

    for(let key in people){
        if(isNaN(people[key].yearOfDeath)){
            curAge = curYear - people[key].yearOfBirth;
        } else {
            curAge = people[key].yearOfDeath - people[key].yearOfBirth;
        }
        if(curAge > oldestAge){
            oldestAge = curAge;
            oldest = people[key]
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

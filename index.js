// Code your solution in this file!
const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(scuberDrivers){
    return scuberDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(scuberDrivers){
    return scuberDrivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(num2){
    return number * num2;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(scuberDrivers);
}
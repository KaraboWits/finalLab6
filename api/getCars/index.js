module.exports = async function (context, req){
    context.log('Display all the cars from the API');
    const cars = require('.../cars.json');
    context.res = {
        body: cars
    };
};
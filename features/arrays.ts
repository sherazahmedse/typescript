const carMakers : string [] = ['ford', 'toyota', 'chevy'];
// const someCarMakers [] = [];
const dates = [new Date(), new Date()]; 
const towDArrays : string [] [] = [];  



// pros and cons 
// Help with inferece when extracting values 
const car = carMakers[1];
const myCar = carMakers.pop();

// Prevent incompatible values 
// carMakers.push(100) throws errors 

// help with map 

carMakers.map((car : string) : string => {
  return car.toLocaleLowerCase(); // auto complete provided 
});


// fexible types 
const importantDates : (Date | string )[] = [new Date() ]; 
importantDates.push('2012-12-01');
importantDates.push(new Date);
// importantDates.push(12312);  ERROR


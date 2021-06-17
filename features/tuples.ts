const drink = {
  color: 'brown',
  carbonated: true, 
  suger: 40
} 


// const pepsi = ['brown', true , 40 ]; // WE can swap the order here

// pepsi[0] = 40 ;
// pepsi[2] = 'brown' ;
 
const sprite : [string, boolean, number] = ['brown', true , 40 ]; 

type drink = [string,boolean, number] ; // type alias
const coke : drink = ['brown', true , 40 ]; 



const carSpecs: [number, number] = [1213, 1231];
const carStats = {
  horsepower : 1231,
  weight: 123 
} 


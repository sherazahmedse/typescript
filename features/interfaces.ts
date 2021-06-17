interface Vehicle {
  name: string ; 
  year: Date; 
  broken: boolean;
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(), 
  broken: true,
  summary () : string {
    return `name ${this.name}`
  }
} 

// const printVehicle  = (vehicle : { name: string ; year: number; broken: boolean;}) : void => {
//   console.log(`Name : ${vehicle.name}`);
//   console.log(`years : ${vehicle.year}`);
// }; 

// const printVehicle  = (vehicle : Vehicle) : void => {
//   console.log(`Name : ${vehicle.name}`);
//   console.log(`years : ${vehicle.year}`);
// }; 


const printVehicle  = (vehicle : Vehicle) : void => {
  console.log(`Summary :`,  vehicle.summary());
}; 

printVehicle(oldCivic);


// ------------------


const drinkkk = {
  color: 'brown',
  carbonated: true, 
  suger: 40
} 



interface reportable {
  summary() : string
} 
const A = {
  name : 'A',
  summary() {
    return `${this}`;
  }
}
const B = {
  name : 'B',
  summary() {
    return `${this}`;
  }
}

const printReport = (item : reportable ) : void => {
  console.log(`Report : ${item.summary()}` )  
}; 
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 100,
    long: 122
  },
  setAge (age : number) : void {
    this.age = age;
  }
} 

// const age = profile.age;
const { age } : {age : number} = profile;

// const coords : { 
//   latitude : number ;
//   longitude : number 
// } = {
//   latitude: 100,
//   longitude: 122
// }

const  { 
  coords : { lat , long } 
} : {coords : {lat : number , long : number} } = profile;  
 

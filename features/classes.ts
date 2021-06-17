class Vehicle {

  constructor(public color : string){}
  
  protected honk () : void {
    console.log('peep peep');
  }
}

class Car extends Vehicle {

  constructor (public wheels: number, color : string) {
    super(color);
  }

  private drive() : void {
    console.log('diveee')
  }

  public startDrivingProcess() : void {
    this.drive();
  }
  public driveAndHonk() : void {
    this.drive();
    this.honk();
  } 
} 

const car = new Car(4,'Color is Red');
car.startDrivingProcess();
car.driveAndHonk();

// const vehicle = new Vehicle();
// console.log(vehicle.color);
// vehicle.honk(); // throws and error
 







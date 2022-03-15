const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar)

const myCar2 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
console.log(myCar2)

const myCar3 = new Object()
myCar3['make'] = 'Ford';
myCar3['model'] = 'Mustang';
myCar3['year'] = 1969;
console.log(myCar3)

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar4 = new Car('Eagle', 'Talon TSi', 1993);
console.log(myCar4)


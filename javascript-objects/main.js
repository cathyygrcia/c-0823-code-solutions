const student = {
  firstName: 'Cathy',
  lastName: 'Garcia',
  age: 27,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'receptionist';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

const vehicle = {
  make: 'Subaru',
  model: 'WRX',
  year: 2016,
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("Value of vehicle['color']:", vehicle['color']);
console.log("Value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Charlie',
  type: 'Cat',
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);

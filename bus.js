const Bus = function (route, distance = 0, destination, passengers = []) {
  this.route = route;
  this.distance = distance;
  this.destination = destination;
  this.passengers = passengers;
}

Bus.prototype.drive = function (distance) {
  this.distance += 10;
}

Bus.prototype.amountOfPassengers = function () {
  return this.passengers.length;
}

Bus.prototype.pickUp = function (person) {
  this.passengers.push(person);
}

Bus.prototype.dropOff = function (person) {
  this.passengers.pop(person);
}

Bus.prototype.empty = function () {
  this.passengers = [];
}

Bus.prototype.pickUpFromStop = function (stop) {
  for (let person of stop.queue){
    this.pickUp(person);
  }
    stop.empty();
}

module.exports = Bus;

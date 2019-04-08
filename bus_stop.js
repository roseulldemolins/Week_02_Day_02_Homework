const BusStop = function (name, queue = []) {
  this.name = name;
  this.queue = queue;
}

BusStop.prototype.addToQueue = function (person) {
  this.queue.push(person);
}

module.exports = BusStop;

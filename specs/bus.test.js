const Bus = require('../bus');
const Person = require('../person')
const BusStop = require ('../bus_stop')

describe('Bus', () => {

  let twentytwo;
  let rose;
  let morrisoncrescent

  beforeEach(() => {
    twentytwo = new Bus(22, 0, "Ocean Terminal");

    rose = new Person("Rose", 24);

    morrisoncrescent = new BusStop("Morrison Crescent")

  });

  test('Has a route number', () => {
    expect(twentytwo.route).toBe(22);
  });

  test('Has a  destination', () => {
    expect(twentytwo.destination).toBe("Ocean Terminal");
  });

  test('Has a route number', () => {
    expect(twentytwo.route).toBe(22);
  });

  test('Drive adds 10 to distance', () => {
    twentytwo.drive();
    expect(twentytwo.distance).toEqual(10);
  });

  test('Has a name', () => {
    expect(rose.name).toBe("Rose");
  });

  test('Has an age', () => {
    expect(rose.age).toBe(24);
  });

  test('Amount of passengers', () => {
    expect(twentytwo.amountOfPassengers()).toBe(0);
  });

  test('Pick up a passenger', () => {
    twentytwo.pickUp(rose);
    expect(twentytwo.passengers.length).toEqual(1);
  });

  test('Drop off a passenger', () => {
    twentytwo.dropOff(rose);
    expect(twentytwo.passengers.length).toEqual(0);
  });

  test('Remove all passengers', () => {
    twentytwo.empty();
    expect(twentytwo.amountOfPassengers()).toEqual(0);
  });

  test('Join the queue', () => {
    morrisoncrescent.addToQueue(rose);
    expect(morrisoncrescent.queue.length).toEqual(1);
  });

  xtest('Pick up from bus stop', () => {
    morrisoncrescent.addToQueue(rose);
    twentytwo.pickUpFromStop(morrisoncrescent);
    expect(morrisoncrescent.queue.length).toBe(0);
    expect(twentytwo.passenger.length).toBe(1);
 });

});

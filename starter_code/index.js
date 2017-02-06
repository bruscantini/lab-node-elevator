/* jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');
var _ = require('lodash');

var elevator = new Elevator();
var persons = [
  new Person('bob', 1, 4),
  new Person('bill', 2, 3),
  new Person('lucas', 10, 9),
  new Person('nancy', 2, 1),
  new Person('alice', 8, 2)
];

_.forEach(persons, (val) => {
  elevator.call(val);
});
elevator.start();

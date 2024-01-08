#!/usr/bin/node
/**
 * Script randomly generates and prints a name
 * and a superhero name.
 */

// Common JS Module importation
// var generateName = require('sillyname');

// ECMAScript Modules importation
import generateName from 'sillyname';
import superheroes from 'superheroes';

var sillyname = generateName();
const superheroName = superheroes.random();

console.log(`My name is: ${sillyname}`);
console.log(`My superhero name is: ${superheroName}`);

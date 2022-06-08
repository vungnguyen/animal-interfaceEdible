"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tiger_1 = require("./Animals/Tiger");
const Chicken_1 = require("./Animals/Chicken");
const Apple_1 = require("./Fruits/Apple");
const Orange_1 = require("./Fruits/Orange");
console.log('---Animals----');
let animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howtoEat());
    }
});
console.log('---Fruits---');
let fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach((item, index) => {
    console.log(item.howtoEat());
});

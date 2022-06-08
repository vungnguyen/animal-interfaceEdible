"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chicken = void 0;
const Animal_1 = require("../AbstractClass/Animal");
class Chicken extends Animal_1.Animal {
    makeSound() {
        return "Chicken: cuc-tac";
    }
    howtoEat() {
        return "could be fried";
    }
}
exports.Chicken = Chicken;

import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../interfaceClass/Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "Chicken: cuc-tac";
    }
    howtoEat(): string{
        return "could be fried"
    }
}
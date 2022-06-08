import {Edible} from "../interfaceClass/Edible";

export abstract class Fruit implements Edible {
    abstract howtoEat(): string;
}

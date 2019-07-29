'use strict';

import Animal from './animal.js'
import Dog from './dog.js'
import Cat from './cat.js'
import { add } from './helper.js'
console.log(add(30,20));
// class Car {
//     constructor(model, color){
//         this.model = model;
//         this.color = color;
//         this.fuel = 100;
//     }

//     drive(){
//         this.fuel--;
//         console.log('Vroom!', this.fuel)
//     }

//     refuel(){
//         this.fuel = 100;

//     }
// }


// const camry = new Car('Camry', 'Black');
// camry.drive();
// camry.refuel();
// console.log(camry.fuel);

class Person {
    constructor(initiname){
        this.name = initiname;
        this.species = "Homo Sapiens Sapiens";
    }

    spake(){
        return `Hello ! I am ${this.name}`
    }
}




const pet = new Animal('tom', 'cat', 10, 'Meaw');

pet.getOlder();
console.log(pet.makeSound());




const gg = new Dog('aa', 'dd');
console.log(gg.makeSound());



const cate = new Cat('momo', 27);
cate.getOlder();
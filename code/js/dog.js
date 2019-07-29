

export default class Dog extends Animal {
    constructor(name, age){
        super(name, 'Dog', age, 'Barks', true);
    }
    makeSound(){
         `${this.sound} ! H. And I'm  ${this.age} years old.`;
    }
}


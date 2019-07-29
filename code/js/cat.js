export default class Cat extends Animal {
    constructor(name, age){
        super(name, "cat", age, "mew", false);
    }

    getOlder(){
        this.age+= 10;
        console.log(this.age);
    }
}
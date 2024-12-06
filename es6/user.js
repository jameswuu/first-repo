export default class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }
}
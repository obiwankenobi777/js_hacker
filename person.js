class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get() {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

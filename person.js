#!/usr/bin/env node

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get() {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

let me = new Person("ian", 40);
me.get();

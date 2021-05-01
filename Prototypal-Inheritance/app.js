//Objects inherit from other objects - known as prototypal inheritance 
function fool() {

}

console.log(typeof(fool.prototype))

function Person(name){
    this.name = name;

}

Person.prototype.walk = function(){ //creates a blueprint of the object
    console.log(this.name + ' is walking');
};

function Programmer(name){
    Person.call(this.name); //call provies a new value to "this" for the function or method --- Call is used to chain constructors for an object
    this.program = " ";
}

Programmer.prototype = Object.create(Person.prototype); // using Programmer.prototype we will create a new Object

var bob = new Person("Bob");
bob.walk(); //bob is walking

var Albert = new Person("Albert");
Albert.walk()  //Albert is walking

console.log(bob,Albert); //Person { name: 'Bob' } Person { name: 'Albert' }
class Prograd{
    constructor(name,id){ //a class can have only one constructor 
        this.name=name; //this refers to the parameter in this class
        ths.id=id;
    }
}

//create an object
let prograd1 = new Prograd("Alice", 1); //new keyword is used to create a new object. Here Prograd refers to the above class
console.log(prograd1);
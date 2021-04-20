class Address{
    constructor(name,id){
        this.name= name;
        this.id= id;
    }
    getDetails(){
        return this.name; // get and set is used to encapsulate the data 
    }
    setDetails(add){
        this.add = add; // the value Delhi is hidden in this.add = Encapsulation
    }
    getAddress(){
        console.log(`Name is ${this.name}, Address is: ${this.add}`);
    }
}

let person = new Address('Venkat',21);
person.setDetails('Delhi');
person.getAddress(); //Name is Venkat, Address is: Delhi

// Inheritance = Methods of Base class gets copied to Derived class

class Prograd{
    name;
    prograd_Id;
    constructor(name,prograd_Id){
        this.name = name;
        this.prograd_Id = prograd_Id;
    }
    //defining a method  which signifies the behaviour of the parameters
    displayDetails(){
        console.log(this.name); //Venkatesh
        console.log(this.prograd_Id); // 1
    }
}
//end of class Prograd
//create an obj
let prograd = new Prograd("Venkatesh",1);
prograd.displayDetails();
console.log(prograd); // Prograd { name: 'Venkatesh', prograd_Id: 1 }

class Meetup { //defining a  class 

}
class TechMeet extends Meetup { // single level inheritance

}
class SportMeet extends Meetup{
}
class CulturalMeet extends SportMeet{
}
let prograds = new TechMeet();
console.log(prograds instanceof TechMeet); //checking True
console.log(prograds instanceof Meetup); //true
console.log(prograds instanceof Object);  //true


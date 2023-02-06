class Car {

     constructor (make,model,Min,Max,year) {
        this.make=make,
        this.model=model,
        this.cost=this.Carcost(Min,Max),
        this.year=year       
    }
 Carcost(Min,Max){
    return Math.floor((Math.random() * Max ) + Min);
}

 getDescription() {
   return `A ${this.model} make by ${this.make} and the year is ${this.year} and the cost is ${this.cost} `
}

}

const car1=new Car('toyota','camry',10,50,2023);
console.log(car1.getDescription());

// 

class Person {
    constructor (firstname,lastname,age) {
this.firstname=firstname,
this.lastname=lastname,
this.age=age
    }
    getGreeting(){
       return `Hi, I'm ${this.firstname} ${this.lastname} and I'm ${this.age} years old.`
    }
}

const person1=new Person('Haneen','Ghassan',31);
console.log(person1.getGreeting());

// -----------------------------------------------------------------------------------

 counterFunc = (counter) =>{ return counter > 100 ?  counter = 0  : counter++  }
   

  console.log(counterFunc(200))

//   -----------------------------------------------------------------------------------

nameAge =(name, age) => console.log("Hello " +" " + name +"You are " + age + " years old");
nameAge('haneen',31);

// -----------------------------

createFullName = (firstName, lastName) => {return  firstName + " " + lastName};

console.log(createFullName('haneen','ghassan'));

// ------------------------------------------------------------------------------------

doubleNumber = (number) => {return number * 2}
console.log(doubleNumber(4));

//---------------------------------------------------------------------------------------

const evenNumbers  = [7, 10, 15, 8, 13, 18, 6];

const evens = evenNumbers .filter((i) => i % 2 === 0);


console.log(evens);

// --------------------------------------------------------------------------

5 < 2 ? (()=>{
    for (let index = 0; index < 5; index++) {console.log("hi");}
}) ():console.log("bye"); 


// ----------------------------------------------------------------------------

let list =[1,2,3,4,5,6,7,8];
let arr=list.map(e=>e*10);
console.log(arr);

//----------------------------------------------------------------------------
makeStrings=[
        {  name: "Angelina Jolie",
            age: 80 },
        {   name: "Eric Jones",
            age: 2
        },
        {   name: "Paris Hilton",
            age: 5
        },
        {   name: "Kayne West",
            age: 16
        }, 
        {  name: "Bob Ziroll",
           age: 100
     }
    ]; 

    const rr=makeStrings.map((ele)=> ele.age>10 ? `${ele.name} can go to The Matrix` :`${ele.name}  is under age!!`) ;

    console.log(rr);

    

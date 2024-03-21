/*Name: Hassaan khan */
/*Assignment Govt. IT Initiative Timings:Tuesday(9:00am to 12:00pm)*/
/*In this file i'm going to do all the codes and work which we done and discussed in governor house on-site class  */
/*From the beginning we learn how to print name */
console.log("Hassaan Khan");

/*Second we study about variables & data types */
let myVar=30; //this is called declaration of a variable
console.log(myVar); //calling the variable and printing it on cmd

/*Data types */
/*Permative Data Types*/
/*First string*/
let str: string = "Type Script"; //the term we write after ":" which is "string", it means we are giving a data type to the desired variable
console.log(str);

/*Second Number*/
let num1: number = 45;
let num2: number = 54;
console.log(num1 + num2);

/*Third Boolean*/
let val: boolean = true;
console.log(val);

/*Fourth Null */
let myVar2: null = null;
console.log(myVar2);

/*Fifth Undefined */
let val2: undefined = undefined;
console.log(val2);

/*This process is known as concatenation 
string operation*/
let personName:string = "Hassaan";
console.log("Khush Aamdeed,"+ personName ,"bhai!"); //concatenation used to join two string words and the "," is used to separate two string words with space as well

/*Now same example implementing on number*/
let personAge:number=40;
//we want to print like this-> "Person's age is 45"
let finalAge:number=personAge+5;
console.log("Person's age is "+ finalAge);

/*Moving on we also study about cases in programming languages */
let userName = "Umar";/*camelCase */
let user_name = "Usman";/*snake_case */
let UserName = "Hassaan";/*PascalCase */

/*ARRAYS*/
/* for printing all the data present in Array*/
let students = ["Hassaan", "Rehan", "Rizwan", 4, 55, true]
console.log(students);

/* for selecting/searching a single value which is present in Array through index number*/
let firstStudentName = students[0]  /*such as we want to see first student name*/
console.log(firstStudentName);
console.log(students[5]); //This is the second way that we can also print like this
console.log(students[8]); //as we know that in index 8 there is no value such that we just want what the compiler can compile after giving this value

/*now as we assigning a type in variable, same we also assign a type to array as well */
let students_2: string[] = ["Hassaan", "Rehan", "Rizwan"] //because this array contains only string values
console.log(students_2[0], students_2[1]);

/* Class Activity*/
/* Array of numbers*/
let numArray:number[] = [45, 64, 55, 98, 78] 
console.log(numArray);

/* Array of booleans*/
let bool1:boolean[] = [true, false, true, false] 
console.log(bool1);
console.log("Hence created Array's of Numbers & Boolean");

/* How to update a value in Array*/
let cars: string[] = ["Alto", "Corolla", "Honda"]
cars[1]="Vitz" //we want to update Vitz against Corolla
console.log(cars);

/*After that we study about Objects 
Syntax of an object is {}, in object we have {key:value} pair*/
let student={
    fullName:"Muhammad Hasnain",
    Qualification:"Intermediate",
    Group:"Science",
    Job:"Freelancer",
    Nature:"Polite",   
    isPassed:true,
    subjects_1:["English", "Urdu", "Maths"],
}
//we want to print both the arrays at once
let student_2=[student,{
    fullName:"Hassaan Khan",
    Qualification:"Intermediate",
    Group:"Science",
    Job:"Student",
    Nature:"Aggressive", 
    isPassed:true,
}]
console.log(student_2);

//we created object into object, means an object which also contains another object in it
let std={
    fullName:"Muhammad Ghuffran",
    Qualification:"Graduate",
    Group:"Boilogy",
    Job:"Software Engineer",
    Nature:"Polite", 
    isPassed:true,
    subjects:["JavaScript", "Angular JS", "Node JS"],
    fee_schedule:{
    month: "March 24",
    amount: 2000,
}
}
console.log(std);
console.log(std.fee_schedule.month+", Amount ="+ std.fee_schedule.amount);//we want to see the student's fee

//Now we study how to assign a type in object

/*We are assigning a type of the below object, like this; */
type StdType = {
    fullName: string,
    Qualification: string,
    Group: string,
    contactNumber: number,
    Job: string,
    Nature: string,
    isPassed: boolean,
    subjects: string[],
    address: AddressType,
}
/*When we assigning a type to an object then there are two ways one is "type"  & second is "interface", but in interface you cannot use "=" after the type name.*/
interface AddressType {
    streetName: string,
    city: string,
    country: string,
    zipCode: number,
    //Moreover, we create an interface to assign type to address object because it is present in an object of "stud" but type will be assigned separately
}
let stud: StdType = {
    fullName: "Umair Tariq",
    Qualification: "Graduate",
    Group: "Boilogy",
    contactNumber: 123456789,
    Job: "Doctor",
    Nature: "Polite",
    isPassed: true,
    subjects: ["JavaScript", "Pakistan Studies", "Zoology"],
    address: {
        streetName: "abc Road",
        city: "Karachi",
        country: "Pakistan",
        zipCode: 23456,
    }
}
console.log(stud);





 class Employee
{
    name:string;
    color :string;
    dateOfYear:string;

    constructor(name,color,dateOfYear)
    {
        this.name=name;
        this.color=color;
        this.dateOfYear=dateOfYear
    }

    getName()
    {
        return this.name;
    }
    getColor()
    {
        return this.color;
    }
    getDateOfYear()
    {
        return this.dateOfYear;
    }
}

class AdhocEmployee extends Employee{
    numberOfHours:number;
    
    constructor(name,color,dateOfYear,numberOfHours)
    {
         super(name,color,dateOfYear);
         this.numberOfHours=numberOfHours;
    }
    getNumberOfHours()
    {
        return this.numberOfHours;
    }
} 

var obj=new  AdhocEmployee('John','white',1987,9);
console.log("Name: "+ obj.getName());
console.log("Color : "+ obj.getColor());
console.log("Date of Year: "+ obj.getDateOfYear());
console.log("Number of working Hours: "+ obj.getNumberOfHours());

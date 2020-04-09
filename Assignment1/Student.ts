export class Student
{
   enrolmentNumber :string;
   studentName: string;

  constructor(number,name)
  {
    this.enrolmentNumber=number;
    this.studentName=name;
  }
  display = () => console.log("Enrolment Number: "+this.enrolmentNumber +', Student Name: ' + this.studentName)
}

    
let stud=new Student(1001,'john');
stud.display();

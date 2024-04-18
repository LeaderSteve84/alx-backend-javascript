// Define an interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;  // Allow additional properties of any type
}

// Define an interface Director that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define a function to print teacher's initials
const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

// Define a class StudentClass
class StudentClass {
  firstName: string;
  lastName: string;
  // Constructor method for initializing firstName and lastName
  construction(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework = () : string => 'Currently working';
  
  // Method to display the student's first name
  displayName = () : string => this.firstName;
}

// Define a type for a function that constructs StudentClass instances
interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

// Create an instance of Student class
const student = new StudentClass("Paul", "jerry");

// Output the result of calling displayNmae() and workOnHomework() methods
console.log(student.displayName());
console.log(student.workOnHomework());

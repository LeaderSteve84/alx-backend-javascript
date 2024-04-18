// tripple-slash directive to reference external Typescript file 'Teacher.ts'

/// <reference path="Teacher.ts" />

// Define a namespace called subjects to encapsulate related interfaces and classes
namespace Subjects {
  // Define an interface named Teacher within the Subjects namespace
  export class Subject{
    teacher: Teacher; // Declare a property 'teacher' of type 'Teacher'
    // Method to set the 'teacher' property with a provided 'teacher' object 
    setTeacher = (teacher: Teacher) => {
      this.teacher = teacher; // Assign the provided teacher object to the teacher property
    }
  }
}

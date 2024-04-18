/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

// Define a namespace called ubjects to encapsulate related interfaces and classes
namespace Subjects {
  // Define an interface named Teacher within the Subjects namespace
  export interface Teacher {
    experienceTeachingJava?: number; // Optional property representing teaching experience in Java
  }
  // Define a class named JavaClass within the Subjects namespace, extending from an assumed superclass Subject
  export class JavaClass extends Subject{
    // Method that returns a string representing the requirements for learning in Java
    getRequirements = () => 'Here is the list of requirements for Java';
    // Method that checks for an available teacher with experience teaching Java
    getAvailableTeacher = () => {
      // Check if the teacher property exists and has experienceTeachingJava property set
      if (!this.teacher?.experienceTeachingJava) {
              return 'No available teacher';
      }
      // Return a message indicating the available teacher with their details
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

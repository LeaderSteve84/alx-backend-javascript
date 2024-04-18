/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

// Define a namespace called ubjects to encapsulate related interfaces and classes
namespace Subjects {
  // Define an interface named Teacher within the Subjects namespace
  export interface Teacher {
    experienceTeachingC?: number; // Optional property representing teaching experience in C++
  }

  // Define a class named Cpp within the Subjects namespace, extending from an assumed superclass Subject
  export class Cpp extends Subject {
    // Method that returns a string representing the requirements for learning in C++
    getRequirements = () => 'Here is the list of requirements for Cpp';
    
    // Method that checks for an available teacher with experience teaching C++
    getAvailableTeacher = () => {
      // Check if the teacher property exists and has experienceTeachingC property set
      if (!this.teacher?.experienceTeachingC) {
        return 'No available teacher'; // Return this messag if no suitable teacher is found
      }
      // Return a message indicating the available teacher with their details
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

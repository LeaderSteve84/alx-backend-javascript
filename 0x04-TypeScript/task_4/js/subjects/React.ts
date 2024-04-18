/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

// Define a namespace called ubjects to encapsulate related interfaces and classes
namespace Subjects {
  // Define an interface named Teacher within the Subjects namespace
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property representing teaching experience in React
  }
  // Define a class named ReactClass within the Subjects namespace, extending from an assumed superclass Subject
  export class ReactClass extends Subject{
    // Method that returns a string representing the requirements for learning in React
    getRequirements = () => 'Here is the list of requirements for React';
    // Method that checks for an available teacher with experience teaching React
    getAvailableTeacher = () => {
      // Check if the teacher property exists and has experienceTeachingC property set
      if (!this.teacher?.experienceTeachingReact) {
        return 'No available teacher';
      }
      // Return a message indicating the available teacher with their details
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

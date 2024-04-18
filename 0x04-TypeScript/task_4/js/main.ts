/// <reference path="./subjects/Subject.ts" /> // Reference to Subject.ts file

// Importing Subjects namespace from './subjects/Subject.ts' (assuming it's a namespace or module)
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Creating instances of specific subjects (Cpp, Java, React) from the Subjects namespace
export const cTeacher:Subjects.Teacher = {
    firstName: "Professor",
    lastName: "C. Teacher",
    experienceTeachingC: 10
};

// Assuming the C teacerto the teacher property of the cpp subject
cpp.teacher = cTeacher;

// Logging messages related to C++
console.log("C++");
console.log(" getRequirements: ", cpp.getRequirements()); // Accessing getRequirements method of cpp
console.log(" getAvailableTeacher: ", cpp.getAvailableTeacher()); // Accessing getAvailableTeacher method of cpp

// Assigning the C teacher to the teacher property of the java subject
java.teacher = cTeacher;

// Logging messages related to Java
console.log("Java")
console.log(" getRequirements: ", cpp.getRequirements()) // Accessing getRequirements method of cpp (possible typo, should be java.getRequirements())
console.log(" getAvailableTeacher: ", cpp.getAvailableTeacher()) // Accessing getAvailableTeacher method of cpp (possible typo, should be java.getAvailableTeacher())

// Assigning the C teacher to the teacher property of the react subject
react.teacher = cTeacher;

// Logging messages related to React
console.log("React");
console.log(" getRequirements: ", cpp.getRequirements()); // Accessing getRequirements metod of cpp (possible typo, should be react.getRequirements())
console.log(" getAvailableTeacher: ", cpp.getAvailableTeacher()); // Accessing getAvailableTeacher method of cpp (possible typo, should be react.getAvailableTeacher())

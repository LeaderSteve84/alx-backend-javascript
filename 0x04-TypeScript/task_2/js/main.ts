// Define an interface for Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define an interface for Teacher
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Define a class Teacher that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

// Function to create an employee instance based on salary
export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500v? new Teacher() : new Director();

// function to check if an employee is a Director
export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

// Fuction to execute work tasks for an employee
export default executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
};

// Define a union type for subjecs
type Subjects = 'Math' | 'History';

// Function to teach a clas based on the subject
export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};

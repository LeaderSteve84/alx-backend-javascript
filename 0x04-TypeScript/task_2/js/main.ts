interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500v? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export default executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

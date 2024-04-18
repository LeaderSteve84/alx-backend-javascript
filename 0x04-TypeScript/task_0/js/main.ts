// Define an interface Student
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define student1 and student2 objects conforming to the student interface
const student1: Student = {
  firstName: 'First',
  lastName: 'Student',
  age: 20,
  location: 'Nairobi',
};
const student2: Student = {
  firstName: 'Second',
  lastName: 'Student',
  age: 100,
  location: 'Nairobi', 
};
// Create an array of students
const studentsList: Array<Student> = [student1, student2];

// function to render a table from an array of Student objects
function render(students: Array<Student>) {
  const table = document.createElement('TABLE');
  const thead = document.createElement('THEAD');
  const thead_tr = document.createElement('TR');
  const tbody = document.createElement('TBODY');

// Create table headers based on keys of the first student object
  Object.keys(students[0]).forEach((k) => {
    const th = document.createElement('TH');
    th.innerText = k;
    thead_tr.appendChild(th);
  });
  thead.appendChild(thead_tr);
  table.appendChild(thead);
  students.forEach((student: Student) => {
    const tr = document.createElement('TR');
    Object.values(student).forEach((v) => {
      const td = document.createElement('TD');
      td.innerText = v.toString();
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.querySelector('body').appendChild(table);
}

// Call the render function with the studentsList
render(studentsList);

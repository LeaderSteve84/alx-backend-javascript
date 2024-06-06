const fs = require('fs');

function countStudents(path) {
  let fileContent;
  try {
    fileContent = fs.readFileSync(`${path}`, { encoding: 'utf8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const cStudents = fileContent.split('\n');
  let students = cStudents.filter((item) => item);

  const numberOfStudents = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${numberOfStudents}`);

  students = students.slice(1);
  const dict = {};
  students.forEach((element) => {
    const list = element.split(',');
    const key = list[3];
    if (!(key in dict)) {
      dict[key] = [];
    }
    dict[key].push(`${list[0]}`);
  });
  for (const i in dict) {
    if (i) {
      console.log(`Number of students in ${i}: ${dict[i].length}. List: ${dict[i].join(', ')}`);
    }
  }
}
module.exports = countStudents;

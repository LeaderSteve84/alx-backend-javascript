// Define the function getListStudents
function getListStudents() {
  // Define an array of student objects
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', locaton: 'San Francisco' }
  ];
  // Return the array of the students objects
  return students;
}

// export the function to make it available to other module
export default getListStudents;

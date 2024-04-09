export default function createIteratorObject(report) {
  const { allEmployees } = report;

  return {
    * [Symbol.iterator]() {
      for (const department in allEmployees) {
        if (department) {
          const employeeList = allEmployees[department];
          for (const employee of employeeList) {
            yield employee;
          }
        }
      }
    },
  };
}

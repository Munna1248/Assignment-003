/** Problem 06 : (Current Salary) */

// Data
var salaryData = [
  { startingSalary: 45000, experience: 30 },
  { startingSalary: 15000, experience: 3 },
  { startingSalary: 30000, experience: 40 }
];

// Equation
salaryData.forEach(function (entry) {
  var currentSalary = entry.startingSalary * Math.pow(1.05, entry.experience);
  console.log(currentSalary.toFixed(2));
});

let express = require("express");
let app = express();
let port = 3000;


let emp = [
  {name: "RS", department: "HR", salary: 50000},
  {name: "SS", department: "Finance", salary: 60000},
  {name: "PS", department: "Marketing", salary: 50000},
  {name: "PS", department: "Marketing", salary: 50000}
];

function fBD(employee, department){
  return employee.department === department;
}

app.get('/employees/department/:department', (req, res) => {
  let department = req.params.department;
  let result = emp.filter(employee => fBD(employee, department));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
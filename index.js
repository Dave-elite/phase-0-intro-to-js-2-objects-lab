// Write your solution in this file!
const employee = {
    name: "David Njenga",
    streetAddress:405-8858
}
function updateEmployeeWithKeyAndValue(employee, key, value){
let newEmployee = {...employee, name: "Sam", streetAddress:"11 Broadway"}
return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;}

 
function deleteFromEmployeeByKey(employee, key,value){
    let updatedEmployee={...employee, newname:"Maingi"}
    delete updatedEmployee[key];
return updatedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

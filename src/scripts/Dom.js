// import entitiesData from "./EntityCollection.js"
import infoCollection from "./InfoCollection.js"

let domManipulation =


//WITH FETCH FROM DATABASE.JSON
// {

//   displayEmployeeApi: () => {

//     entitiesData.getEmployees().then((response) => {

//       for (let i = 0; i < response.length; i++) {
//         let currentEmployee = response[i]
//         $("#employeeFromApi").append(`<div><h3>Employee Name:</h3><h3>${currentEmployee.name}</h3>
//       <h3>Computer:</h3>
//       <h3>Department:</h3>
// </div>`)

//       }
//     })
//   }
// }


//WITH NO FETCH FROM INFOCOLLECTION.JS
{
  displayEmpInf: () => {

    for (let j = 0; j < infoCollection.employees.length; j++) {

      // console.log(infoCollection.employees[j])

      let currentEmployee = infoCollection.employees[j]

      // $("#empolyeeFromJs").append(`<div id="employee_${currentEmployee.employee_id}"><h3>Employee</h3><p>${currentEmployee.name}</p>
      // `)

      let currentEmployeeDepartment = infoCollection.departments.find((dept) =>
        dept.departmentId === currentEmployee.departmentId)

      // console.log(infoCollection.departments[j].name)

      let currentEmployeeComputer = infoCollection.computers.find((comp) =>
        comp.computerId === currentEmployee.computerId)

       $("#empolyeeFromJs").append(`<fieldset><div id="employee_${currentEmployee.employee_id}"><h3>Employee</h3><p>${currentEmployee.name}</p>
       <h3>Department:</h3><p>${currentEmployeeDepartment.name}<h3>Department Location:</h3><p>${currentEmployeeDepartment.location}</p>
       <h3>Computer:</h3><p>${currentEmployeeComputer.type}</p><h3>Computer Brand:</h3><p>${currentEmployeeComputer.brand}</p></fieldset>
      `)
    }
  }
}





export default domManipulation

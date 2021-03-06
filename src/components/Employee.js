import React from "react";

const Employee = ({ employees }) => {
  return (
    <>
      {employees.map((employee, index) => (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </a>
            <a
              href="#deleteEmployeeModal"
              className="delete"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Employee;

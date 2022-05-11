import { React, useContext } from "react";
import { EmployeeContext } from "../constexts/EmployeeContext";
import Employee from "./Employee";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

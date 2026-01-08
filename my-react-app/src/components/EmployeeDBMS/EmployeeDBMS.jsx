import { useEffect, useState } from "react";
import styles from "./EmployeeDBMS.module.css";
import { EmployeeData } from "../../constants/componentConstants";

export default function EmployeeDBMS() {
  const [employeeData, setemployeeData] = useState([]);
  const [selectedId, setselectedId] = useState(-1);
  const [showEmployeeForm, setshowEmployeeForm] = useState(false);

  useEffect(() => {
    setemployeeData(EmployeeData);
    EmployeeData.length > 0 && setselectedId(EmployeeData[0].id);
  }, []);

  function deleteEmployeeData(employeeId) {
    setemployeeData((prev) => {
      const updatedData = prev.filter((employee) => {
        return employee.id !== employeeId;
      });
      if (selectedId === employeeId) {
        updatedData.length > 0 && setselectedId(updatedData[0].id);
        updatedData.length === 0 && setselectedId(-1);
      }
      return updatedData;
    });
  }

  return (
    <>
      <h1>EmployeeDBMS</h1>
      <button onClick={() => setshowEmployeeForm((prev) => !prev)}>
        Add Employee
      </button>
      {/* <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
          opacity: "0.2",
          zIndex: "0",
          top: "0",
          left: "0",
        }}
      /> */}
      {showEmployeeForm && (
        <EmployeeForm
          setShowForm={setshowEmployeeForm}
          setData={setemployeeData}
        />
      )}
      <div className={styles.parentContainer}>
        <div className={styles.listContainer}>
          <p>Employee List</p>
          {employeeData.map((employee) => {
            return (
              <div className={styles.employeeItem} key={employee.id}>
                <p className={styles.employeeName}>{employee.name}</p>
                <button
                  style={{ padding: "0", height: "12px" }}
                  onClick={() => deleteEmployeeData(employee.id)}
                >
                  <p style={{ fontSize: "8px", margin: "0", padding: "0" }}>
                    Delete
                  </p>
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.profileContainer}>
          <p>Profile</p>
          {selectedId !== -1 && (
            <EmployeeDetails
              employeeData={employeeData.filter((employee) => {
                return employee.id === selectedId;
              })}
            />
          )}
        </div>
      </div>
    </>
  );
}

function EmployeeDetails({ employeeData }) {
  const { name } = employeeData[0];
  return (
    <>
      <p>{name}</p>
    </>
  );
}

function EmployeeForm({ setShowForm, setData }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData((prev) => {
      return [
        ...prev,
        {
          name: name,
          date: date,
          id: Date.now(),
        },
      ];
    });
    console.log({ name, date });
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
          opacity: "0.2",
          zIndex: "0",
          top: "0",
          left: "0",
        }}
      />
      <form className={styles.employeeForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

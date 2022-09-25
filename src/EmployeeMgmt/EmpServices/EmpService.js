import axios from "axios";

// const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employee";
const EMPLOYEE_BASE_URL = "http://employeemgmtv2-env.eba-hktekstp.ap-south-1.elasticbeanstalk.com/api/v1/employee"

// const EmpService = () => {
export const getAllEmployee = async (props) => {
  axios
    .get(EMPLOYEE_BASE_URL)
    .then((result) => {
      console.log(result);
      props.setTableData(result.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const createEmployee = async (employee) => {
  axios
    .post(EMPLOYEE_BASE_URL, employee)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const getEmployeeById = async (props, employeeId) => {
  axios
    .get(EMPLOYEE_BASE_URL + "/" + employeeId)
    .then((result) => {
      console.log(result);
      props.setTableData(() => {
        const ans = []
        ans.push(result.data);
        return ans;
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const updateEmployee = async (employee, employeeId) => {
  axios
    .put(EMPLOYEE_BASE_URL + "/" + employeeId, employee)
    .then((result) => console.log("Updated employee data : ", result))
    .catch((err) => {
      console.log(err.message);
    });
};
export const deleteEmployee = async (employeeIds) => {
  return axios
    .delete(EMPLOYEE_BASE_URL + "/" + employeeIds)
    .then((result) => result)
    .catch((err) => {
      console.log(err.message);
    });
};

export const advSearch = async (props, advform) => {
  console.log(EMPLOYEE_BASE_URL + "/advSearch/" + advform.firstname + "&" + advform.lastname);
  axios.get(EMPLOYEE_BASE_URL + "/advSearch/" + advform.firstname + "&" + advform.lastname)
  .then((result) => {
      console.log(result);
      props.setTableData(result.data);
  }).catch((err) => {
    console.log(err.message);
  });
}
// };

// export default EmpService;

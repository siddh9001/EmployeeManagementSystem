import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { getAllEmployee, getEmployeeById } from '../EmpServices/EmpService';

const SearchBar = (props) => {

  const [searchParam, setsearchParam] = useState(0);

  const OnChangeSearchField = (e) => {
    if(e.target.value === ""){
      getAllEmployee(props);
    }
    else{
      getEmployeeById(props, e.target.value);
    }
  }
  return (
    <TextField
          label="Enter ID"
          type="search"
          variant="filled"
          onChange={OnChangeSearchField}
    />
  )
}

export default SearchBar

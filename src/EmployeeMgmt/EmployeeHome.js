import React, { useState } from "react";
import Header from "./BodyComponents/Header";
import Buttons from "./BodyComponents/Buttons";
import { DataTable } from "./BodyComponents/DataTable";
import Footer from "./BodyComponents/Footer";
import "./css/Emp.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#1ee6aa',
      light: "rgb(75, 235, 187)",
      dark: "rgb(21, 161, 118)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: '#E45C1B',
      light: 'rgb(233, 124, 72)',
      dark: 'rgb(159, 64, 18)'
    },
    background: {
      default: '#19001a',
    },
    text: {
      primary: '#f1f3eb',
      secondary: "rgba(255, 255, 255, 0.7)"
    },
  },
});




const EmployeeHome = () => {
  const [refresh, setRefresh] = useState(false);

  const [checkedArray, setCheckedArray] = useState([]);

  const [deleteCheckedArray, setDeleteCheckedArray] = useState(false);

  const [tableData, setTableData] = useState([]);

  return (
    <ThemeProvider theme={theme}>
    <Paper className="emp-container">
      <Header />
      <Buttons
        refresh={refresh}
        setRefresh={setRefresh}
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
        deleteCheckedArray={deleteCheckedArray}
        setDeleteCheckedArray={setDeleteCheckedArray}
        tableData={tableData}
        setTableData={setTableData}
      />
      <DataTable
        refresh={refresh}
        setRefresh={setRefresh}
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
        deleteCheckedArray={deleteCheckedArray}
        setDeleteCheckedArray={setDeleteCheckedArray}
        tableData={tableData}
        setTableData={setTableData}
      />
      <Footer />
    </Paper>
    </ThemeProvider>
  );
};

export default EmployeeHome;

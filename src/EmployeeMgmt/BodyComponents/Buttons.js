import React from "react";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import AdvSearchBtn from "../EmpButtons/AdvSearchBtn";
import RefreshBtn from "../EmpButtons/RefreshBtn";
import SearchBar from "../EmpButtons/SearchBar";
import AddBtn from "../EmpButtons/AddBtn";
import EditBtn from "../EmpButtons/EditBtn";
import DeleteBtn from "../EmpButtons/DeleteBtn";
import { Grid, Box } from "@mui/material";
import "../css/Emp.css";

const Buttons = (props) => {
  return (
    <div className="buttons">
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container spacing={1} rowSpacing={2}>
        <Grid item xs={12} md={4}>
          <ButtonGroup aria-label="outlined primary button group">
            <AdvSearchBtn
              refresh={props.refresh}
              setRefresh={props.setRefresh}
              tableData={props.tableData}
              setTableData={props.setTableData}
            />
            <RefreshBtn refresh={props.refresh} setRefresh={props.setRefresh} />
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center" alignItems="center" sx={{paddingTop: "8px"}}>
          <SearchBar
            tableData={props.tableData}
            setTableData={props.setTableData}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <AddBtn
                refresh={props.refresh}
                setRefresh={props.setRefresh}
                tableData={props.tableData}
                setTableData={props.setTableData}
                deleteCheckedArray={props.deleteCheckedArray}
                setDeleteCheckedArray={props.setDeleteCheckedArray}
              />
              <EditBtn
                refresh={props.refresh}
                setRefresh={props.setRefresh}
                checkedArray={props.checkedArray}
                setCheckedArray={props.setCheckedArray}
                tableData={props.tableData}
                setTableData={props.setTableData}
                deleteCheckedArray={props.deleteCheckedArray}
                setDeleteCheckedArray={props.setDeleteCheckedArray}
              />
              <DeleteBtn
                refresh={props.refresh}
                setRefresh={props.setRefresh}
                checkedArray={props.checkedArray}
                setCheckedArray={props.setCheckedArray}
                tableData={props.tableData}
                setTableData={props.setTableData}
                deleteCheckedArray={props.deleteCheckedArray}
                setDeleteCheckedArray={props.setDeleteCheckedArray}
              />
          </Stack>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default Buttons;

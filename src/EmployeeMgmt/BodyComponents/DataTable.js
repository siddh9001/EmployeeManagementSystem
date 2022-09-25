import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import axios from "axios";
import { getAllEmployee } from "../EmpServices/EmpService";
import { Login } from "@mui/icons-material";

const columns = [
  { field: "sl_no", headerName: "sl no", width: 70 },
  { field: "firstname", headerName: "FirstName", width: 130 },
  { field: "lastname", headerName: "LastName", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
];

export const DataTable = (props) => {
  const [pageSize, setPageSize] = useState(5); // for changing the page size

  useEffect(() => {
    getAllEmployee(props);
  }, []);

  useEffect(() => {
    getAllEmployee(props);
  }, [props.refresh]);

  const rowData = Object.values(props.tableData)?.map((row) => {
    return {
      sl_no: row?.id,
      firstname: row?.firstname,
      lastname: row?.lastname,
      email: row?.email,
    };
  });
  return (
    <div style={{ height: 490, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight={true}
            rows={rowData}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            checkboxSelection
            getRowId={(row) => row.sl_no}
            onSelectionModelChange={(ids) => {
              props.setDeleteCheckedArray(ids);

              const selectedIDs = new Set(ids);
              const selectedRowData = rowData.filter((row) =>
                selectedIDs.has(row.sl_no)
              );
              console.log("selected row data : ", selectedRowData);
              props.setCheckedArray(selectedRowData);
            }}
            sx={{
              color: "text.secondary",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// export default DataTable

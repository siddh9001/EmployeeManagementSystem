import React from 'react';
import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteEmployee } from '../EmpServices/EmpService';

const DeleteBtn = (props) => {

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteform, setDeleteform] = useState([]);

  const deleteHandleClickOpen = () => {
    setDeleteOpen(true);
  };
  const deleteHandleClose = () => {
    setDeleteOpen(false);
  };

  const onDeleteSubmit = () => {
    deleteEmployee(deleteform.toString());
    setDeleteform([]);
    deleteHandleClose();
    // getAllEmployee(props);
    props.setCheckedArray([]);
    setTimeout(()=>{
      props.setRefresh(!props.refresh);
    }, 3000);
  }

  useEffect(() => {
    if(props.deleteCheckedArray.length >= 1){
      setDeleteform(props.deleteCheckedArray);
    }
    else if(props.checkedArray.length < 1){
      setDeleteform([]);
    }
  }, [props.deleteCheckedArray.length]);

  console.log("delete checked array : ", deleteform);

  return (
    <>
      <Button
            variant="outlined"
            size="large"
            onClick={deleteHandleClickOpen}
            sx={{padding: "7px 45px"}}
          >
            Delete
          </Button>
          <Dialog
            open={deleteOpen}
            onClose={deleteHandleClose}
            fullWidth={true}
            maxWidth={"sm"}
          >
            <DialogTitle >
              {" "}
              Delete Records ?{" "}
            </DialogTitle>
            <DialogContent
             
            >
              Are you Sure you want to delete these record[s]?
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                size="large"
                onClick={deleteHandleClose}
                style={{ width: "50%" }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={onDeleteSubmit}
                style={{ width: "50%" }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
    </>
  )
}

export default DeleteBtn

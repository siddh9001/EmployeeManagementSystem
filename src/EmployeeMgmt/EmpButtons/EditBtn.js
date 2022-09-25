import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import {  updateEmployee } from "../EmpServices/EmpService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(45,66,80, 0.1)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditBtn = (props) => {

  const [editOpen, setEditOpen] = useState(false);

  const editHandleClickOpen = () => {
    setEditOpen(true);
  };
  const editHandleClose = () => {
    setEditOpen(false);
  };

  const [isEnabled, setIsEnabled] = useState(true);
  const [editForm, setEditForm] = useState({
    sl_no: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const onChangeEditForm = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };
  const onEditFormSubmit = () => {
    updateEmployee(editForm, editForm.sl_no);
    setEditForm({
      sl_no: "",
      firstname: "",
      lastname: "",
      email: "",
    });
    editHandleClose();
    // getAllEmployee(props);
    props.setCheckedArray([]);
    setTimeout(() => {
      props.setRefresh(!props.refresh);
    }, 3000);
  };

  useEffect(() => {
    if (props.checkedArray.length === 1) {
      setIsEnabled(false);
      //console.log(props.checkedArray[0]);
      setEditForm(props.checkedArray[0]);
      // console.log(editForm);
      // setDeleteForm({ ...deleteForm, id: props.checkedArray[0].id });
    } else if (props.checkedArray.length > 1) {
      setIsEnabled(true);
      setEditForm({
        sl_no: "",
        firstname: "",
        lastname: "",
        email: "",
      });
      // setDeleteForm({ ...deleteForm, id: props.checkedArray });
    } else if (props.checkedArray.length < 1) {
      setIsEnabled(true);
      setEditForm({
        sl_no: "",
        firstname: "",
        lastname: "",
        email: "",
      });
      // setDeleteForm({ id: [] });
    }
  }, [props.checkedArray.length]);

  console.log("Edit Form = ", editForm);

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={editHandleClickOpen}
        disabled={isEnabled}
        sx={{ padding: "7px 48px" }}
      >
        Edit
      </Button>
      <Dialog
        open={editOpen}
        onClose={editHandleClose}
        // fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <FormControl fullWidth={true}>
            <Stack direction={{xs: "col", md: "row"}} spacing={{xs: 2, md: 1}}>
              <Item>
                <TextField
                  variant="standard"
                  name="firstname"
                  label="First Name"
                  defaultValue={editForm.firstname}
                  onChange={onChangeEditForm}
                  fullWidth={true}
                />
              </Item>
              <Item>
                <TextField
                  variant="standard"
                  name="lastname"
                  label="Last Name"
                  defaultValue={editForm.lastname}
                  onChange={onChangeEditForm}
                  fullWidth={true}
                />
              </Item>
              <Item>
                <TextField
                  variant="standard"
                  name="email"
                  label="Email ID"
                  defaultValue={editForm.email}
                  onChange={onChangeEditForm}
                  fullWidth={true}
                />
              </Item>
            </Stack>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="large"
            onClick={onEditFormSubmit}
            style={{ width: "50%" }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={editHandleClose}
            style={{ width: "50%" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditBtn;

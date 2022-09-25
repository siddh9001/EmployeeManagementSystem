import React from 'react';
import { useState } from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { createEmployee } from '../EmpServices/EmpService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(45,66,80, 0.1)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "auto",
}));

const AddBtn = (props) => {


  const [addOpen, setAddOpen] = useState(false);

  const AddHandleClickOpen = () => {
    setAddOpen(true);
  };

  const AddHandleClose = () => {
    setAddOpen(false);
  };

  const [empDetails, setEmpDetails] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const onChangeEmpDetails = (event) => {
    const {name, value} = event.target;
    setEmpDetails({...empDetails, [name]: value});
  }

  const onEmpDetailsSubmit =  () => {
      createEmployee(empDetails);
      AddHandleClose();
      setTimeout(()=>{
        props.setRefresh(!props.refresh);
      }, 3000);
  }

  return (
    <>
      <Button
            variant="outlined"
            size="large"
            onClick={AddHandleClickOpen}
            sx={{padding: "7px 48px"}}
          >
            {" "}
            Add
          </Button>
          <Dialog
            open={addOpen}
            onClose={AddHandleClose}
            maxWidth={"sm"}
          >
            <DialogTitle sx={{color: "primary.main"}}>
              Add
            </DialogTitle>
            <DialogContent>
              <FormControl fullWidth={true}>
                <Box sx={{ width: "100%" }}>
                  <Stack spacing={{xs: 0.2, md: 2}}>
                    <Stack direction={{xs: "col", md: "row"}} spacing={2}>
                      <Item>
                        <TextField
                          variant="standard"
                          name="id"
                          label="ID"
                          fullWidth={true}
                          onChange={onChangeEmpDetails}
                        />
                      </Item>
                      <Item>
                        <TextField
                          variant="standard"
                          name="firstname"
                          label="First Name"
                          onChange={onChangeEmpDetails}
                          fullWidth={true}
                        />
                      </Item>
                    </Stack>
                    <Stack direction={{xs: "col", md: "row"}} spacing={2}>
                      <Item>
                        <TextField
                          variant="standard"
                          name="lastname"
                          label="Last Name"
                          onChange={onChangeEmpDetails}
                          fullWidth={true}
                        />
                      </Item>
                      <Item>
                      <TextField
                          variant="standard"
                          name="email"
                          label="Email ID"
                          onChange={onChangeEmpDetails}
                          fullWidth={true}
                        />
                      </Item>
                    </Stack>
                  </Stack>
                </Box>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                onClick={onEmpDetailsSubmit}
                style={{ width: "50%" }}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={AddHandleClose}
                style={{ width: "50%" }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
    </>
  )
}

export default AddBtn

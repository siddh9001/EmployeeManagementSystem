import React from "react";
import { useState } from "react";
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
import { advSearch } from "../EmpServices/EmpService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(45,66,80, 0.1)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdvSearchBtn = (props) => {

  const [advSearchOpen, setAdvSearchOpen] = useState(false);

  const advSearchHandleOpen = () => {
    setAdvSearchOpen(true);
  };
  const advSearchHandleClose = () => {
    setAdvSearchOpen(false);
  };

  const [AdvSearchForm, setAdvSearchForm] = useState({
    firstname: "",
    lastname: "",
  });

  const onChangeAdvSearchForm = (e) => {
    const { name, value } = e.target;
    setAdvSearchForm({ ...AdvSearchForm, [name]: value });
  };

  const onAdvSearchFromSubmit = (e) => {
    advSearch(props, AdvSearchForm);
    advSearchHandleClose();
  };

  console.log("Adv Search form : ", AdvSearchForm);

  return (
    <>
      <Button
        size="large"
        onClick={advSearchHandleOpen}
        sx={{
          padding: "7px 45px",
          "&:hover": {
            color: "rgba(0, 0, 0, 0.87)",
            backgroundColor: "#1ee6aa",
          },
        }}
      >
        Advanced Search
      </Button>
      <Dialog
        open={advSearchOpen}
        onClose={advSearchHandleClose}
        maxWidth={"sm"}
      >
        <DialogTitle>Advanced Search</DialogTitle>
        <DialogContent>
          <FormControl fullWidth={true}>
            <Stack spacing={2}>
              <Stack direction={{xs: "col", md: "row"}} spacing={{xs: 2, md: 1}}>
                <Item>
                  <TextField
                    variant="standard"
                    name="firstname"
                    label="FirstName"
                    onChange={onChangeAdvSearchForm}
                    fullWidth={true}
                  />
                </Item>
                <Item>
                  <TextField
                    variant="standard"
                    name="lastname"
                    label="LastName"
                    onChange={onChangeAdvSearchForm}
                    fullWidth={true}
                  />
                </Item>
              </Stack>
            </Stack>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="large"
            onClick={onAdvSearchFromSubmit}
            style={{ width: "50%" }}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={advSearchHandleClose}
            style={{ width: "50%" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdvSearchBtn;

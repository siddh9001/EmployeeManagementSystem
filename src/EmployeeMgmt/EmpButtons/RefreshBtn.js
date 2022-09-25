import React from "react";
import Button from "@mui/material/Button";
import { Refresh } from "@mui/icons-material";

const RefreshBtn = (props) => {
  const onRefresh = () => {
    props.setRefresh(!props.refresh);
    console.log("Refresh = ", props.refresh);
  };

  return (
    <Button
      variant="outlined"
      startIcon={
        <Refresh
          sx={{
            ".css-1d6wzja-MuiButton-startIcon": {
              marginRight: "none",
              marginLeft: "none",
            },
          }}
        />
      }
      onClick={onRefresh}
      sx={{
        padding: "7px 30px",
        "&:hover": { color: "rgba(0, 0, 0, 0.87)", backgroundColor: "#1ee6aa" },
      }}
    />
  );
};

export default RefreshBtn;

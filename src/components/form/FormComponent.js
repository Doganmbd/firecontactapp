import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const FormComponent = ({info,setInfo,handleFormSubmit}) => {
  
  const handleChange = (e)=> {
    e.preventDefault();
    /* const name = e.target.name
       const value = e.target.value
    */
    const {name,value} = e.target ;
    console.log(name,value);
    setInfo({...info,[name]:value})
  }

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/Doganmbd"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<M.B.D/> "}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>
    
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleFormSubmit} >
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              onChange={handleChange}
              value={info.username}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              onChange={handleChange}
              value={info.phoneNumber}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                onChange={handleChange}
                value={info.gender}
                variant="outlined"
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
              ADD
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;
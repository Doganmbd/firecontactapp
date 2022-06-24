import React from "react";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    Paper
} from "@mui/material";
import { DeleteUser, useFetch } from "../../utils/functions";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




const Contacts = () => {
  const {isLoading,contactList} = useFetch();


  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
            {isLoading ? (

              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
                <TableCell colSpan={5} align="center">Loading</TableCell>             
              </TableRow>
            ) : 

            /* bilgi yoksa veri bulunamadı mesajı verecek. */
            contactList?.length=== 0 ?
            (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
            <TableCell colSpan={5} align="center">Ekrana yazacak veri bulunamadı</TableCell>             
          </TableRow>

            ) :
            (
              /* bilgiler olduğu zaman aşağıdaki kodlar çalışacak */
              contactList?.map ((item,index)=> (
                <TableRow key = {index}>            
                <TableCell textAlign="center">{item.username.toUpperCase()}</TableCell>             
                <TableCell textAlign="center">{item.phoneNumber}</TableCell>             
                <TableCell textAlign="center">{item.gender}</TableCell>             
                <TableCell textAlign="center" onClick= {()=>DeleteUser(item.id)} ><DeleteIcon/></TableCell>             
                <TableCell textAlign="center"><EditIcon/></TableCell>             
              </TableRow>
              )

              )
            )}


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Contacts;
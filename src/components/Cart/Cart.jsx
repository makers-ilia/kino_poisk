import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { useCart } from '../../contexts/CartContextProvider';

export default function Cart() {
    const { getCart, cart, changeMovieCount, deleteMovieInCart } = useCart();

    React.useEffect(() => {     
        getCart();
    }, []);

    function cartCleaner(){
        localStorage.removeItem('cart');
        getCart();
    };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
            >
              <TableCell>
                  <img src={row.item.picture} alt="" width="50" />
              </TableCell>
              <TableCell align="right">
                  {row.item.name}
              </TableCell>
              <TableCell align="right">
                  {row.item.genre}
              </TableCell>
              <TableCell align="right">
                  {row.item.Image}
              </TableCell>
              <TableCell align="right">
                  {row.description}
              </TableCell>
              <TableCell align="right">
                  <Button color="error" variant="contained" onClick={() => deleteProductInCart(row.item.id)}>Delete From Cart</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
          Total price: {cart?.totalPrice}
          <Button onClick={cartCleaner}>BUY NOW</Button>
      </Typography>
    </TableContainer>
  );
}
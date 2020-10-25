import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography
} from '@material-ui/core';
import {CartDetailsApplication} from '../externalApplication';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '1rem',
    },
    list: {
      width: '100%'
    },
    checkout: {
      marginTop: '2rem',
    },
  }),
);

function CartPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid item md={8}>
          <Typography variant={'h4'} component={'h1'}>Shopping Cart</Typography>
          <CartDetailsApplication />
        </Grid>
        <Grid item md={4}>
          <Button className={classes.checkout} size={'large'} fullWidth={true} variant={'outlined'} color="primary">
            Buy now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export { CartPage };

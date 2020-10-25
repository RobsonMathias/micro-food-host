import React from 'react';
import {
  createStyles,
  makeStyles,
  Container,
  Typography,
} from '@material-ui/core';

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

function CheckoutPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant={'h4'} component={'h1'}>Payment options</Typography>

    </Container>
  );
}

export { CheckoutPage };

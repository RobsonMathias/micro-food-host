import React from 'react';
import {
  createStyles,
  makeStyles,
  Container,
  Typography
} from '@material-ui/core';
import {CatalogApplication} from '../externalApplication';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '1rem',
    },
  }),
);

function CatalogPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant={'h4'} component={'h1'}>Catalog</Typography>
      <CatalogApplication />
    </Container>
  );
}

export { CatalogPage };

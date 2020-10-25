import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import {CartResumeApplication} from '../externalApplication';

const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
  }),
);

function NavApp() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Micro Food
            </Typography>
            <div className={classes.grow} />
            <CartResumeApplication/>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export { NavApp }

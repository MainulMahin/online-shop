import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">               
        <Toolbar>
          <Typography variant='h6' className={classes.root}>
            Online Shopping
          </Typography>
          <IconButton >
            <AccessibilityNewIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

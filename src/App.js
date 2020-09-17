import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ButtonAppBar from './Header';
import Content from './contentCard';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color : 'black'
  },
});

function App() {

  const classes = useStyles();

  return (
    <div>
      <ButtonAppBar />
      <Content />
      {/* <Button color='secondary' className={classes.root}>Click Here!</Button> */} 
      {/* <Button disabled="true">Discover!</Button> */}
    </div>
  );
}

export default App;

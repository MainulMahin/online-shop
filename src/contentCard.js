import React from 'react';
import SimpleCard from './caffeCard';
import { Grid } from '@material-ui/core';
import product from './constant.js'


export default function Content(props) {

    const [expresso, coldcaffe] = product;

return (
    <div>
    <Grid container direction='column'>
    <Grid item container spacing={2}>
    <Grid item xs={0} sm={0} md={2}/>

    <Grid item xs={12} sm={6} md={3} spacing={2}>
        <SimpleCard 
            title={props.title}
        />
    </Grid>  

    <Grid item xs={0} sm={0} md={2}> </Grid>
    </Grid>
    </Grid>
 
    </div>
);
}
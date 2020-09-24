import React from 'react'

import useStyles from "./styles";

const CovidWrapper = () => {
    const classes: any = useStyles();
    return (
        <>
           <div className={classes.wrapper}>
                COVID
            </div> 
        
        </>
    )
}

export default CovidWrapper;
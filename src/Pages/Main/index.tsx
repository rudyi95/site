import React from "react";
import Welcome from "../../Components/Welcome";
import Popular from '../../Components/Popular';

import useStyles from "./style";

const MainPage: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <Welcome />
      <Popular />
    </div>
  );
};

export default MainPage;

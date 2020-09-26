import React from "react";
import Welcome from "../../Components/Welcome";
import Main from '../../Components/Main';

import useStyles from "./style";

const NewsPage: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <Welcome />
      <Main />
    </div>
  );
};

export default NewsPage;

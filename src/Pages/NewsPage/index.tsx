import React from "react";
import Welcome from "../../Components/Welcome";
import News from '../../Components/News';

import useStyles from "./style";

const NewsPage: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <Welcome />
      <News />
    </div>
  );
};

export default NewsPage;

import React from "react";
import PictureBlock from "../../Components/PictureBlock";
import Main from "../../Components/Main";

import useStyles from "./style";

const NewsPage: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <PictureBlock text={"ЖОВКВА - інноваційна громада"} />
      <Main />
    </div>
  );
};

export default NewsPage;

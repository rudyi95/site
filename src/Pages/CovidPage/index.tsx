import React from "react";

import CovidWrapper from "../../Components/Covid";
import useStyles from "./style";

const CovidPage: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.wrapper}>
      <CovidWrapper />
    </div>
  );
};

export default CovidPage;

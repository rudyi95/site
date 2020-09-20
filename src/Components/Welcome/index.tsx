import React from "react";
import welcome from "../../Img/Welcome.jpg";
import useStyles from "./style";

const WelcomeImg: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <img src={welcome} alt="" />
      <span>ЖОВКВА - інноваційна громада</span>
    </div>
  );
};

export default WelcomeImg;

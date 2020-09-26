import React from "react";
import welcome from "../../Img/Welcome.jpg";
import useStyles from "./style";

declare interface PictureBlockProps {
  text: String;
}

const PictureBlock: React.FC<PictureBlockProps> = ({ text }) => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <img src={welcome} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default PictureBlock;

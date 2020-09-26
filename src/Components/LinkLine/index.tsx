import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./style";

declare interface LinkLineProps {
  links: Array<String>;
}

const LinkLine: React.FC<LinkLineProps> = ({ links }) => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/">Home</Link>
      <span> {">"} </span> <span>{links}</span>
    </div>
  );
};

export default LinkLine;

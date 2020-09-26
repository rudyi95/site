import React from "react";
import LinkLine from "../LinkLine";

import useStyles from "./styles";

const CovidWrapper = () => {
  const classes: any = useStyles();
  const buttons = [
    "Covid Dashboard",
    "Reopening Zhovkva",
    "Mask Up",
    "For Individuals",
    "Resourses for Businesses",
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperInfo}>
        <div className={classes.wrapperLeft}>
          <div className={classes.headerWrapperInfo}>
            <LinkLine links={["Responding to COVID-19"]} />
          </div>
          <h2 className={classes.title}>
            Responding to COVID-19 in Pennsylvania
          </h2>
          <p className={classes.dateText}>
            Last updated 4:00 p.m., September 23, 2020
          </p>
          <p className={classes.description}>
            {`COVID-19 is a new virus that causes respiratory illness in people and can spread from person-to-person.
                            
                            All Pennsylvanians have an important role to play in stopping the spread of COVID-19 and saving lives. Here are resources to help individuals, families, and businesses do their part.

                            Information change. You can find up-to-date information about cases in Pennsylvania at on.pa.gov/coronavirus.`}
          </p>
        </div>
        <div className={classes.wrapperRight}>
          <div className={classes.guide}>In this guide</div>
          {buttons.map((b) => (
            <button className={classes.buttonsGuide}>{b}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CovidWrapper;

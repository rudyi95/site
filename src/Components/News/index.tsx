import React from "react";

import NewsCard from "../InfoCards/NewsCard";
import LinkLine from "../LinkLine";

import Photo from "../../Img/newsImage.jpg";

import useStyles from "./style";

const News: React.FC = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapperInfo}>
        <LinkLine links={['Новини']} />
      </div>
      <div className={classes.image}>
        <NewsCard
          icon={Photo}
          header={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
          text={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
        />
        <NewsCard
          header={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
          text={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
        />
        <NewsCard
          icon={Photo}
          header={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
          text={"Ivanov Ivan"}
        />
      </div>
    </div>
  );
};

export default News;

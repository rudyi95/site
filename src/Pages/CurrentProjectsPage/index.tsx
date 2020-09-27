import React from "react";
import { useTranslation } from "react-i18next";

import PictureBlock from "../../Components/PictureBlock";
import LinkLine from "../../Components/LinkLine";
import ContentInfo from "../../Components/ContentInfo";

import Photo from "../../Img/newsImage.jpg";

import useStyles from "./style";

const CurrentsProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <PictureBlock text={t("Поточні проєкти")} />
      <div className={classes.headerWrapperInfo}>
        <LinkLine links={["Поточні проєкти"]} />
      </div>
      <ContentInfo
        photo={Photo}
        headerText={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
        contentText={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
      />
      <ContentInfo
        photo={Photo}
        headerText={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
        contentText={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
      />
      <ContentInfo
        photo={Photo}
        headerText={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
        contentText={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
      />
      <ContentInfo
        photo={Photo}
        headerText={"Gov. Wolf Issues Statement on Trump Rallies in PA"}
        contentText={`
          Governor Tom Wolf urged President Donald Trump to help solve 
          problems for Pennsylvanians instead of exacerbating public health risks 
          in the commonwealth. He called on the president to abide by COVID-19 mitigation 
          guidance when visiting the commonwealth and forgo holding unsafe rallies in Pennsylvania.
          `}
      />
    </div>
  );
};

export default CurrentsProjectsPage;

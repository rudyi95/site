import React from "react";

import NewsCard from "../InfoCards/NewsCard";

import useStyles from "./style";

declare interface ContentInfoProps {
  photo?: string;
  headerText: string;
  contentText: string;
}

const ContentInfo: React.FC<ContentInfoProps> = ({
  photo,
  headerText,
  contentText,
}) => {
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <NewsCard icon={photo} header={headerText} text={contentText} />
      </div>
    </div>
  );
};

export default ContentInfo;

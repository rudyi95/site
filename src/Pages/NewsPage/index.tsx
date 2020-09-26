import React from "react";
import { useTranslation } from 'react-i18next';

import PictureBlock from "../../Components/PictureBlock";
import News from '../../Components/News';

import useStyles from "./style";

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <PictureBlock text={t('Новини')} />
      <News />
    </div>
  );
};

export default NewsPage;

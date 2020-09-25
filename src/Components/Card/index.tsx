import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import useStyles from "./style";

declare interface ImgMediaCardProps {
  icon: string;
  text: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({ icon, text }) => {
  const classes: any = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="text"
          height="140"
          image={icon}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;

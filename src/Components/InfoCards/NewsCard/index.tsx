import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import useStyles from "./style";

declare interface ImgMediaCardProps {
  icon?: string;
  text: string;
  header: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({ icon, text, header }) => {
  const classes: any = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" image={icon} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {header}
          </Typography>
          <Typography variant="body2" component="p">
            <p>Friday, September 25, 2020</p> <p>Office of the Governor</p>
          </Typography>
          <Typography variant="body1" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;

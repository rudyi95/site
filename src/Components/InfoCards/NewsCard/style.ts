import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    width: "100%",
    margin: "0px 0 12px 0",

    "& .MuiCardActionArea-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "initial",
      textAlign: "center",
    },
    "& .MuiCardMedia-img": {
      objectFit: "fill",
    },
    "& .MuiTypography-gutterBottom": {
      margin: 0,
    },
    "& .MuiTypography-body1": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    '& .MuiTypography-body2': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    "& .MuiCardContent-root": {
      background: "#ebebeb",
      transition: "0.5s",
      padding: '1.5625em 1.5625em 1.25em',
      textAlign: 'justify',

      "&:hover": {
        transition: "0.5s",
        color: "white",
        background: "#3f51b5",
      },
    },
  },
}));
export default useStyles;

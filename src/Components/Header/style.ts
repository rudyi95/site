import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    "& .MuiToolbar-regular": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .MuiPaper-root": {
      background: "#3f51b5",
      boxShadow: "none",
    },
    '& .PrivateTabIndicator-colorPrimary-12': {
        background: 'white',
    },
    '& .MuiTab-wrapper': {
        color: 'white',
    },
    '& .makeStyles-search-5': {
        height: 'auto !important',
    },
    '& a': {
        textDecoration: 'none',
        padding: '0 0 0 74px',
        color: 'white',
    },
    '& MuiTouchRipple-root': {
      background: 'none',

      '& span': {

        '&:focus': {
          background: 'none',
        },
      },
    },
  },
  headerLinks: {
    fontSize: '23px',
    marginRight: '85px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  left: {
    display: "flex",
    alignItems: "center",
    height: '63px !important',
  },
  right: {
    display: "flex",
    alignItems: "center",
    height: '63px !important',
  },
}));

export default useStyles;

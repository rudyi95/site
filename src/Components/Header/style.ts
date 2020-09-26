import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme): any => ({
  root: {
    position: "fixed",
    width: "100%",
    zIndex: "1000",

    "& .MuiToolbar-regular": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .MuiPaper-root": {
      background: "#3f51b5",
      boxShadow: "none",
      position: 'fixed',
    },
    "& .PrivateTabIndicator-colorPrimary-12": {
      background: "white",
    },
    "& .MuiTab-wrapper": {
      color: "white",
    },
    "& .makeStyles-search-5": {
      height: "auto !important",
    },
    "& .MuiTouchRipple-root": {
      background: "none",

      "& span": {
        "&:focus": {
          background: "none",
        },
      },
    },
    "& .MuiList-padding": {
      paddingTop: 0,
    },
    "& .MuiListItem-button": {
      "&:hover": {
        background: "#3f51b5",
        color: "white",
        "& a": {
          textDecoration: "none",
          color: "white",
        },
      },
      "& a": {
        textDecoration: "none",
        color: "black",
      },
    },
  },
  headerLinks: {
    fontSize: "23px",

    "& a": {
      textDecoration: "none",
      padding: "0 0 0 30px",
      color: "white",
    },
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
    height: "63px !important",
  },
  right: {
    display: "flex",
    alignItems: "center",
    height: "63px !important",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "white !important",
    scrollbarWidth: "none",
    position: "absolute",
    top: "64px",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default useStyles;

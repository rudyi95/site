import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useStyles from "./style";

const Header: React.FC = () => {
  const classes: any = useStyles();
  const [value, setValue] = useState<number>(2);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.left}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </div>
          <div className={classes.right}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Link to="/covid">
                  <Tab label="Covid-19" />
                </Link>

                <Link to="/">
                  <Tab label="Main" />
                </Link>

                <Link to="/foo">
                  <Tab label="Feedback" />
                </Link>

                <Link to="/bar2">
                  <Tab label="Translate" />
                </Link>
              </Tabs>
            </Paper>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

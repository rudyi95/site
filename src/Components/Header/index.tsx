import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { ReactComponent as Ukraine } from "../../Img/Flags/ukraine.svg";
import { ReactComponent as Poland } from "../../Img/Flags/poland.svg";
import { ReactComponent as UnitedKingdom } from "../../Img/Flags/united-kingdom.svg";

import useStyles from "./style";

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.left} onClick={toggleDrawer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Меню
            </Typography>
          </div>
          <div className={classes.right}>
            <div className={classes.headerLinks}>
              <Link to="/">
                <span>Головна</span>
              </Link>
              <Link to="/news">
                <span>Новини</span>
              </Link>
              <Link to="/covid">
                <span>Covid-19</span>
              </Link>
              <Link to="/registration">
                <span>Реєстрація</span>
              </Link>
              <a
                onClick={handleClick}
                href={`${window.location.href}`}
                rel="noopener noreferrer"
              >
                Переклад
              </a>
              {isCollapsed && (
                <ClickAwayListener
                  onClickAway={() => setIsCollapsed(!isCollapsed)}
                >
                  <div className={classes.changeLanguage}>
                    <div className={classes.languageList}>
                      <span onClick={() => setIsCollapsed(!isCollapsed)}>
                        Українська <Ukraine />
                      </span>
                      <span onClick={() => setIsCollapsed(!isCollapsed)}>
                        English <UnitedKingdom />
                      </span>
                      <span onClick={() => setIsCollapsed(!isCollapsed)}>
                        Polskie <Poland />
                      </span>
                    </div>
                  </div>
                </ClickAwayListener>
              )}
            </div>
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
      {isOpenMenu && (
        <ClickAwayListener onClickAway={() => setIsOpenMenu(!isOpenMenu)}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isOpenMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Divider />
            <List>
              {[
                ["Проблеми", "problems"],
                ["Поточні проекти", "curent_projects"],
                ["Інфраструктура", "infrastructure"],
                ["Проєкти для інвесторів", "projects_for_investors"],
                ["Енергоефективність", "energy_efficiency"],
                ["Робота", "work"],
                ["Освіта", "education"],
                ["Медицина", "medicine"],
                ["Бізнес", "business"],
              ].map((text, index) => (
                <ListItem button>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Link to={`/${text[1]}`}>
                    <ListItemText>{text[0]}</ListItemText>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                "Електронні сервіси",
                "Документообіг",
                "Тендери",
                "Голосування",
              ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Header;

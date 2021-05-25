import React from 'react';
import SideDrawer from './SideDrawer';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Divider,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// ========= STYLING AREA ========== //
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    growing: {
      flexGrow: 1,
      // position: 'fixed'
    },
    appBar: {
      margin: theme.spacing(20, 0, 20, 0),
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      display: 'none',
      fontWeight: 'bold',
      color: 'gray',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      cursor: 'pointer',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      right: 0,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'lightGray',
      borderRadius: 50,
      '&:hover': {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'lightBlue',
      },
      '&:focus': {
        outline: 'none',
        border: '5px solid blue',
        backgroundColor: 'red'
      }
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    menuIcon: {
      backgroundColor: 'navy',
      color: 'white',
      padding: 6,
      borderRadius: 50,
    },
    buttonPrimaryCustom: {
      backgroundColor: 'navy',
      textTransform: 'capitalize',
      color: 'white',
      borderRadius: 50,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: 'navy',
      fontWeight: 'bold',
      marginRight: 10,
      '&:hover': {
        backgroundColor: 'blue',
        borderColor: 'blue',
        transition: '.4s',
      },
    },
    buttonDefaultCustom: {
      backgroundColor: 'white',
      textTransform: 'capitalize',
      color: 'navy',
      borderRadius: 50,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: 'navy',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'navy',
        color: 'white',
        transition: '.4s',
      },
    },
  }),
);
// ========== LAST STYLING AREA ========== //

const MainNavigation = ():any => {
  const classes = useStyles();
  return (
    <div className={classes.growing}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <SideDrawer>
            <IconButton color="inherit">
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </SideDrawer>
          <Typography className={classes.title} variant="h6" noWrap>
            Menu
          </Typography>
          <div style={{ width: 50, height: 60, paddingLeft: 20 }}>
            <Divider orientation="vertical" />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Cari Berita"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div style={{ width: 20, height: 60 }}>
            <Divider orientation="vertical" />
          </div>
          <Button className={classes.buttonPrimaryCustom}>
            Daftar detikID
          </Button>
          <Button className={classes.buttonDefaultCustom}>Masuk</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainNavigation;

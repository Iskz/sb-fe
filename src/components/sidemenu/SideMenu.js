import React, { Component } from 'react';
import clsx from 'clsx';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListAlt from '@material-ui/icons/ListAlt';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DonutLarge from '@material-ui/icons/DonutLarge';
import Tune from '@material-ui/icons/Tune';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

import useStyles from './SideMenu-style';
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";
import {useStore} from "../../store";

const mainTitle = '[AAC] Next Best Application';

const menuItems = [
    {
        url: '/',
        title: 'Home',
        icon: Home,
    },
    {
        url: '/profile',
        title: 'Profile',
        icon: AccountCircle,
    },
    {
        url: '/c360',
        title: 'Customer 360',
        icon: TrackChangesIcon,
    },
    {
        url: '/summary',
        title: 'Summary',
        icon: DonutLarge,
    },
    {
        url: '/signout',
        title: 'Sign Out',
        icon: MeetingRoom,
    }
];

const menuItemsSecondary = [
    {
        url: '/register',
        title: 'Register',
        icon: ListAlt,
    },
    {
        url: '/settings',
        title: 'Admin',
        icon: Tune,
    },
];

function SideMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [{ count }, dispatch] = useStore();
    const [state, setState] = React.useState({
        open: false
    });

    const handleDrawerOpen = () => {
        setState({open: true})
    };

    const handleDrawerClose = () => {
        setState({open: false})
    };
    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: state.open,
                })}
            >
                <Toolbar className={classes.toolbarRoot}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.toolbarRoot, classes.menuButton, {
                            [classes.hide]: state.open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {mainTitle}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: state.open,
                    [classes.drawerClose]: !state.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: state.open,
                        [classes.drawerClose]: !state.open,
                    }),
                }}
            >
                <div className={clsx(classes.toolbarRoot, classes.toolbar)}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} component="a" href={item.url}>
                            <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {menuItemsSecondary.map((item, index) => (
                        <ListItem button key={index} href={item.url}>
                            <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default SideMenu;
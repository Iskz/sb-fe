import React from 'react';
import './App.scss';
import RegisterView from '../registration';
import SummaryView from '../summary';
import Customer360View from '../customer-360';
import Container from '@material-ui/core/Container';
import useStyles from '../sidemenu/SideMenu-style.js';
import CssBaseline from '@material-ui/core/CssBaseline';

import { StoreProvider } from '../../store';
import initialState from "../../store/initialState"
import reducers from "../../reducers"

import {
    useHistory,
    useLocation,
    useRouteMatch,
    useParams,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SideMenu from "../sidemenu";
import {makeStyles} from "@material-ui/core";
import clsx from 'clsx';
import LoginView from "../login";

const drawerWidth = 240;

function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <StoreProvider initialState={initialState} reducer={reducers}>
            <Router>
                <div className="nba-app">
                    <CssBaseline />
                    <SideMenu/>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {/*<Container maxWidth="lg">*/}
                            <Switch>
                                {/*<Route exact path="/" component={Home} />*/}
                                <Route path="/" component={LoginView}/>
                                <Route exact path="/login" component={LoginView}/>
                                <Route exact path="/summary" component={SummaryView}/>
                                <Route path="/register" component={RegisterView}/>
                                <Route path="/c360" component={Customer360View}/>

                            </Switch>
                        {/*</Container>*/}

                    </main>
                </div>
            </Router>
        </StoreProvider>
    );
}

export default App;

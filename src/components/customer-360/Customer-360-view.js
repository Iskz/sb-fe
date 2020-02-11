import React, {useState, useReducer, useEffect} from "react";
import { useStore } from "../../store";
import { addCount, subtractCount } from "../../actions";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import useStyles from './Customer-360-style';

const gridItems = [
    {
        id: 1,
        title: "Network",
        bgColor: "",
        color: ""
    },
    {
        id: 2,
        title: "Mobility",
        bgColor: "",
        color: ""
    },
    {
        id: 3,
        title: "Persona",
        bgColor: "",
        color: ""
    },
    {
        id: 4,
        title: "Customer Experience",
        bgColor: "",
        color: ""
    },
    {
        id: 5,
        title: "Market Insight",
        bgColor: "",
        color: ""
    },
    {
        id: 6,
        title: "Social Network",
        bgColor: "",
        color: ""
    }
];

function Customer360View() {
    const [{ count }, dispatch] = useStore();
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;

    function handleAddCount() {

        initTableau();
        dispatch(addCount())
    }
    function handleRemoveCount() {
        dispatch(subtractCount())
    }
    function handleChange(id) {
        console.log(id);
    }

    function initTableau() {
        var divElement = document.getElementById('viz1580802475494');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1000px';
        vizElement.style.height = '1227px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }

    function isHalf(index) {
        return (index == (gridItems.length/2));
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <h2>C360 View</h2>
            {/*<Card className={classes.root}>*/}
            {/*    <CardContent>*/}
            {/*        <Typography variant="h5" component="h2">*/}
            {/*            Network*/}
            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions>*/}
            {/*        <Button size="small">Learn More</Button>*/}
            {/*    </CardActions>*/}
            {/*</Card>*/}

            <Grid container className={classes.root} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={spacing}>
                        {gridItems.map((item, index) => (
                            <Grid key={item.id} item xs={12} sm={4} onClick={handleChange(index)}>
                                <Paper className={classes.paper}>
                                    <p>{gridItems.length} {item.title}
                                        </p>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Customer360View;
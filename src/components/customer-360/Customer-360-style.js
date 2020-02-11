import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        height: 140,
        fontSize: 24,
        textTransform: 'uppercase',
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        border: '.5px solid #ececec',
        '&:hover': {
            border: '0px solid white',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default useStyles;
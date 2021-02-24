import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './Filters.css';



const useStyles = makeStyles({
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
  });
  
  export default function SimpleCard() {
    const classes = useStyles();
    
  
    return (
        <div>
          <h4>Filters</h4>
          <Card className={classes.root}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" >
                  <FontAwesomeIcon className="ic" icon={faStop} />
                  ALL CQA Result
                  <FontAwesomeIcon className="ico"  icon={faInfoCircle} />
                  </Typography>
                  <Typography className={classes.title} color="textSecondary">
                  <FontAwesomeIcon className="i"  icon={faStop} />
                   CQA with Closed Loop
                  <FontAwesomeIcon className="ico" icon={faInfoCircle} />
                  </Typography>
          
                </CardContent>
        
          </Card>
    
        </div>
    );
  }



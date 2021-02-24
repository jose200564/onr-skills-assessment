import React from 'react';
import Button from '@material-ui/core/Button';
import './Score.css'
import Filters from './Filters'



const Score = () => {
    return (
        <div>
            
       
        <div className="score">
            <div className="card">
            <Filters></Filters>
            </div>
            <h5>QUALITY SCORE TREND</h5> 
            <div className="buttons">
            <Button size="small" variant="contained" color="primary" className="button">
            Day
            </Button>
            <Button size="small" variant="contained" color="primary" className="button">
            Week
            </Button>
            <Button size="small" variant="contained" color="primary" className="button">
            Month
            </Button>
            <Button size="small" variant="contained" color="primary" className="button">
            Quarter
            </Button>
            <Button size="small" variant="contained" color="primary" className="button">
            Half
            </Button>
            <Button size="small" variant="contained" color="primary" className="button">
            Year
            </Button>
        </div>
        </div>
        </div>
    );
}

export default Score;

import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPrint, faQuestionCircle, faSignOutAlt, faThumbtack, faChartBar, faFileAlt, faShapes, faRedo, faGlobe, faPollH } from '@fortawesome/free-solid-svg-icons'
import Score from './Score'



const Header = () => {
    return (
        <div>
        <div className="verticalicons" >
                <FontAwesomeIcon className="iconv1" icon={faThumbtack} />
                <FontAwesomeIcon className="iconv" icon={faChartBar} />
                <FontAwesomeIcon className="iconv" icon={faFileAlt} />
                <FontAwesomeIcon className="iconv" icon={faShapes} />
                <FontAwesomeIcon className="iconv" icon={faRedo} />
        </div> 
        <div className="header">
            <div className="header_top">
                <h4>Diagnostic Tool</h4>
            <div className="icons">
                    <h6>Logged in as General User</h6> <hr></hr>
                    <FontAwesomeIcon className="icon" icon={faPollH} />
                    <FontAwesomeIcon className="icon" icon={faDownload} />
                    <FontAwesomeIcon className="icon" icon={faPrint} />
                    <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    
            </div>
                
            </div>
            <div className="header_middle">
                <h3>PERFORMANCE MANAGEMENT</h3>

            </div>
            <div className="header_bottom">
                <div className="diagnostic">
                <FontAwesomeIcon className="iconv" icon={faGlobe} />
                <h2>Diagnostic Tool</h2>
                <FontAwesomeIcon className="iconc" icon={faThumbtack} />
                </div>
            </div>
            </div>
            <div>
            <Score></Score>
            
            </div>
            </div>
            
            
            
            
    );
}

export default Header;

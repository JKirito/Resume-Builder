import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './HoverBox.module.css'

const HoverBox = ({ children, value, onClick, ...props }) => {
    return (
        <div className={classes.hoverBox} {...props}>
            <div className={classes.options}>
                {/* <div className={classes.circle}>
                    <FontAwesomeIcon icon='minus' className={classes.icon} />
                </div> */}
                <div className={classes.circle} onClick={e => { onClick(value + 1) }}>
                    <FontAwesomeIcon icon='plus' className={classes.icon} />
                </div>
            </div>
            {children}
        </div>
    );
}

export default HoverBox;
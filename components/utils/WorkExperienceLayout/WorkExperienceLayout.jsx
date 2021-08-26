import React from 'react';
import Editable from '../Editable/Editable';

import classes from './WorkExperienceLayout.module.css'

const WorkExperienceLayout = () => {
    return (
        <div className={classes.workExperienceLayout}>
            <div className={classes.left}>
                <Editable placeholder='May 2018 - May 2019' type='input' />
                <div className={classes.floatingDOT}>
                    <div className={classes.DOT}></div>
                </div>
            </div>
            <div className={classes.right}>
                <Editable placeholder='React Native Developer' type='input' style={{ paddingLeft: '12px' }} />
                <Editable placeholder='Facebook' type='input' style={{ paddingLeft: '12px' }} />
                <Editable placeholder='Facebook Inc. is an American social media and technology company based in Menlo Park, California' type='textarea' style={{ paddingLeft: '12px' }} />
                <Editable placeholder='- Your Experience' type='textarea' prefix='- ' style={{ paddingLeft: '24px' }} />
            </div>
        </div>
    );
}

export default WorkExperienceLayout;
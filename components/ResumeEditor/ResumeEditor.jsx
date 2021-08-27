import React, { useRef, useState } from 'react'
import Editable from '../utils/Editable/Editable'
import HoverBox from '../utils/HoverBox/HoverBox'
import WorkExperienceLayout from '../utils/WorkExperienceLayout/WorkExperienceLayout'

import classes from './ResumeEditor.module.css'

const ResumeEditor = () => {

    const [workExperienceListNumber, setWorkExperienceListNumber] = useState(2)
    const [educationListNumber, setEducationListNumber] = useState(2)
    const [skillListNumber, setSkillListNumber] = useState(2)

    // Template
    const PersonalInfoDataStructure = [
        {
            description: 'address: Berlin, Germany',
            type: 'input'
        },
        {
            description: 'sample@gmail.com',
            type: 'input',
        }
        , {
            description: '(+1 1234567890)',
            type: 'input',
        }, {
            description: 'Your Other Data',
            type: 'textarea',
        }
    ]

    const RenderPersonalInfoUI = () => {
        return PersonalInfoDataStructure.map((el, idx) => {
            return <Editable className={classes.space2} key={idx} placeholder={el.description} type={el.type} />
        })
    }

    const RenderWorkExperienceLayoutUI = () => {
        let myArr = Array(workExperienceListNumber).fill(0)
        // console.log(myArr)
        return myArr.map((el, idx) => {
            return <HoverBox key={idx} style={{ padding: '1rem 0' }} value={workExperienceListNumber} onClick={setWorkExperienceListNumber} >
                <WorkExperienceLayout />
            </HoverBox >
        })
    }

    const RenderEducationListUI = () => {
        let myArr = Array(educationListNumber).fill(0)
        return myArr.map((el, idx) => {
            return <HoverBox key={idx} style={{ padding: '1rem 0' }} value={educationListNumber} onClick={setEducationListNumber} >
                <Editable placeholder='BSc. Computer Science, Harvard' type='textarea' className={`${classes.personalInfo}`} />
                <Editable placeholder='2010 - 2014' type='input' className={`${classes.personalInfo} `} />
            </HoverBox >
        })
    }
    const RenderSkillListUI = () => {
        let myArr = Array(skillListNumber).fill(0)
        return myArr.map((el, idx) => {
            return <HoverBox key={idx} style={{ padding: '1rem 0' }} value={skillListNumber} onClick={setSkillListNumber} >
                <Editable placeholder='React Native' type='input' className={`${classes.personalInfo} `} />
            </HoverBox >
        })
    }
    return (
        <div className={classes.editorContainer}>
            <div className={classes.editor}>
                <div className={classes.name}>
                    <Editable
                        placeholder='Title'
                        type='input'
                    />
                </div>
                <div className={`${classes.personalInfoHeading} ${classes.section} ${classes.marginTop2}`}>
                    <Editable
                        placeholder='Personal Info'
                        type='input'
                    />
                </div>
                <div className={`${classes.section} ${classes.personalInfo}`}>
                    {
                        RenderPersonalInfoUI()
                    }
                </div>
                <div className={`${classes.section} ${classes.personalInfoHeading}`}>
                    <Editable placeholder='Profile' type='input' />
                    <Editable placeholder='I am a full-stack developer...' type='textarea' className={`${classes.personalInfo} ${classes.space2}`} />
                </div>
                <div className={`${classes.section} ${classes.personalInfoHeading}`}>
                    <Editable placeholder='Work Experience' type='input' />
                    <Editable placeholder='I worked at ...' type='textarea' className={`${classes.personalInfo} ${classes.space2}`} />
                </div>
                {RenderWorkExperienceLayoutUI()}

                <div className={`${classes.section} ${classes.personalInfoHeading}`}>
                    <Editable placeholder='Education' type='input' />
                </div>
                {RenderEducationListUI()}
                <div className={`${classes.section} ${classes.personalInfoHeading}`}>
                    <Editable placeholder='Skills' type='input' />
                </div>
                <div className={`${classes.gridtwo} ${classes.section}`}>
                    {
                        RenderSkillListUI()
                    }
                </div>

            </div>
        </div>
    );
}

export default ResumeEditor;
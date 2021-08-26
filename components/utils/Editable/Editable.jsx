import React, { useState, useEffect, useRef } from 'react';

import classes from './Editable.module.css'

const Editable = ({
    type,
    placeholder,
    prefix,
    ...props
}) => {
    const [editing, setEditing] = useState(false)
    const [task, setTask] = useState('')
    const childRef = useRef();

    const handleKeyDown = (e, type) => {
        const key = { e };
        const keys = ['Escape', 'Tab']
        const enterKey = 'Enter'
        const allKeys = [...keys, enterKey]

        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    }

    const handleInputFieldKeyDown = (e, type) => {
        if (type === 'input' && e.key === 'Enter') {
            setEditing(false);
        }
    }

    const setInputHeight = (element, defaultHeight) => {
        if (element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight}px`
        }
    }

    useEffect(() => {
        if (childRef && childRef.current && editing == true) {
            childRef.current.focus();
        }
    }, [editing, childRef])

    return (
        <div {...props}>
            {
                editing ? (
                    <div
                        onBlur={e => setEditing(false)}
                        onKeyDown={e => handleKeyDown(e, type)}
                    >
                        {
                            type === 'input' ? <input
                                className={`${classes.editable}`}
                                type="text"
                                ref={childRef}
                                placeholder={placeholder}
                                value={task}
                                onChange={e => {
                                    setTask(e.target.value)
                                }}
                                onKeyDown={e => handleInputFieldKeyDown(e, type)}
                            /> : <textarea
                                className={classes.editable}
                                type="text"
                                ref={childRef}
                                placeholder={placeholder}
                                value={task}
                                onChange={e => {
                                    setTask(e.target.value)
                                    setInputHeight(e, `20px`);
                                }}
                                onFocus={e => setInputHeight(e, `20px`)}
                            />
                        }

                    </div>
                ) : (
                    <div onClick={() => { setEditing(true) }}>
                        <span className={`${classes.text} ${classes.preWrap}`}>{task || placeholder || 'Editable Content'}</span>
                    </div>
                )
            }
        </div>
    );
}

export default Editable;
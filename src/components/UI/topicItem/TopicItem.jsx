import React, {useState} from 'react';
import cl from "./TopicItem.module.css"
import {Collapse} from "react-collapse";
import arrow from "../../../resources/arrow.png"

const TopicItem = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <div className={cl.topic}>
                <a href={props.link}>{props.value}</a>
                <button className={cl.arrow} onClick={() => setCollapsed(!collapsed)}>
                    <img src={arrow}/>
                </button>
            </div>


            <Collapse isOpened={collapsed}>
                <div className={cl.topicDescription}>
                    {props.description}
                </div>
            </Collapse>
        </div>

    );
};
export default TopicItem;

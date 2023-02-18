import React, {useState} from 'react';
import cl from "./TopicItem.module.css";
import {Collapse} from "react-collapse";
import arrow from "../../../resources/arrow.png";
import RestService from "../../../API/RestService";

const TopicItem = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const variable = RestService.getTopics();
    return (
        <div>
            <button className={cl.topic} onClick={() => setCollapsed(!collapsed)}>
                <a href={props.link}>{props.value}</a>
                <img src={arrow}/>
            </button>

            <Collapse isOpened={collapsed}>
                <div className={cl.topicDescription}>
                    {props.description}

                </div>
            </Collapse>
        </div>

    );
};
export default TopicItem;

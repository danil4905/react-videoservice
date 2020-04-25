import React from 'react';

export const ChannelItem = (props) => {
    return (
        <div className="channelItem">
            <div className="channelItem-logo">
                <img src={props.img} alt="#" />
            </div>
            <div className="channelItem-timetable">
                <h3>{props.title}</h3>
                <p><span className="channelItem-timetable-red">13:00   {props.first}</span><br />
                14:00   {props.second}<br />
                15:00   {props.third}
                </p>
            </div>
        </div>
    )
};
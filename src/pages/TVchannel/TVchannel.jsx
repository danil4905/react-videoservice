import React from 'react';
import { ChannelItem } from './channelItem/ChannelItem';

const TVchanel = (props) => {
    let channelItems = props.state.channels.map(m =>
        <ChannelItem key={m.id} title={m.title} img={m.img} first={m.first}
            second={m.second} third={m.third} />)
    return (
        <section className="TVchannel">
            <div className="container">
                <div className="TVchannel-wrapper">
                    {channelItems}
                </div>
            </div>
        </section>
    )
};

export default TVchanel;
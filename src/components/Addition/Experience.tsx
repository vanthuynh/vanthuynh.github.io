import React from 'react';

export default function Experience() {
    return (
        <div className="container">
            <ul className="timeline">

                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">June, 2020 - Sept, 2020</p>
                        <div className="tw-ml-10;">
                            <img className="width:60px; height:auto; float:right;" src="res/quickfits.png" alt=""/>
                            <h2 className="margin-bottom: 10px">Quickfits</h2>
                            <h3 className="margin-bottom: -10px">Software Engineering intern</h3>
                            <p>Build a platform that recommend daily outfits and match stylist with users.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">March, 2020 - June, 2020</p>
                        <div style="margin-left: 10px;">
                            <img style="width:60px; height:auto; float:right; background-color:black;" src="res/commercebytes.png" alt="">
                            <h2 style="margin-bottom: 10px">CommerceBytes</h2>
                            <h3 style="margin-bottom: -10px">Software Engineering intern</h3>
                            <p>Increase businesses' traffic with eCommerce and marketing</p>
                        </div>
                    </div>
                </div>

                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">March, 2020 - Current</p>
                        <div style="margin-left: 10px;">
                            <img style="width:60px; height:auto; float:right" src="res/vcla.png" alt="">
                            <h2 style="margin-bottom: 10px">vcla.stat.ucla</h2>
                            <h3 style="margin-bottom: -10px">research assistant</h3>
                            <p>Build a deep learning compiler to accelerate computing time</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
}

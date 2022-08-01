import React from 'react';

import w1 from '../../img/wunderkind.png';
import './Experience.scss';


const styles = {
    wrapper: {
      marginLeft: "10px",
    } as React.CSSProperties,
    image: {
        width: "60px",
        height: "auto",
        float: "right",
    } as React.CSSProperties,
    headline: {
        marginBottom: "10px",
    } as React.CSSProperties,
    subheadline: {
        marginBottom: "-10px",
    } as React.CSSProperties,
};
export default function Experience() {
    return (
        <div className="container">
            <ul className="timeline">

                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">June, 2020 - Sept, 2020</p>
                        <div style={styles.wrapper}>
                            <img style={styles.image} src={w1} alt="wunderkind logo"/>
                            <h2 style={styles.headline}>Wunderkind Co.</h2>
                            <h3 style={styles.subheadline}>Software Engineering intern</h3>
                            <p>Build a platform that recommend daily outfits and match stylist with users.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">June, 2020 - Sept, 2020</p>
                        <div style={styles.wrapper}>
                            <img style={styles.image} src={w1} alt="wunderkind logo"/>
                            <h2 style={styles.headline}>Resolvve</h2>
                            <h3 style={styles.subheadline}>Software Engineering intern</h3>
                            <p>Build a platform that recommend daily outfits and match stylist with users.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">June, 2020 - Sept, 2020</p>
                        <div style={styles.wrapper}>
                            <img style={styles.image} src={w1} alt="wunderkind logo"/>
                            <h2 style={styles.headline}>Northrop Grumman Collaboration Project</h2>
                            <h3 style={styles.subheadline}>Software Engineering intern</h3>
                            <p>Build a platform that recommend daily outfits and match stylist with users.</p>
                        </div>
                    </div>
                </div>

                
            </ul>
        </div>
    );
}

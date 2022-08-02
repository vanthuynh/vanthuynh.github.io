import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import exp1 from '../../img/wunderkind.png';
// import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
    const items = [
        {
            date: "June 2022 – August 2022",
            cardTitle: "Wunderkind",
            cardSubtitle: "Software Engineer Intern",
            cardDetailedText: "INFORMATION"
        },
        {
            date: "June 2022 – August 2022",
            cardTitle: "Wunderkind",
            cardSubtitle: "Software Engineer Intern",
            cardDetailedText: "INFORMATION"
        },
        {
            date: "June 2022 – August 2022",
            cardTitle: "Wunderkind",
            cardSubtitle: "Software Engineer Intern",
            cardDetailedText: "INFORMATION"
        },
        {
            date: "August 2017 – Fall 2020",
            cardTitle: "Santa Ana College",
            cardSubtitle: "Math Tutor",
            cardDetailedText:
                "Teach math, Teach math, Teach math,Teach math, Teach math, Teach math, Teach math, Teach math, Teach math,Teach math, Teach math, Teach math",
        },
    ];

    return (
        <section id="experience" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <VerticalTimeline className="custom-line">
                            {items.map((data, i) => {
                                return (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: "red" }}
                                        date={data.date}
                                        dateClassName="timeline-date"
                                        contentArrowStyle={{
                                            borderRight:
                                                "7px solid  rgb(33, 150, 243)",
                                        }}
                                        iconStyle={{
                                            background: "#0563bb",
                                            color: "#fff",
                                        }}
                                        // icon={<WorkIcon />}
                                        icon={<img src={exp1}/>}
                                    >
                                        <h3
                                            className="vertical-timeline-element-title"
                                            style={{
                                                fontSize: "14",
                                                color: "rgba(255, 255, 255, 0.8)",
                                            }}
                                        >
                                            {data.cardTitle}
                                        </h3>
                                        <h4
                                            className="vertical-timeline-element-subtitle"
                                            style={{
                                                fontSize: "1.2em",
                                                fontWeight: "350",
                                                color: "#7e8890",
                                            }}
                                        >
                                            {data.cardSubtitle}
                                        </h4>
                                        <p
                                            style={{
                                                fontSize: "1em",
                                                fontWeight: "350",
                                                color: "#74808a",
                                            }}
                                        >
                                            {data.cardDetailedText}
                                        </p>
                                    </VerticalTimelineElement>
                                );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    );
}
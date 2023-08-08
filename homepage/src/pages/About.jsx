import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "../styles/About.css"
import "../styles/Footer.css"

function About() {
  return (
    <div >
      <div className="text-box">
      <p>Introduce myself and whats my goal and purpose...dfghjklöhjkjdhajkssdaskljldjaskldklashdhasdhjahjsdhjhadhjadhksa
        asjdnjkasndjknajksdnjkansdkasdadadsasdadasdasdasdasdasdasdasdasdasdasddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaa
      </p>
      </div> 
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="...- 2003"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Pärnu Koidula High School
          </h3>
          <p>Graduated 2003</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2006"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Pärnu Country Vocational Education Center, Estonia.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          <p> Construction finishing</p>
          </h4> 
          </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2008"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Estonian Defence Forces
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Military Service
          </h4> 
         <p>Military Service 11 months.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2013"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Estonian Defence Forces <br /> Scouts Battalion <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Soldier
          </h4>
          <p>Accomplishments three deployments to Afghanistan 2009 as an anti tank assistant, 2010 as a machine gunner, 2012 as a
gunner. My contribution was awarded with a medal public institute.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2015"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ILOTRÜKK 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Manufacturing / Production
          </h4>
          <p>Production worker at the print shop. Main duties were working on the guillotine and other preparations for production. And
also helping in other phases of production as per need.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          DIGITRÜKK OÜ/ DIGIPRINT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Manufacturing / Production
          </h4>
          <p>Production worker at the print shop. Main duties were working on the large format printer and helping in other phases of
production as per need (assembling trade fair exhibitions and boxes, post-processing etc).
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Milrem OÜ
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Instructor
          </h4>
          <p>Junior instructor. Main duties were creating manuals and training materials, conducting training internally and for our
international clients on unmanned ground vehicles. But also participating in developing our product as a military specialist
and also search and purchase of instructors gear and equipment.
Layoff due to the economic situation related to the corona crisis.
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Estonian Defence Forces <br /> Air Force
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Specialist 
          </h4> 
         <p>The job responsibilities included being responsible for equipment management and ordering equipment in the Axapta
program, and using Microsoft Office (Word and Excel) programs in daily work.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Unemployed, new challenges
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
         </h4>
          <p>
            Starting to learn Javascript and React front end development.
            jasjjldkjal
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </div>
  );
}

export default About
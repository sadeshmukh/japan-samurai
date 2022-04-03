import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { GiKatana } from "react-icons/gi";
import { RiSwordLine } from "react-icons/ri";
function ProjectTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">A Timeline Heading</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="error">
            <RiSwordLine
              style={{ height: "30pt", width: "30pt" }}
            ></RiSwordLine>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            I'm typing a useless paragraph that is unnecessarily long instead of
            using lorem ipsum text. I guess this will do though, or will it? I
            don't know, but I'm going to keep typing and typing until I feel
            like I've got enough. In fact, I think I'll stop right now.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content">Two</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ProjectTimeline;

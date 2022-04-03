import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  GiKatana,
  GiFlowerEmblem,
  GiTornado,
  GiSinkingShip,
} from "react-icons/gi";
import { RiSwordLine } from "react-icons/ri";
import { red, yellow, amber, orange } from "@mui/material/colors";
function ProjectTimeline() {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">Until ~700 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[900] }}
            style={{ height: "30pt", width: "30pt" }}
          ></TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[900] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Early Japan
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">710 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[700] }}
            style={{ height: "30pt", width: "30pt" }}
          ></TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[700] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Beginning of Nara and Heian Periods - Decline of Chinese influence
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1156 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[700] }}
            style={{ height: "30pt", width: "30pt" }}
          ></TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[700] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Hogen Disturbance
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1159 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[700] }}
            style={{ height: "30pt", width: "30pt" }}
          ></TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[700] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Heiji Disturbance
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1180 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[700] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <RiSwordLine
              style={{ height: "20pt", width: "20pt" }}
            ></RiSwordLine>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[700] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Genpei War
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1185 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[500] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiFlowerEmblem
              style={{ height: "20pt", width: "20pt" }}
            ></GiFlowerEmblem>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[500] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Begin of Kamakura Period
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1274, 1281 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[500] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiSinkingShip
              style={{ height: "20pt", width: "20pt" }}
            ></GiSinkingShip>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[500] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Mongol Invasions of Japan - Weakens Kamakura shogunate
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1333 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: red[500] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiFlowerEmblem
              style={{ height: "20pt", width: "20pt" }}
            ></GiFlowerEmblem>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: red[500] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            End of Kamakura Period, Beginning of Ashikaga Period
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1467 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: orange[800] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <RiSwordLine
              style={{ height: "20pt", width: "20pt" }}
            ></RiSwordLine>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: orange[800] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Decade-long Onin War, Beginning of Sengoku (century-long period of
            civil war)
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1573 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: orange[800] }}
            style={{ height: "30pt", width: "30pt" }}
          ></TimelineDot>
          <TimelineConnector sx={{ bgcolor: orange[800] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Ashikaga shogunate officially ended, last Ashikaga killed
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1603 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: orange[500] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiFlowerEmblem
              style={{ height: "20pt", width: "20pt" }}
            ></GiFlowerEmblem>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: orange[500] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Beginning of peaceful Tokugawa shogunae (Edo period)
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1867 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: orange[500] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <RiSwordLine
              style={{ height: "20pt", width: "20pt" }}
            ></RiSwordLine>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: orange[500] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Meiji Restoration - Tokugawa overthrown
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1912 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: yellow[700] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiFlowerEmblem
              style={{ height: "20pt", width: "20pt" }}
            ></GiFlowerEmblem>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: yellow[700] }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Beginning of Taisho period
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <h3 className="mt-3 mb-3">1926 CE</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ bgcolor: yellow[700] }}
            style={{ height: "30pt", width: "30pt" }}
          >
            <GiFlowerEmblem
              style={{ height: "20pt", width: "20pt" }}
            ></GiFlowerEmblem>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="timeline-content mt-3 mb-3 text-start me-0">
            Beginning of Showa period - Brings Japan onto the modern stage
          </p>
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

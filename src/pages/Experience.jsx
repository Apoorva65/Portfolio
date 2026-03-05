import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';

function Experience(){
    return(
        <Container sx={{mt:15}}>
            <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                    <Typography variant="subtitle1">Mar 2025 - Present</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" fontWeight="bold">Software Development Transition & Skill Development</Typography>
                        <Typography variant="subtitle2" fontWeight="bold">Self-Directed Learning & Project Development </Typography>
                        <Typography>
                            <ul>
                                <li>Transitioning into software development with focused preparation for Software Development Engineer roles.</li>
                                <li>Building strong problem solving skills using Data Structures and Algorithms in C++.</li>
                                <li>Designing and building React based applications with features such as state management, routing, and CRUD workflows.</li>
                                <li>Actively improving code quality, application structure, and debugging skills through project based learning.</li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        <Typography variant="subtitle1">Aug 2022 - Feb 2025</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" fontWeight="bold">Mercedes Benz Research and Development India </Typography>
                        <Typography variant="subtitle2" fontWeight="bold">Diagnostic Engineer – Automotive Aftersales </Typography>
                        <Typography>
                            <ul>
                                <li>Worked in the Body & Interior domain, contributing to software driven diagnostic systems for Seat Safety Modules and Interior Lighting components.</li>
                                <li>Designed and maintained diagnostic logic and workflows using XENTRY authoring, enabling structured fault isolation and step by step troubleshooting.</li>
                                <li>Performed root cause analysis of complex field issues by analyzing fault codes, control unit behavior, and system logic, strengthening debugging and analytical problem solving skills.</li>
                                <li>Executed software flashing and configuration updates on control units, ensuring correctness, consistency, and system stability after updates.</li>
                                <li>Supported GRADE-X and InDia implementations, contributing to process driven workflows and clear technical documentation.</li>
                                <li>Collaborated with cross functional teams to improve system reliability, reduce recurring issues, and enhance end user (technician) experience.</li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    )
}

export default Experience;
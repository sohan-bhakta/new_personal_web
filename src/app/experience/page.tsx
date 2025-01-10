import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";

function Experience() {
  const projects = [
    {
      title: "Documentation AI",
      affiliation: "Komatsu",
      description: "I led a team to build a Retreival Augmented Generative AI using LLaMa index to help Komatsu Technical writers to speed up their revising and brainstorming process while also keeping their local data safe. This full stack project used reacts framework for the frontend and python in the backend. Flask was used for integration.",
      tools: ["React", "Typescript", "Python", "Flask"],
      image: "/komatsu_project.png",
      date: "December 2024",
    },
    {
      title: "Natural Language Project",
      affiliation: "University of Arizona",
      description: "I used applied quantitative analysis on Ted Talk data to conduct natural language analysis. On top of using Brokeh for visualizations, I trained a word2vec model that processed the texts to map word similarities each of the corpuses. We can see based on similar surrounding context what words were clustered together.",
      tools: ["python", "pandas", "blokeh"],
      image: "/data_science_project.png",
      date: "November 2024",
    },
    {
      title: "Customer Name Matching",
      affiliation: "Avnet",
      description: "After gathering data from Duns & Bradstreet, I cleaned customer name data using preprocessing techniques and then ran a fuzzy matching score for each name and grouped names that scored an 85% match with eachother.",
      tools: ["python", "pandas"],
      image: "/levenshtein.png",
      date: "July 2024",
    },
    {
      title: "First Personal Website",
      affiliation: "Personal Project",
      description: "This was my first front-end project, where I built a single-page website hosted on Google's Firebase platform. The project allowed me to explore and implement various web development concepts. For styling, I utilized Tailwind CSS, which enabled me to design a responsive and modern user interface with ease. On the backend, I wrote most of the functionality in JavaScript.",
      tools: ["Javascript", "React"],
      image: "/personal_website.png",
      date: "January 2024",
    },
    {
      title: "Redesigning Floor Layout",
      affiliation: "Amazon",
      description:
        "I redesigned the blueprint for managing incoming packages at the warehouse to reduce idle time for employees handling the loads. This involved relocating the drop-off points and optimizing the timing of package deliveries to ensure they reached their proper destinations more efficiently, saving both time and space in the warehouse. Annual savings were projected $1.6 million.",
      tools: ["excel"],
      image: "sdf8.JPG",
      date: "July 2023",
    },
    {
      title: "ASA Datafest",
      affiliation: "American Statistical Association",
      description: "In the ASA Datathon, we were given pro-bono data to help laywers give advice to their clients based on their geographical location. Our job was to give insights. My role was the visualation where we would able to see where certain types of crimes were taking place.",
      tools: ["powerbi", "python", "folium"],
      image: "./asa_vis.png",
      date: "March 2023",
    },
  ];

  return (
    <Box
      sx={{
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "20px"
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center'
          }}
        >
          <Typography variant="h2" sx={{
            display: 'flex',
            position: 'center'
          }}>Experience.</Typography>
          <Timeline position="alternate">
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2025 - Present
        </TimelineContent>
      </TimelineItem>
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Komatsu contract work end & Teaching Assistant end
        </TimelineContent>
      </TimelineItem>
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Teaching Assistant resume</TimelineContent>
      </TimelineItem>
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Komatsu contract work start</TimelineContent>
      </TimelineItem>
          <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Avnet Data Modeling internship end</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Avnet Data Modeling internship start</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Teaching Assistant break</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Teaching Assistant start
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2024
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Freelance
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Amazon AM internship end
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Amazon AM internship start
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>ASA Datafest
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2023
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </Box>
        <Box
          sx={{
            width: "800px",
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: "800px",
                height: "200px",
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "16px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.date}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: "30%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;

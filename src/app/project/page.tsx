"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Grid from "@mui/material/Grid";


interface AnimatedCardProps {
  children: ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </Box>
  );
};

interface Project {
  title: string;
  affiliation: string;
  affiliation_url: string;
  location: string;
  description: string;
  tools: string[];
  image: string;
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimatedCard>
        <Card
        >
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              height: 200,
              objectFit: "cover",
            }}
          />
          <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
  <Box
    sx={{
      position: "relative",
    }}
  >
    <img
      src={project.affiliation_url}
      alt="Company Affiliation"
      style={{
        width: "75px",
        height: "75px",
        borderRadius: "100%",
        objectFit: "cover",
        border: "2px solid",
        backgroundColor: "white",
        borderColor: "#555555",
      }}
    />
  </Box>
  <Typography variant="h6">{project.title}</Typography>
</Box>

            <Typography variant="subtitle2" color="text.secondary" sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}>
              {project.affiliation} · {project.date} · {project.location}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleOpen}>Read More</Button>
          </Box>
        </Card>
      </AnimatedCard>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle2" color="text.secondary">
            {project.affiliation} · {project.date}
          </Typography>
          <Typography variant="body1">{project.description}</Typography>
          {/* You can add more details such as tools, additional images, etc. */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

function ProjectGallery() {
  const projects = [
    {
      title: "ETL Pipeline",
      affiliation: "Trendgrabbr",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/trendgrabbr.png",
      location: 'remote',
      description:
        "I built an ETL pipeline that extracts informations from a handful of websites using playwright. We then tranform the unstructured data into a table and store it in a Postgre database. All the transformations, we use SQL to merge tables and Prefect to orchestrate the workflow weekly.",
      tools: ["Prefect", "Playwright", "Python", "Docker", "PostgreSQL"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/etl_pipeline.png",
      date: "February 2024",
    },
    {
      title: "Second Personal Website",
      affiliation: "Personal",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/personal_project.png",
      location: 'remote',
      description:
        "In my second website, I wanted to further my knowledge in using Typescript, containerizing using docker, and finally hosting a webapplication on the cloud. This project was to update from my previous website and consolidate all my skills, projects, and experience all on one hosted webapplication. ",
      tools: ["React", "Typescript", "Next.js", "Docker"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/personal_website_2.png",
      date: "December 2024",
    },
    {
      title: "Documentation AI",
      affiliation: "Komatsu",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/komatsu.svg",
      location: 'Tucson, AZ',
      description:
        "I led a team to build a Retrieval Augmented Generative AI using LLaMa index to help Komatsu Technical writers to speed up their revising and brainstorming process while also keeping their local data safe. This full stack project used React for the frontend and Python in the backend, with Flask for integration.",
      tools: ["React", "Typescript", "Python", "Flask"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/komatsu_project.png",
      date: "June 2024 - December 2024",
    },
    {
      title: "Natural Language Project",
      affiliation: "University of Arizona",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/fullualogo.png",
      location: 'Tucson, AZ',
      description:
        "I applied quantitative analysis on TED Talk data to conduct natural language analysis. I used Bokeh for visualizations and trained a word2vec model to map word similarities, clustering words by context.",
      tools: ["Python", "Pandas", "Bokeh"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/data_science_project.png",
      date: "November 2024",
    },
    {
      title: "Customer Name Matching",
      affiliation: "Avnet",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/avnet.svg",
      location: 'Phoenix, AZ',
      description:
        "After gathering data from Duns & Bradstreet, I cleaned customer name data using preprocessing techniques and ran fuzzy matching scores to group names that scored at least 85% similarity.",
      tools: ["Python", "Pandas"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/levenshtein.png",
      date: "July 2024 - August 2024",
    },
    {
      title: "First Personal Website",
      affiliation: "Personal Project",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/personal_project.png",
      location: 'remote',
      description:
        "My first front-end project, a single-page website hosted on Google’s Firebase. I explored various web development concepts, used Tailwind CSS for responsive styling, and implemented most functionality in JavaScript.",
      tools: ["JavaScript", "React"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/personal_website.png",
      date: "January 2024",
    },
    {
      title: "Redesigning Floor Layout",
      affiliation: "Amazon",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/amazon.svg",
      location: 'Jeffersonville, IN',
      description:
        "I redesigned the blueprint for managing incoming packages at the warehouse to reduce employee idle time. Optimizing package drop-off points and timing led to an annual saving projection of $1.6 million.",
      tools: ["Excel"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/sdf8.JPG",
      date: "May 2023 - July 2023",
    },
    {
      title: "ASA Datafest",
      affiliation: "American Statistical Association",
      affiliation_url: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/asalogo.webp",
      location: 'Tucson, AZ',
      description:
        "During the ASA Datathon, we used pro-bono data to help lawyers advise clients based on geography. I led the visualization efforts to show where certain types of crimes were taking place.",
      tools: ["PowerBI", "Python", "Folium"],
      image: "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/asa_vis.png",
      date: "March 2023",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
      </Box>
      
      <Grid container spacing={1} justifyContent="center" sx={{
        padding: "20px"
      }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={4} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ProjectCard project={project} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectGallery;

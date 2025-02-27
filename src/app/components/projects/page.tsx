"use client"
import React, { useState, useRef, useEffect, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  CardActionArea,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

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

function Projects() {
  const projects = [
    {
      title: "Komatsu Documentation AI",
      image:
        "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/komatsu_project.png",
      alt: "Komatsu Project",
      description:
        "Led a team to develop a full-stack application using Meta's AI framework to help Komatsu manage internal documentation and manuals.",
    },
    {
      title: "Natural Language Preprocessing",
      image:
        "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/data_science_project.png",
      alt: "NLP Project",
      description:
        "This data science project preprocesses textual datasets (TED Talks, Wikipedia, and lease documents), extracts frequent word patterns, and employs Word2Vec embeddings to visualize word relationships and similarities using t-SNE plots.",
    },
    {
      title: "Customer Name Matching",
      image:
        "https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/photos/levenshtein.png",
      alt: "Customer Name Matching",
      description:
        "Conducted extensive data analysis to group 60,000 customers to 5,600 through data mining techniques, including roll-up numbers, string matching, and location matching with Python.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleOpen = (project: any) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "25px",
          padding: "1rem",
        }}
      >
        {projects.map((project, index) => (
          <AnimatedCard key={index}>
            <Card
              sx={{
                width: "300px",
                bgcolor: "background.paper",
                border: ".5px solid",
                borderColor: "border.main",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140px"
                  image={project.image}
                  alt={project.alt}
                />
                <CardContent sx={{ bgcolor: "background.paper" }}>
                  <Typography>{project.title}</Typography>
                  <Box
                    component="div"
                    sx={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 4,
                    }}
                  >
                    {project.description}
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ bgcolor: "background.paper" }}>
                <Button onClick={() => handleOpen(project)}>Read More</Button>
              </CardActions>
            </Card>
          </AnimatedCard>
        ))}
      </Box>

      {selectedProject && (
        <Dialog open={!!selectedProject} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>{selectedProject.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{selectedProject.description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      <Button
        href="./project"
        variant="outlined"
        sx={{
          marginRight: "1rem",
          marginLeft: "1rem",
          gap: ".5rem",
        }}
      >
        See more
        <FaArrowRight />
      </Button>
    </Box>
  );
}

export default Projects;

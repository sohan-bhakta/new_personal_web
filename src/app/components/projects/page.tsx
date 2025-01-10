import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

function Projects() {
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
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "center",
          gap: "25px",
          padding: "1rem",
        }}
      >
        <Card
          sx={{
            width:'300px',
            bgcolor: "background.paper",
            border: ".5px solid",
            borderColor: "border.main"
          }}
        >
          <CardActionArea> 
            <CardMedia
              component="img"
              height="140px"
              image="/komatsu_project.png" // Correct path
              alt="Komatsu Project"
            />
            <CardContent
            sx={{
              bgcolor: "background.paper",
            }}>
              <Typography>Komatsu Documentation AI</Typography>
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
                Led a team to develop a full-stack application using Meta's AI
                framework to help Komatsu manage internal documentation and
                manuals.
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{
              bgcolor: "background.paper",
            }}>
            <Button href="./experience" size="small" color="primary">
              Read more
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width:'300px',
            bgcolor: "background.paper",
            border: ".5px solid",
            borderColor: "border.main"
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140px"
              image="/data_science_project.png" 
              alt="NLP Project"
            />
            <CardContent sx={{
              bgcolor: "background.paper",
            }}>
              <Typography>Natural Language Preprocessing</Typography>
              <Box component="div" sx={{
                overflow: "hidden",
                display: "-webkit-box",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                 }}>
                This data science project preprocesses textual datasets (TED Talks, Wikipedia, and lease documents), extracts frequent word patterns, and employs Word2Vec embeddings to visualize word relationships and similarities using t-SNE plots.
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions
          sx={{
            bgcolor: "background.paper",
          }}>
            <Button href="./experience" size="small" color="primary">
              Read more
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width:'300px',
            bgcolor: "background.paper",
            border: ".5px solid",
            borderColor: "border.main"
          }}
        >
          <CardActionArea
          sx={{
            bgcolor: "background.paper",
          }}>
            <CardMedia
              component="img"
              height="140px"
              image="/levenshtein.png" // Correct path
              alt="Komatsu Project"
            />
            <CardContent>
              <Typography>Customer Name Matching</Typography>
              <Box component="div" sx={{
                overflow: "hidden",
                display: "-webkit-box",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                 }}>
                Conducted extensive data analysis to group 60,000 customers to 5,600 through data mining techniques, including roll-up numbers,
                string matching, and location matching with Python
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions
          sx={{
            bgcolor: "background.paper",
          }}>
            <Button href="./experience" size="small" color="primary">
              Read more
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Button
        href="./experience"
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

import React from "react";
import { Box, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const books = [
  { id: 1, url: "framers.jpg", caption: "" },
  { id: 2, url: "textasdata.png", caption: "" },
  { id: 3, url: "atomic_habits.jpg", caption: "Photo 3 Caption" },
  { id: 4, url: "everybodylies.jpg", caption: "Photo 3 Caption" },
  { id: 5, url: "tedtalks.jpg", caption: "Photo 3 Caption" },
];

function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <Box
      sx={{
        width: "1010px",
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem"
      }}
    >
      {books.map((item, index) => (
        <Box key={index} sx={{
        }}>
            <img src={item.url} alt={`Book cover for ${item.id}`} style={{
                width: "auto",
                height: "250px",
                objectFit: 'cover'
            }}/>
        </Box>
      ))}
    </Box>
  );
}

export default PhotoCarousel;

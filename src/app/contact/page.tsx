"use client";
import React, { useState } from "react";
import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Contact() {
  const inquiries = [
    {
      value: "consultation",
      label: "consultation",
    },
    {
      value: "service",
      label: "service",
    },
    {
      value: "pricing",
      label: "pricing",
    },
    {
      value: "other",
      label: "other",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "1000px",
          justifyContent: "center",
          alignItems: 'center',
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <Typography variant="h2">Contact.</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs()} readOnly />
          </LocalizationProvider>
          <Typography variant="subtitle2">
            Thanks for trying to connect. Let me know how I can help. My average
            response time should not be more than a day, but please consult with
            my calendar.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-service"
              select
              label="Select"
              defaultValue="None"
              helperText="Please select your inquiry"
            >
              {inquiries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
              }}
            >
              <TextField
                required
                id="outline-required"
                label="Required"
                placeholder="First Name"
              />
              <TextField
                required
                id="outline-required"
                label="Required"
                placeholder="Last Name"
              />
            </Box>
            <TextField
              required
              id="outline-required"
              label="Required"
              placeholder="Email"
            />
            <TextField
              id="outlined-Message"
              label="Required *"
              multiline
              rows={5}
              placeholder="Message"
            />
            <Button
              variant="outlined"
              sx={{
                padding: "10px",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
        <Box
              sx={{
                position: 'relative',
                
              }}
            >
              <img
                src="/message.svg"
                alt="Personal Portrait"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: "100%",
                  objectFit: 'cover',
                  border: "3px solid",
                  
                  borderColor: "#0583F2"
                }}
              />
                  </Box>
      </Box>
    </Box>
  );
}

export default Contact;

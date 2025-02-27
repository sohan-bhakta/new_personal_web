"use client";
import React, { useRef, useState, useEffect, ReactNode} from "react";
import { Box, Typography } from "@mui/material";
import { LiaPython } from "react-icons/lia";
import { BiLogoTypescript, BiLogoJava, BiLogoCss3, BiLogoHtml5 } from "react-icons/bi";
import { VscTerminalBash } from "react-icons/vsc";
import { SiPostgresql, SiFastapi, SiFlask, SiPrefect, SiD3Dotjs, SiTableau, SiLangchain, SiTensorflow } from "react-icons/si";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { PiStackSimple } from "react-icons/pi";


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

function Experience() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "950px",
        width: "100%",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography 
            variant="h2" 
            fontSize={{ xs: "1.75rem", md: "4rem" }} 
            fontWeight="bold"
          >
            My
            Tech Stacks
          </Typography>
          <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
  <PiStackSimple size={30} style={{ marginLeft: "10px" }} />
</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "10px",
          }}
        >
          {[
            {
              label: "Programming Languages",
              description: "Python, TypeScript, Java, HTML5, CSS3, Bash scripting.",
              icons: [
                <LiaPython size={30} key="python" />,
                <BiLogoTypescript size={30} key="typescript" />,
                <BiLogoJava size={30} key="java" />,
                <BiLogoHtml5 size={30} key="html5" />,
                <BiLogoCss3 size={30} key="css3" />,
                <VscTerminalBash size={30} key="bash" />,
              ],
            },
            {
              label: "Backend Development & Data Management",
              description: "Flask, FastAPI, PostgreSQL for robust data solutions.",
              icons: [
                <SiFlask size={30} key="flask" />,
                <SiFastapi size={30} key="fastapi" />,
                <SiPostgresql size={30} key="postgresql" />,
              ],
            },
            {
              label: "Infrastructure & Containerization",
              description: "AWS cloud services and Docker for containerized applications.",
              icons: [
                <FaAws size={30} key="aws" />,
                <FaDocker size={30} key="docker" />,
              ],
            },
            {
              label: "Workflow Orchestration",
              description: "Prefect for data pipeline orchestration.",
              icons: [<SiPrefect size={30} key="prefect" />],
            },
            {
              label: "Frontend & Data Visualization",
              description: "React for UI, Tableau and D3.js for data visualization.",
              icons: [
                <FaReact size={30} key="react" />,
                <SiTableau size={30} key="tableau" />,
                <SiD3Dotjs size={30} key="d3" />,
              ],
            },
            {
              label: "AI/ML & Language Model Application",
              description: "LangChain for LLM pipelines and TensorFlow for machine learning.",
              icons: [
                <SiLangchain size={30} key="langchain" />,
                <SiTensorflow size={30} key="tensorflow" />,
              ],
            },
          ].map((item, index) => (
            <AnimatedCard key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
      
                width: "100%",
                maxWidth: "800px",
              }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                fontSize={{ xs: "1rem", md: "1.2rem" }}
              >
                {item.label}
              </Typography>
              
              <Typography 
                variant="body2" 
                fontSize={{ xs: "0.85rem", md: "1rem" }} 
                color="text.secondary"
                sx={{ maxWidth: "700px" }}
              >
                {item.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: ".75rem",
                  justifyContent: { xs: "center", md: "flex-start" },
                  marginTop: "5px",
                }}
              >
                {item.icons.map((icon, iconIndex) => (
                  <Box key={iconIndex} sx={{ fontSize: { xs: 24, md: 30 } }}>
                    {icon}
                  </Box>
                ))}
              </Box>
            </Box>
            </AnimatedCard>
            
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;

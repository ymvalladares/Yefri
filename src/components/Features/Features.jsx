import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";

const INK = "#16161A";
const SUBTLE = "#71717A";
const ACCENT = "#E8A23D";

const FEATURES = [
  {
    title: "Nationwide Shipping",
    description: "We offer nationwide shipping across the United States.",
  },
  {
    title: "White Glove Delivery",
    description:
      "We bring your dream car to your doorstep, anywhere in the city.",
  },
  {
    title: "24/7 Concierge",
    description: "A dedicated specialist available around the clock for you.",
  },
  {
    title: "Fully Insured",
    description:
      "Comprehensive coverage included — drive with total peace of mind.",
  },
];

export default function Features({
  imageLeft = "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800",
  imageRight = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
}) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 12, lg: 16, xl: 20 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          columnSpacing={{ xs: 4, md: 8 }}
          rowSpacing={{ xs: 6, md: 0 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: 2,
                fontWeight: 700,
                fontSize: 12.5,
                color: ACCENT,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Why DriveLux
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                color: INK,
                lineHeight: 1.12,
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
                  lg: "2.5rem",
                  xl: "3rem",
                },
                mb: 3,
              }}
            >
              Experience Luxury
              <br />
              Without Compromise
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                color: SUBTLE,
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.75,
                maxWidth: 480,
                mb: 4.5,
              }}
            >
              We don't just rent cars. We create unforgettable experiences that
              begin the moment you reach out and last long after you return the
              keys.
            </Typography>

            <Grid container columnSpacing={{ xs: 2, sm: 3 }} rowSpacing={3}>
              {FEATURES.map(({ title, description }) => (
                <Grid size={{ xs: 12, sm: 6 }} key={title}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        fontSize: 19,
                        color: ACCENT,
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 700,
                          color: INK,
                          fontSize: { xs: "0.85rem", md: "0.92rem" },
                          mb: 0.4,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          color: SUBTLE,
                          fontSize: { xs: "0.78rem", md: "0.82rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 260, sm: 320, md: 380, lg: 440 },
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={imageLeft}
                alt="Luxury SUV"
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "58%",
                  height: "85%",
                  objectFit: "cover",
                  borderRadius: { xs: "12px", md: "20px" },
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                }}
              />
              <Box
                component="img"
                src={imageRight}
                alt="Sports car"
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "55%",
                  height: "80%",
                  objectFit: "cover",
                  borderRadius: { xs: "12px", md: "20px" },
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

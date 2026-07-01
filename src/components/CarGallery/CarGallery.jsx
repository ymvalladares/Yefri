import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const additionalImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop",
];

export default function CarGallery({ mainImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = [mainImage, ...additionalImages];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: { xs: 2, md: 3 },
          overflow: "hidden",
          bgcolor: "#000",
        }}
      >
        <Box
          component="img"
          src={allImages[currentIndex]}
          alt={`Car view ${currentIndex + 1}`}
          sx={{
            width: "100%",
            height: { xs: 220, sm: 300, md: 400, lg: 480 },
            objectFit: "cover",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Arrows */}
        {allImages.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.9)",
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 },
                "&:hover": { bgcolor: "#fff" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <ArrowBackIos sx={{ fontSize: { xs: 14, sm: 18 }, color: "#0F172A" }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.9)",
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 },
                "&:hover": { bgcolor: "#fff" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <ArrowForwardIos sx={{ fontSize: { xs: 14, sm: 18 }, color: "#0F172A" }} />
            </IconButton>
          </>
        )}

        {/* Counter */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "rgba(0,0,0,0.6)",
            px: 1.25,
            py: 0.4,
            borderRadius: 1.5,
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "0.7rem", fontWeight: 500 }}>
            {currentIndex + 1} / {allImages.length}
          </Typography>
        </Box>
      </Box>

      {/* Thumbnails - small horizontal strip */}
      {allImages.length > 1 && (
        <Box
          sx={{
            mt: 1.5,
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
          }}
        >
          {allImages.map((image, i) => (
            <Box
              key={i}
              onClick={() => setCurrentIndex(i)}
              sx={{
                width: { xs: 44, sm: 72 },
                height: { xs: 34, sm: 52 },
                borderRadius: 1,
                overflow: "hidden",
                cursor: "pointer",
                border: "2px solid",
                borderColor: currentIndex === i ? "#2563EB" : "transparent",
                opacity: currentIndex === i ? 1 : 0.55,
                transition: "all 0.2s ease",
                "&:hover": {
                  opacity: 1,
                  borderColor: "#93C5FD",
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Thumbnail ${i + 1}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

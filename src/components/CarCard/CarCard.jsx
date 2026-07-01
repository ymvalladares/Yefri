import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Box,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Star,
  PlaceOutlined,
  SettingsOutlined,
  SpeedOutlined,
  WorkspacePremiumOutlined,
  Person,
} from "@mui/icons-material";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasImage = car.image && car.image.trim() !== "";

  // Specs de abajo — usa los campos que ya traiga car, con un fallback
  // razonable si alguno no viene en los datos.
  const specs = [
    { icon: SettingsOutlined, label: car.transmission || "Automatic" },
    {
      icon: SpeedOutlined,
      label: `${car.mileage ? car.mileage.toLocaleString() : 0}km`,
    },
    { icon: WorkspacePremiumOutlined, label: car.trim || "Premium" },
    { icon: Person, label: `${car.seats || 4} Seat` },
  ];

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        bgcolor: "#fff",
        border: "1px solid",
        borderColor: "grey.100",
        borderRadius: { xs: 3, md: 4 },
        boxShadow: "0 2px 14px rgba(15,23,42,0.06)",
        overflow: "hidden",
        transition: "all 0.25s ease",
        "&:hover": {
          boxShadow: "0 10px 28px rgba(15,23,42,0.12)",
          transform: "translateY(-2px)",
        },
      }}
      onClick={() => navigate(`/car/${car.id}`)}
    >
      {/* Imagen — a todo el ancho de la card, tocando los bordes, con radio solo arriba */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 160, sm: 180, md: 190 },
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {hasImage && !imageError ? (
          <Box
            component="img"
            src={car.image}
            alt={car.name}
            onError={() => setImageError(true)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#F1F5F9",
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{ width: 40, height: 40, color: "grey.400" }}
            >
              <path
                fill="currentColor"
                d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
              />
            </Box>
            <Typography variant="caption" sx={{ color: "grey.500", mt: 0.5 }}>
              No image
            </Typography>
          </Box>
        )}

        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "#fff",
            width: 30,
            height: 30,
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          {liked ? (
            <Favorite sx={{ color: "#2563EB", fontSize: 16 }} />
          ) : (
            <FavoriteBorder sx={{ fontSize: 16 }} />
          )}
        </IconButton>
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          px: { xs: 2, md: 2.25 },
          pt: 1.5,
          pb: { xs: 2, md: 2.25 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Nombre + rating */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.25,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              minWidth: 0,
            }}
          >
            {car.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.4, flexShrink: 0, ml: 1 }}>
            <Star sx={{ fontSize: 14, color: "#F5A623" }} />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "text.secondary",
                whiteSpace: "nowrap",
              }}
            >
              {car.rating || "4.9"}
            </Typography>
          </Box>
        </Box>

        {/* Subtítulo */}
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", md: "0.8rem" },
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {car.subtitle || `The ${car.brand}`}
        </Typography>

        {/* Ubicación + precio */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, minWidth: 0, flex: 1 }}>
            <PlaceOutlined sx={{ fontSize: 14, color: "text.secondary", flexShrink: 0 }} />
            <Typography
              sx={{
                fontSize: { xs: "0.72rem", md: "0.78rem" },
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {car.location || "Ubicación no especificada"}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              fontWeight: 800,
              flexShrink: 0,
              ml: 1,
              whiteSpace: "nowrap",
            }}
          >
            ${car.price.toLocaleString()}
            <Typography
              component="span"
              sx={{
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "text.secondary",
                ml: 0.25,
              }}
            >
              /Day
            </Typography>
          </Typography>
        </Box>

        {/* Specs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 1.5,
            mt: 0.5,
            borderTop: "1px solid",
            borderColor: "grey.100",
          }}
        >
          {specs.map(({ icon: Icon, label }, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Icon sx={{ fontSize: 14, color: "text.secondary" }} />
              <Typography
                sx={{
                  fontSize: { xs: "0.68rem", md: "0.72rem" },
                  color: "text.secondary",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Button
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/car/${car.id}`);
          }}
          sx={{
            mt: 1.5,
            mb: 0.5,
            bgcolor: "#2563EB",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            borderRadius: "10px",
            py: 1.1,
            "&:hover": { bgcolor: "#1D4ED8" },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Card>
  );
}

import { Box, Container, Typography, Grid, Button, Chip, Stack } from "@mui/material";
import {
  ArrowBack,
  Speed,
  LocalGasStation,
  Settings,
  Favorite,
  Share,
  ColorLens,
  ElectricBolt,
  Shield,
  DirectionsCar,
  CarRepair,
  CheckCircle,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById } from "../../api/mockData";
import { CarDetailSkeleton } from "../../components/Skeletons/Skeletons";
import { CarGallery } from "../../components";

const conditionColors = {
  New: { bg: "#E8F5E9", color: "#2E7D32" },
  Used: { bg: "#FFF3E0", color: "#E65100" },
};

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = getCarById(id);
      setCar(data);
      setLoading(false);
    };
    fetchCar();
  }, [id]);

  if (loading) return <CarDetailSkeleton />;
  if (!car) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Car not found</Typography>
        <Button variant="contained" onClick={() => navigate("/catalog")}>
          Back to Catalog
        </Button>
      </Container>
    );
  }

  const conditionStyle = conditionColors[car.condition] || { bg: "#F5F5F5", color: "#333" };

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", pt: "80px" }}>
      {/* Back button */}
      <Container maxWidth="xl">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{
            py: 1.5,
            px: 1,
            color: "#64748B",
            fontSize: "0.9rem",
            fontWeight: 500,
            "&:hover": { color: "#2563EB", bgcolor: "transparent" },
          }}
        >
          Back to results
        </Button>
      </Container>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Gallery */}
          <Grid size={{ xs: 12, md: 7 }}>
            <CarGallery mainImage={car.image} />
          </Grid>

          {/* Compact info card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: { md: "100%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: { xs: 2.5, md: 3 },
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
              {/* Badges + actions */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={car.condition}
                    size="small"
                    sx={{ bgcolor: conditionStyle.bg, color: conditionStyle.color, fontWeight: 700 }}
                  />
                  <Chip
                    label={car.category}
                    size="small"
                    sx={{ bgcolor: "#EFF6FF", color: "#2563EB", fontWeight: 600 }}
                  />
                </Stack>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <Button size="small" sx={{ minWidth: 32, p: 0.75 }}>
                    <Favorite sx={{ fontSize: 18, color: "#94A3B8" }} />
                  </Button>
                  <Button size="small" sx={{ minWidth: 32, p: 0.75 }}>
                    <Share sx={{ fontSize: 18, color: "#94A3B8" }} />
                  </Button>
                </Box>
              </Box>

              {/* Name + Price */}
              <Typography sx={{ fontWeight: 700, fontSize: "1.25rem", color: "#0F172A", mb: 0.5 }}>
                {car.name}
              </Typography>
              <Typography sx={{ fontWeight: 800, fontSize: "2rem", color: "#2563EB", lineHeight: 1.1, mb: 2.5 }}>
                ${car.price.toLocaleString()}
              </Typography>

              {/* Compact specs */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
                {[
                  { icon: <Speed sx={{ fontSize: 14 }} />, label: `${car.mileage.toLocaleString()} mi` },
                  { icon: <LocalGasStation sx={{ fontSize: 14 }} />, label: car.fuel },
                  { icon: <Settings sx={{ fontSize: 14 }} />, label: car.transmission },
                  { icon: <ElectricBolt sx={{ fontSize: 14 }} />, label: `${car.horsepower} hp` },
                  { icon: <ColorLens sx={{ fontSize: 14 }} />, label: car.color },
                ].map((spec, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 1.5,
                      py: 0.75,
                      bgcolor: "#F8FAFC",
                      borderRadius: 1.5,
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#475569",
                    }}
                  >
                    <Box sx={{ color: "#2563EB" }}>{spec.icon}</Box>
                    {spec.label}
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Stack spacing={1.25}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    bgcolor: "#2563EB",
                    py: 1.5,
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#1D4ED8" },
                  }}
                >
                  Schedule Test Drive
                </Button>
                <Button variant="outlined" size="large" fullWidth sx={{ py: 1.5 }}>
                  Contact Dealer
                </Button>
              </Stack>

              {/* Monthly payment */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 1,
                  border: "1px solid rgba(0, 0, 0, 0.23)",
                  textAlign: "center",
                  mt: 2.5,
                }}
              >
                <Typography sx={{ fontSize: "1.1rem", color: "#0F172A", fontWeight: 700 }}>
                  Est. ${Math.round(car.price / 60).toLocaleString()}/mo
                </Typography>
                <Typography sx={{ fontSize: "0.82rem", color: "#94A3B8" }}>
                  72 months @ 4.9% APR · $0 down
                </Typography>
              </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Features */}
        <Box
          sx={{
            mt: 4,
            bgcolor: "#fff",
            borderRadius: 3,
            border: "1px solid #E2E8F0",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              px: { xs: 2.5, md: 4 },
              py: { xs: 2, md: 2.5 },
              borderBottom: "1px solid #F1F5F9",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0F172A" }}>
              Features & Equipment
            </Typography>
          </Box>
          <Box sx={{ px: { xs: 2.5, md: 4 }, py: { xs: 2.5, md: 3 } }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
              {car.features.map((feature) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={feature}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                    <CheckCircle sx={{ fontSize: 16, color: "#22C55E", flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#334155", fontWeight: 500 }}>
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Safety & Warranty cards */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {[
              { icon: <Shield sx={{ fontSize: 24 }} />, title: "Multi-Point Inspection", desc: "150+ point inspection completed" },
              { icon: <CarRepair sx={{ fontSize: 24 }} />, title: "Vehicle History Report", desc: "Clean history, no accidents" },
              { icon: <DirectionsCar sx={{ fontSize: 24 }} />, title: "Roadside Assistance", desc: "24/7 emergency support included" },
            ].map((item, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#fff",
                    borderRadius: 3,
                  border: "1px solid #E2E8F0",
                    height: "100%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#2563EB",
                      boxShadow: "0 8px 24px rgba(37,99,235,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box sx={{ color: "#2563EB", mb: 1.5 }}>{item.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0F172A", mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.5 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

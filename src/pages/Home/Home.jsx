import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { getFeaturedCars } from "../../api/mockData";
import CarCard from "../../components/CarCard/CarCard";
import {
  ArrowForward,
} from "@mui/icons-material";
import {
  HeroSkeleton,
  NavbarSkeleton,
  HomeCarsSkeleton,
  StatsSkeleton,
} from "../../components/Skeletons/Skeletons";
import Features from "../../components/Features/Features";

const stats = [
  { value: "15K+", label: "Cars Sold" },
  { value: "98%", label: "Happy Customers" },
  { value: "50+", label: "Car Brands" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      const featuredCars = getFeaturedCars();
      setCars(featuredCars);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <Box>
        <NavbarSkeleton />
        <HeroSkeleton />
        <StatsSkeleton />
        <HomeCarsSkeleton count={12} />
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 500, sm: 550, md: 650, lg: 700, xl: 750 },
          backgroundImage: {
            xs: "linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop')",
            md: "linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=2560&auto=format&fit=crop')",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          pt: { xs: 8, md: 0 },
          pb: { xs: 4, md: 0 },
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <MuiBox
            sx={{
              mx: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
              maxWidth: 900,
            }}
          >
            <Chip
              label="Trusted by 15,000+ customers"
              sx={{
                bgcolor: "rgba(37,99,235,0.9)",
                color: "#fff",
                fontWeight: 600,
                px: { xs: 1.5, md: 2 },
                py: 0.5,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                mb: { xs: 1.5, md: 2 },
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                  xl: "4rem",
                },
              }}
            >
              Drive Your{" "}
              <Box component="span" sx={{ color: "#2563EB" }}>
                Dream
              </Box>{" "}
              Car Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: { xs: 3, md: 4 },
                fontWeight: 400,
                lineHeight: 1.7,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.15rem",
                  lg: "1.25rem",
                },
              }}
            >
              Discover thousands of quality vehicles from trusted dealers.
              Unlimited mileage · No hidden fees · Free cancellation
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{ maxWidth: { sm: 400, md: 500 } }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/catalog")}
                sx={{
                  bgcolor: "#2563EB",
                  color: "#fff",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  "&:hover": { bgcolor: "#1D4ED8" },
                }}
              >
                Browse Cars
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </MuiBox>
        </Container>
      </Box>

      <Container
        maxWidth="xl"
        disableGutters
        sx={{ py: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 } }}
      >
        <MuiBox
          sx={{
            px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#0F172A",
              mb: { xs: 1, md: 2 },
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.5rem",
                xl: "3rem",
              },
            }}
          >
            Featured Vehicles
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
            }}
          >
            Hand-picked selection of our most popular cars, trusted by thousands
            of happy customers.
          </Typography>
        </MuiBox>
        <MuiBox sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4, xl: 5 }}
            sx={{ width: "100%" }}
          >
            {cars.map((car) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={car.id}>
                <Box sx={{ height: "100%" }}>
                  <CarCard car={car} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </MuiBox>
        <MuiBox sx={{ textAlign: "center", mt: { xs: 4, sm: 5, md: 6 } }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate("/catalog")}
            sx={{
              bgcolor: "#0F172A",
              px: { xs: 3, md: 4 },
              py: { xs: 1.25, md: 1.5 },
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              "&:hover": { bgcolor: "#1E293B" },
            }}
          >
            View All Inventory
          </Button>
        </MuiBox>
      </Container>

      <Box id="about">
        <Features />
      </Box>

      <Box id="contact" sx={{ bgcolor: "#0F172A", py: { xs: 8, md: 12 }, color: "#fff", textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip
            label="Contact Us"
            sx={{ bgcolor: "rgba(37,99,235,0.2)", color: "#60A5FA", fontWeight: 600, px: 2, py: 0.5, mb: 3, fontSize: "0.85rem" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            Ready to Find Your{" "}
            <Box component="span" sx={{ color: "#2563EB" }}>
              Dream Car
            </Box>
            ?
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 4,
              maxWidth: 500,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Contact us today to schedule a test drive or learn more about our inventory.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  bgcolor: "#2563EB",
                  px: { xs: 4, sm: 5 },
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#1D4ED8" },
                }}
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/catalog")}
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  px: { xs: 4, sm: 5 },
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.5)" },
                }}
              >
                Browse Inventory
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

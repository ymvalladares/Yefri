import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

// Fuentes: Fraunces (display) + Inter (UI)
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

import {
  useCarFilters,
  FilterRow,
  FilterSelect,
  PriceRangeFilter,
} from "../../components/FilterPanel";

const BG = "#0F172A";
const BG_PANEL = "#16213D";
const INK = "#F4F1EA";
const MUTED = "rgba(244,241,234,0.6)";
const ACCENT = "#2563EB";
const LINE = "rgba(244,241,234,0.12)";

// Una sola fuente de verdad para las métricas — antes se repetían
// "entrega" y conceptos similares entre STATS, HIGHLIGHTS y FEATURES.
const STATS = [
  { icon: DirectionsCarFilledIcon, value: "248+", label: "Vehicles" },
  { icon: VerifiedOutlinedIcon, value: "32", label: "Brands" },
  { icon: StarRoundedIcon, value: "4.8", label: "Rating" },
  { icon: LocalShippingOutlinedIcon, value: "24h", label: "Delivery" },
];

const BRANDS = [
  "Toyota",
  "BMW",
  "Mazda",
  "Honda",
  "Audi",
  "Kia",
  "Ford",
  "Volvo",
  "Nissan",
  "Jeep",
  "Mercedes-Benz",
  "Hyundai",
];

export default function CatalogHeader({
  search,
  setSearch,
  filters,
  updateFilter,
  resetFilters,
  activeCount,
  showFilters,
  setShowFilters,
  uniqueValues,
}) {
  return (
    <Box
      component="header"
      sx={{ bgcolor: BG, color: INK, position: "relative", overflow: "hidden" }}
    >
      {/* Fondo: mesh + grid técnico */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(680px circle at 85% -10%, rgba(37,99,235,0.16), transparent 60%),
            radial-gradient(520px circle at 0% 100%, rgba(37,99,235,0.07), transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage: `linear-gradient(${LINE} 1px, transparent 1px), linear-gradient(90deg, ${LINE} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5), transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5), transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/*
        Ancho completo del sitio (no una columna centrada y angosta).
        El padding es en % para que respire igual en pantallas grandes,
        y cada bloque interno usa ese mismo ancho disponible en vez de
        encogerse al centro.
      */}
      <Box
        sx={{
          position: "relative",
          px: { xs: "6%", sm: "7%", md: "6%", lg: "8%" },
          pt: { xs: 6, md: 9 },
          pb: { xs: 5, md: 6 },
        }}
      >
        {/* 1. Eyebrow */}
        <Stack
          direction="row"
          spacing={1.25}
          sx={{ mb: 2.5, alignItems: "center" }}
        >
          <Box sx={{ width: 28, height: 1, bgcolor: ACCENT }} />
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: 3,
              fontWeight: 600,
              fontSize: 11.5,
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            2026 Catalog
          </Typography>
        </Stack>

        {/* 2-4. Bloque principal: TODO centrado y a todo el ancho del header */}
        <Box sx={{ width: "100%", textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5.4rem" },
              width: "100%",
            }}
          >
            Find the car that suits you
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.65,
              color: MUTED,
              maxWidth: 600,
              mx: "auto",
              mt: 3,
            }}
          >
            Hundreds of verified vehicles with transparent history and
            financing tailored to you. Browse the catalog and find the right
            car in minutes.
          </Typography>
        </Box>

        {/* Stats + Filters — alineados con el navbar encapsulado */}
        <Box
          sx={{
            maxWidth: 1536,
            mx: "auto",
          }}
        >
          {/* Stats */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
              gap: { xs: 3, sm: 4 },
              width: "100%",
              mb: { xs: 3, md: 4 },
            }}
          >
            {STATS.map((s) => (
              <Stack
                key={s.label}
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <s.icon sx={{ fontSize: 22, color: ACCENT, flexShrink: 0 }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: "1.3rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12.5,
                      color: MUTED,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>

          <Divider sx={{ borderColor: LINE, mb: { xs: 3, md: 4 } }} />

          {/* Search + Filters */}
          <Box
            sx={{
              bgcolor: BG_PANEL,
              border: `1px solid ${LINE}`,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
          <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                placeholder="Search by brand, model or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                sx={{
                  flex: 1,
                  maxWidth: 450,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(244,241,234,0.04)",
                    borderRadius: 1.5,
                    color: INK,
                    "& fieldset": { borderColor: LINE },
                    "&:hover fieldset": { borderColor: "rgba(244,241,234,0.24)" },
                    "&.Mui-focused fieldset": { borderColor: ACCENT },
                  },
                  "& input::placeholder": { color: MUTED },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: MUTED, fontSize: "1.1rem" }} />
                    </InputAdornment>
                  ),
                  endAdornment: search && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setSearch("")}
                        sx={{ color: MUTED }}
                      >
                        <Close sx={{ fontSize: 16 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="text"
                  size="small"
                  endIcon={
                    showFilters ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  sx={{
                    color: MUTED,
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    "&:hover": { color: ACCENT, bgcolor: "transparent" },
                  }}
                >
                  {showFilters ? "Hide" : "Show"} filters
                </Button>
                {activeCount > 0 && (
                  <Button
                    onClick={resetFilters}
                    size="small"
                    sx={{
                      color: "rgba(37,99,235,0.7)",
                      textTransform: "none",
                      fontSize: "0.8rem",
                      "&:hover": { color: ACCENT },
                    }}
                  >
                    Clear
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>

          <Collapse in={showFilters}>
            <Box
              sx={{
                px: { xs: 2.5, md: 3 },
                py: 2,
                borderTop: `1px solid ${LINE}`,
              }}
            >
              <FilterRow>
                <FilterSelect
                  label="Brand"
                  value={filters.brand}
                  onChange={(v) => updateFilter("brand", v)}
                  options={uniqueValues("brand")}
                />
                <FilterSelect
                  label="Category"
                  value={filters.category}
                  onChange={(v) => updateFilter("category", v)}
                  options={uniqueValues("category")}
                />
                <FilterSelect
                  label="Status"
                  value={filters.titleStatus}
                  onChange={(v) => updateFilter("titleStatus", v)}
                  options={uniqueValues("titleStatus")}
                />
                <FilterSelect
                  label="Fuel"
                  value={filters.fuel}
                  onChange={(v) => updateFilter("fuel", v)}
                  options={uniqueValues("fuel")}
                />
                <FilterSelect
                  label="Transmission"
                  value={filters.transmission}
                  onChange={(v) => updateFilter("transmission", v)}
                  options={uniqueValues("transmission")}
                />
                <PriceRangeFilter
                  value={[filters.minPrice, filters.maxPrice]}
                  onChange={([min, max]) => {
                    updateFilter("minPrice", min);
                    updateFilter("maxPrice", max);
                  }}
                />
              </FilterRow>
            </Box>
          </Collapse>
        </Box>
        </Box>
      </Box>

      {/* 7. Marquee de marcas */}
      <Box
        sx={{
          position: "relative",
          borderTop: `1px solid ${LINE}`,
          py: 2.25,
          overflow: "hidden",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: 40, md: 100 },
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background: `linear-gradient(90deg, ${BG}, transparent)`,
          },
          "&::after": {
            right: 0,
            background: `linear-gradient(270deg, ${BG}, transparent)`,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "catalog-marquee 28s linear infinite",
            "@keyframes catalog-marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <Typography
              key={`${brand}-${i}`}
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: 1,
                color: "rgba(244,241,234,0.35)",
                px: { xs: 3, md: 4 },
                whiteSpace: "nowrap",
                "&:hover": { color: ACCENT },
                transition: "color .2s ease",
              }}
            >
              {brand}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

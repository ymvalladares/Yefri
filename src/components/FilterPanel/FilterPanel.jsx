import { useState, useCallback } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  Close,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Clear,
} from "@mui/icons-material";

// ---- Hook ----

export function useCarFilters(data = []) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    titleStatus: "",
    fuel: "",
    transmission: "",
    minPrice: 0,
    maxPrice: 150000,
  });
  const [showFilters, setShowFilters] = useState(true);

  const uniqueValues = (field) =>
    [...new Set(data.map((d) => d[field]).filter(Boolean))].sort();

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      brand: "",
      category: "",
      titleStatus: "",
      fuel: "",
      transmission: "",
      minPrice: 0,
      maxPrice: 150000,
    });
    setSearch("");
  };

  const removeFilter = (key) => {
    if (key === "_search") {
      setSearch("");
    } else if (key === "price") {
      setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 150000 }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const activeCount = [
    search,
    filters.brand,
    filters.category,
    filters.titleStatus,
    filters.fuel,
    filters.transmission,
    filters.minPrice > 0 || filters.maxPrice < 150000,
  ].filter(Boolean).length;

  const filtered = data.filter((car) => {
    if (
      search &&
      !`${car.name} ${car.brand} ${car.model}`
        .toLowerCase()
        .includes(search.toLowerCase())
    ) {
      return false;
    }
    if (filters.brand && car.brand !== filters.brand) return false;
    if (filters.category && car.category !== filters.category) return false;
    if (filters.titleStatus && car.titleStatus !== filters.titleStatus) return false;
    if (filters.fuel && car.fuel !== filters.fuel) return false;
    if (filters.transmission && car.transmission !== filters.transmission)
      return false;
    if (car.price < filters.minPrice || car.price > filters.maxPrice)
      return false;
    return true;
  });

  const activeChips = [
    search && { key: "_search", label: `"${search}"` },
    filters.brand && { key: "brand", label: filters.brand },
    filters.category && { key: "category", label: filters.category },
    filters.titleStatus && { key: "titleStatus", label: filters.titleStatus },
    filters.fuel && { key: "fuel", label: filters.fuel },
    filters.transmission && { key: "transmission", label: filters.transmission },
    (filters.minPrice > 0 || filters.maxPrice < 150000) && {
      key: "price",
      label: `$${filters.minPrice.toLocaleString()} - $${filters.maxPrice.toLocaleString()}`,
    },
  ].filter(Boolean);

  return {
    search,
    setSearch,
    filters,
    updateFilter,
    resetFilters,
    removeFilter,
    activeCount,
    activeChips,
    filtered,
    uniqueValues,
    showFilters,
    setShowFilters,
  };
}

// ---- UI Components ----

export function FilterRow({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      {children}
    </Box>
  );
}

export function FilterSelect({ label, value, onChange, options }) {
  return (
    <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 150 } }}>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        renderValue={(v) =>
          v || (
            <span style={{ color: "rgba(244,241,234,0.4)" }}>
              All {label}
            </span>
          )
        }
        IconComponent={KeyboardArrowDown}
        sx={{
          bgcolor: "rgba(244,241,234,0.04)",
          borderRadius: 1.5,
          color: "#F4F1EA",
          fontSize: "0.875rem",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(244,241,234,0.12)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(244,241,234,0.24)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2563EB",
            borderWidth: 2,
          },
          "& .MuiSelect-select": {
            py: 1.5,
            px: 2,
          },
          "& .MuiSelect-icon": {
            right: 12,
            color: "rgba(244,241,234,0.5)",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#1D2024 !important",
              border: "1px solid rgba(244,241,234,0.12)",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              mt: 0.5,
              maxHeight: 280,
            },
          },
          MenuListProps: {
            sx: {
              bgcolor: "#1D2024",
              py: 0.5,
              "& .MuiMenuItem-root": {
                color: "#F4F1EA",
                fontSize: "0.875rem",
                borderRadius: "8px",
                mx: 0.5,
                my: 0.25,
                "&:hover": {
                  bgcolor: "rgba(244,241,234,0.06)",
                },
                "&.Mui-selected": {
                  bgcolor: "rgba(37,99,235,0.12)",
                  color: "#2563EB",
                  "&:hover": {
                    bgcolor: "rgba(37,99,235,0.18)",
                  },
                },
              },
            },
          },
        }}
      >
        <MenuItem value="">All {label}</MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function PriceRangeFilter({ value, onChange }) {
  const [min, max] = value;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: "rgba(244,241,234,0.04)",
        borderRadius: 1.5,
        border: "1px solid rgba(244,241,234,0.12)",
        px: 2,
        height: 40,
        flex: 1,
        minWidth: { xs: "100%", sm: 220 },
        "&:hover": { borderColor: "rgba(244,241,234,0.24)" },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.8rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
          color: "rgba(244,241,234,0.6)",
        }}
      >
        Price
      </Typography>
      <Slider
        value={value}
        onChange={(e, v) => onChange(v)}
        min={0}
        max={150000}
        step={1000}
        sx={{
          flex: 1,
          color: "#2563EB",
          height: 40,
          "& .MuiSlider-thumb": {
            width: 16,
            height: 16,
            bgcolor: "#1D2024",
            border: "2px solid #2563EB",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(37,99,235,0.16)",
            },
          },
          "& .MuiSlider-track": { height: 4 },
          "& .MuiSlider-rail": {
            height: 4,
            bgcolor: "rgba(244,241,234,0.12)",
          },
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.75rem",
          color: "#2563EB",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        ${max < 150000 ? max.toLocaleString() : "150k+"}
      </Typography>
    </Box>
  );
}

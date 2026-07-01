import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Speed } from "@mui/icons-material";
import { useState, useEffect, useMemo } from "react";
import { getCars } from "../../api/mockData";
import CarCard from "../../components/CarCard/CarCard";
import { CatalogPageSkeleton } from "../../components/Skeletons/Skeletons";
import { useCarFilters } from "../../components/FilterPanel";
import CatalogHeader from "../../pages/Catalog/CatalogHeader";

export default function Catalog() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      const data = getCars();
      setCars(data);
      setLoading(false);
    };
    fetchCars();
  }, []);

  const {
    search,
    setSearch,
    filters,
    updateFilter,
    resetFilters,
    activeCount,
    filtered,
    uniqueValues,
  } = useCarFilters(cars);

  const sortedCars = useMemo(() => {
    const sorted = [...filtered];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => b.year - a.year);
    }
    return sorted;
  }, [filtered, sortBy]);

  if (loading) {
    return <CatalogPageSkeleton />;
  }

  return (
    <>
      <CatalogHeader
        search={search}
        setSearch={setSearch}
        filters={filters}
        updateFilter={updateFilter}
        resetFilters={resetFilters}
        activeCount={activeCount}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        uniqueValues={uniqueValues}
      />
      <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
        <Container maxWidth="xl" sx={{ pt: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel sx={{ color: "#64748B" }}>Sort By</InputLabel>
              <Select
                label="Sort By"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1.5,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E2E8F0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CBD5E1",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2563EB",
                    borderWidth: 2,
                  },
                }}
              >
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="price-low">Price: Low to High</MenuItem>
                <MenuItem value="price-high">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {sortedCars.length > 0 ? (
            <>
              <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
                {sortedCars
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((car) => (
                    <Grid
                      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      key={car.id}
                      sx={{ display: "flex" }}
                    >
                      <CarCard car={car} />
                    </Grid>
                  ))}
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: { xs: 7, md: -1 } }}>
                <Pagination
                  count={Math.ceil(sortedCars.length / itemsPerPage)}
                  page={page}
                  onChange={(e, v) => setPage(v)}
                  color="primary"
                  shape="rounded"
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontWeight: 600,
                      borderRadius: 1.5,
                      "&:hover": { bgcolor: "#DBEAFE" },
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      bgcolor: "#2563EB",
                      color: "#fff",
                      "&:hover": { bgcolor: "#1D4ED8" },
                    },
                  }}
                />
              </Box>
            </>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                bgcolor: "#fff",
                borderRadius: 3,
                border: "1px solid #E2E8F0",
              }}
            >
              <Speed sx={{ fontSize: 64, color: "#CBD5E1", mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                No cars found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your filters or search terms
              </Typography>
              <Button variant="outlined" onClick={resetFilters}>
                Clear All Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}

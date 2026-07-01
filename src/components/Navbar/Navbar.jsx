import { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Menu, Close, ArrowForward, DirectionsCar } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Inicio", path: "/" },
  {
    label: "Autos",
    dropdown: true,
    options: [
      { label: "Todos los Autos", path: "/catalog" },
      { label: "Autos Nuevos", path: "/catalog?condition=New" },
      { label: "Autos Usados", path: "/catalog?condition=Used" },
      { label: "Eléctricos", path: "/catalog?fuel=Electric" },
    ],
  },
  { label: "Nosotros", path: "/#about" },
  { label: "Contacto", path: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
        setScrolled(currentScroll > 40);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setMobileOpen(false);
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname === route) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 10);
      } else {
        navigate(route);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const isActive = (path) => location.pathname === path;

  const isCarDetail = /^\/car\/\d+/.test(location.pathname);

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          mx: scrolled ? "auto" : 0,
          mt: scrolled ? "14px" : "0px",
          maxWidth: scrolled ? "1400px" : "100%",
          width: scrolled ? "calc(100% - 48px)" : "100%",
          height: 64,
          backgroundColor: isCarDetail
            ? scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"
            : scrolled ? "rgba(15, 12, 41, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          border: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid transparent",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : isCarDetail && !scrolled ? "1px solid rgba(0, 0, 0, 0.06)" : "none",
          borderRadius: scrolled ? "18px" : "0px",
          boxShadow: scrolled
            ? isCarDetail ? "0 8px 32px rgba(0, 0, 0, 0.08)" : "0 8px 32px rgba(0, 0, 0, 0.4)"
            : "none",
          boxSizing: "border-box",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Scroll progress bar */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "18px",
            right: "18px",
            height: "2px",
            overflow: "hidden",
            borderRadius: "1px",
          }}
        >
          <Box
            sx={{
              width: `${Math.min(scrollProgress, 100)}%`,
              height: "100%",
              background: "linear-gradient(90deg, #2563EB, #3B82F6, #60A5FA)",
              transition: "width 0.1s linear",
            }}
          />
        </Box>

        {/* Container interno */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: scrolled ? 4 : 6 },
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ cursor: "pointer", flexShrink: 0, alignItems: "center" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DirectionsCar sx={{ color: "#fff", fontSize: "1.2rem" }} />
            </Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.3rem",
                color: isCarDetail ? "#0F172A" : "white",
                letterSpacing: 0.5,
              }}
            >
              MOTOR
              <Box component="span" sx={{ color: "#2563EB" }}>
                X
              </Box>
            </Typography>
          </Stack>

          {/* Desktop nav links */}
          {!isMobile && (
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ mx: "auto", alignItems: "center" }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => handleNavigation(link.path)}
                  sx={{
                    color: isActive(link.path)
                      ? "#2563EB"
                      : isCarDetail
                      ? "#475569"
                      : "rgba(255,255,255,0.85)",
                    textTransform: "none",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    px: 2,
                    py: 1,
                    minWidth: "auto",
                    "&:hover": {
                      background: isCarDetail ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.08)",
                      color: isCarDetail ? "#2563EB" : "#fff",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <Stack direction="row" spacing={1.5} sx={{ flexShrink: 0, alignItems: "center" }}>
              <Button
                variant="contained"
                onClick={() => navigate("/catalog")}
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  background: isCarDetail ? "#0F172A" : "linear-gradient(135deg, #2563EB, #3B82F6)",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  color: isCarDetail ? "#fff" : "#fff",
                  boxShadow: isCarDetail ? "0 4px 20px rgba(15, 23, 42, 0.2)" : "0 4px 20px rgba(37, 99, 235, 0.35)",
                  "&:hover": {
                    background: isCarDetail ? "#1E293B" : "linear-gradient(135deg, #1D4ED8, #2563EB)",
                    boxShadow: isCarDetail ? "0 6px 28px rgba(15, 23, 42, 0.3)" : "0 6px 28px rgba(37, 99, 235, 0.45)",
                  },
                }}
              >
                Browse Autos
              </Button>
            </Stack>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ color: isCarDetail ? "#0F172A" : "#fff", p: 1 }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Mobile menu */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: scrolled ? 96 : 80,
            left: "50%",
            width: "92%",
            maxWidth: scrolled ? "1400px" : "100%",
            background:
              "linear-gradient(180deg, rgba(15, 12, 41, 0.98) 0%, rgba(10, 8, 30, 0.98) 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            transform: mobileOpen
              ? "translateX(-50%) scale(1) translateY(0)"
              : "translateX(-50%) scale(0.95) translateY(-10px)",
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            p: 1.5,
            zIndex: 1999,
            boxShadow: mobileOpen
              ? "0 20px 60px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(37, 99, 235, 0.1)"
              : "none",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Glow effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.6), transparent)",
              opacity: mobileOpen ? 1 : 0,
              transition: "opacity 0.5s ease 0.2s",
            }}
          />

          <Stack spacing={0.5}>
            {navLinks.map((item, index) => (
              <Button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                endIcon={
                  <ArrowForward sx={{ fontSize: "0.9rem", opacity: 0.4 }} />
                }
                sx={{
                  color: isActive(item.path)
                    ? "#60A5FA"
                    : "rgba(255, 255, 255, 0.85)",
                  textTransform: "none",
                  borderRadius: "12px",
                  justifyContent: "space-between",
                  py: 1.2,
                  px: 1.5,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
                  opacity: mobileOpen ? 1 : 0,
                  transitionDelay: mobileOpen ? `${index * 0.06}s` : "0s",
                  "&:hover": {
                    background: "rgba(37, 99, 235, 0.12)",
                    color: "#fff",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                my: 0.5,
              }}
            />

            <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleNavigation("/catalog")}
                endIcon={<ArrowForward sx={{ fontSize: "1rem" }} />}
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  boxShadow: "0 4px 20px rgba(37, 99, 235, 0.35)",
                  transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition: "all 0.3s ease",
                  transitionDelay: mobileOpen ? "0.25s" : "0s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                    boxShadow: "0 6px 28px rgba(37, 99, 235, 0.45)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Browse Autos
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Navbar;

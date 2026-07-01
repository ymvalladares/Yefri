import { Box, Container, Grid, Typography, TextField, Button, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Send } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms of Service", href: "/terms" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <LinkedIn />, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0F172A",
        color: "#fff",
        pt: { xs: 5, sm: 6, md: 8, lg: 10, xl: 12 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
          <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6, xl: 8 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
              <Typography
                variant="h5"
                component={RouterLink}
                to="/"
                sx={{
                  fontWeight: 800,
                  fontStyle: "italic",
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  textDecoration: "none",
                  color: "#fff",
                  display: "inline-block",
                }}
              >
                MOTOR
                <Box component="span" sx={{ color: "#2563EB" }}>
                  X
                </Box>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  mb: { xs: 2, md: 3 },
                  maxWidth: { xs: 280, md: 320, lg: 360 },
                  fontSize: { xs: "0.8rem", sm: "0.875rem", md: "0.95rem" },
                }}
              >
                Your trusted partner in finding the perfect vehicle. Over 15,000 happy customers and counting.
              </Typography>
              <Box sx={{ display: "flex", gap: { xs: 0.5, md: 1 } }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    sx={{
                      color: "grey.400",
                      width: { xs: 36, md: 40 },
                      height: { xs: 36, md: 40 },
                      "&:hover": { color: "#2563EB", bgcolor: "rgba(37,99,235,0.1)" },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                Company
              </Typography>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    display: "block",
                    color: "grey.400",
                    mb: { xs: 1, md: 1.5 },
                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
                    "&:hover": { color: "#2563EB" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Grid>

            <Grid size={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                Support
              </Typography>
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  underline="none"
                  sx={{
                    display: "block",
                    color: "grey.400",
                    mb: { xs: 1, md: 1.5 },
                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
                    "&:hover": { color: "#2563EB" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                Stay Updated
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  mb: { xs: 2, md: 2 },
                  fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
                }}
              >
                Subscribe to our newsletter for the latest deals and updates.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: 1.5 },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  placeholder="Enter your email"
                  size="small"
                  sx={{
                    flex: { xs: "1", sm: 1 },
                    bgcolor: "grey.800",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "grey.700" },
                      "&:hover fieldset": { borderColor: "grey.600" },
                      "& .MuiInputBase-input": {
                        py: { xs: 1, md: 1.25 },
                        fontSize: { xs: "0.8rem", md: "0.875rem" },
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#2563EB",
                    minWidth: { xs: "100%", sm: "auto" },
                    px: { xs: 2, md: 3 },
                    "&:hover": { bgcolor: "#1D4ED8" },
                  }}
                >
                  <Send fontSize="small" />
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, sm: 5, md: 6, lg: 8 },
              pt: { xs: 2, md: 3 },
              borderTop: "1px solid",
              borderColor: "grey.800",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 1, md: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "grey.500",
                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © {currentYear} Abbsium. All rights reserved.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  underline="none"
                  sx={{
                    color: "grey.500",
                    fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                    "&:hover": { color: "#2563EB" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

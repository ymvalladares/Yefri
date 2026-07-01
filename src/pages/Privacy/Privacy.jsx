import { Box, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", py: { xs: 4, md: 6, lg: 8 } }}>
      <Container maxWidth="md">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "#2563EB",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              fontWeight: 500,
              mb: { xs: 3, md: 4 },
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
            Back to Home
          </Box>
        </Link>

        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: { xs: 2, md: 3 },
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25rem" },
            }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last updated: {currentYear}
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                1. Information We Collect
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We collect information you provide directly to us, such as when you create an account, search for a vehicle, 
                contact us, or request information. This may include your name, email address, phone number, and any other 
                information you choose to provide.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                2. How We Use Your Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We use the information we collect to provide, maintain, and improve our services, process transactions, 
                send you technical notices and support messages, and respond to your comments and questions.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                3. Information Sharing
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties 
                without your consent. This does not include trusted third parties who assist us in operating our website, 
                conducting our business, or servicing you.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                4. Data Security
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We implement a variety of security measures to maintain the safety of your personal information. 
                Your personal information is contained behind secured networks and is only accessible by a limited number 
                of persons who have special access rights.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                5. Cookies
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We use cookies to understand and save your preferences for future visits, keep track of advertisements, 
                and compile aggregate data about site traffic and site interaction so that we can offer better site 
                experiences and tools in the future.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                6. Your Consent
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                By using our site, you consent to our privacy policy. If we decide to change our privacy policy, 
                we will update the modification date below.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                7. Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                If you have any questions about this Privacy Policy, please contact us at privacy@motorx.com 
                or through our contact form on the website.
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid", borderColor: "grey.200" }}>
            <Typography variant="caption" color="text.secondary">
              © {currentYear} MotorX. All rights reserved. | Created by Abbsium
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

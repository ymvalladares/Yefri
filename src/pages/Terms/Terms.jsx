import { Box, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Terms() {
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
            Terms of Service
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last updated: {currentYear}
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                1. Acceptance of Terms
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                By accessing and using the MotorX website, you accept and agree to be bound by the terms and 
                conditions of this agreement. If you do not agree to abide by these terms, please do not use 
                this service.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                2. Description of Service
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                MotorX is an online platform that connects car buyers with sellers and dealers. We provide a 
                marketplace for listing, browsing, and comparing vehicles. We are not a dealer and do not own 
                or sell the vehicles listed on our platform.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                3. User Responsibilities
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                You agree to use our service only for lawful purposes and in accordance with these Terms. 
                You are responsible for maintaining the confidentiality of your account and password. You agree 
                to accept responsibility for all activities that occur under your account.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                4. Listings and Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                All vehicle listings on MotorX are provided by third-party dealers and sellers. While we strive 
                to ensure accurate information, we do not guarantee the accuracy, completeness, or reliability 
                of any listing or related content. Always verify information directly with the seller.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                5. Limitation of Liability
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                MotorX shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use or inability to use the service. We do not endorse or verify 
                any sellers or dealers on our platform.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                6. Transactions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                Any transactions you engage in with sellers or dealers are solely between you and that party. 
                MotorX is not a party to any transaction and assumes no responsibility for any aspect of any 
                transaction between buyers and sellers.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                7. Modifications to Service
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                We reserve the right to modify or discontinue the service at any time, with or without notice. 
                We shall not be liable to you or any third party for any modification, suspension, or discontinuance 
                of the service.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                8. Governing Law
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                These Terms shall be governed by and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions. You agree to submit to the personal and 
                exclusive jurisdiction of the courts located within the United States.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                9. Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "0.95rem" } }}>
                If you have any questions about these Terms, please contact us at legal@motorx.com or through 
                our contact form on the website.
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

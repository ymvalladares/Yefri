import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  WhatsApp,
  ExpandMore,
} from "@mui/icons-material";

const contactInfo = [
  {
    icon: <Phone />,
    title: "Teléfono",
    lines: ["+1 (555) 123-4567"],
    action: "tel:+15551234567",
  },
  {
    icon: <Email />,
    title: "Correo",
    lines: ["yefry5983@gmail.com"],
    action: "mailto:yefry5983@gmail.com",
  },
  {
    icon: <LocationOn />,
    title: "Ubicación",
    lines: ["7435 Centauri Rd, Jacksonville, FL"],
    action: "#",
  },
  {
    icon: <AccessTime />,
    title: "Horario de Atención",
    lines: ["Lun-Dom: 24 horas"],
    action: "#",
  },
];

const faqs = [
  {
    question: "¿Cómo programo una prueba de manejo?",
    answer:
      "Completa el formulario de contacto o llámanos directamente. Confirmaremos tu cita en 24 horas.",
  },
  {
    question: "¿Ofrecen opciones de financiamiento?",
    answer:
      "Sí, trabajamos con múltiples prestamistas para ofrecer tasas competitivas adaptadas a tu situación.",
  },
  {
    question: "¿Puedo entregar mi vehículo actual como parte de pago?",
    answer:
      "¡Por supuesto! Aceptamos vehículos como parte de pago y ofrecemos valor justo de mercado con una tasación gratuita.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Una licencia de conducir válida, comprobante de seguro y comprobante de ingresos. Te guiaremos con el resto.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:sales@motorx.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <Box
        sx={{
          bgcolor: "#0F172A",
          color: "#fff",
          py: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(37,99,235,0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="md"
          sx={{ position: "relative", textAlign: "center" }}
        >
          <Chip
            label="Contáctanos"
            sx={{
              bgcolor: "rgba(37,99,235,0.2)",
              color: "#60A5FA",
              fontWeight: 600,
              px: 2,
              py: 0.5,
              mb: 3,
              fontSize: "0.85rem",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "#2563EB" }}>
              Contactanos
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 550,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
            }}
          >
            ¿Tienes preguntas? Envíanos un mensaje y responderemos en 24 horas.
          </Typography>
        </Container>
      </Box>

      {/* Info Cards */}
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: -2, sm: -3, md: -4 },
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        }}
      >
        <Grid container spacing={2}>
          {contactInfo.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "#fff",
                  borderRadius: 2,
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#2563EB",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    bgcolor: "rgba(37,99,235,0.08)",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      mb: 0.25,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#0F172A",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.lines.join(" · ")}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Form + Sidebar */}
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}
      >
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                bgcolor: "#fff",
                borderRadius: 3,
                border: "1px solid #E2E8F0",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  color: "#0F172A",
                  mb: 0.5,
                }}
              >
                Envíanos un Mensaje
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.9rem", mb: 3 }}>
                Completa el formulario a continuación y te responderemos pronto.
              </Typography>

              {submitted ? (
                <Box
                  sx={{
                    textAlign: "center",
                    py: 6,
                    bgcolor: "rgba(34,197,94,0.05)",
                    borderRadius: 2,
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: "rgba(34,197,94,0.1)",
                      color: "#22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Send sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#0F172A",
                      mb: 1,
                    }}
                  >
                    ¡Mensaje Enviado!
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.9rem" }}>
                    Gracias. Responderemos pronto.
                  </Typography>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Nombre Completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Número de Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Asunto"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Tu Mensaje"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        fullWidth
                        sx={{
                          bgcolor: "#2563EB",
                          py: 1.5,
                          fontWeight: 600,
                          borderRadius: 2,
                          fontSize: "1rem",
                          "&:hover": { bgcolor: "#1D4ED8" },
                        }}
                      >
                        Enviar Mensaje
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {/* Quick Contact */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(37,99,235,0.2)",
                  background: "linear-gradient(135deg, #0F172A, #1E293B)",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, fontSize: "1.05rem", mb: 0.5 }}
                >
                  ¿Necesitas Ayuda Inmediata?
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.85rem",
                    mb: 2.5,
                  }}
                >
                  Llámanos o escríbenos por WhatsApp para una respuesta más
                  rápida.
                </Typography>
                <Stack spacing={1.5}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Phone />}
                    href="tel:+15551234567"
                    sx={{
                      bgcolor: "#2563EB",
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2,
                      "&:hover": { bgcolor: "#1D4ED8" },
                    }}
                  >
                    Llamar Ahora
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<WhatsApp />}
                    href="https://wa.me/15551234567"
                    target="_blank"
                    sx={{
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2,
                      borderColor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                    }}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </Paper>

              {/* Location */}
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 3,
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.4033517329735!2d-81.77253272295349!3d30.254086708604834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c74f053afdd5%3A0x80ccda95e5c14329!2s7435%20Centauri%20Rd%2C%20Jacksonville%2C%20FL%2032210!5e0!3m2!1ses!2sus!4v1782937274717!5m2!1ses!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<LocationOn />}
                    href="https://www.google.com/maps/place/7435+Centauri+Rd,+Jacksonville,+FL+32210"
                    target="_blank"
                    sx={{
                      borderRadius: 2,
                      py: 0.8,
                      fontWeight: 600,
                      borderColor: "#2563EB",
                      color: "#2563EB",
                      "&:hover": {
                        bgcolor: "rgba(37,99,235,0.05)",
                        borderColor: "#2563EB",
                      },
                    }}
                  >
                    Abrir en Google Maps
                  </Button>
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 10 } }}>
        <Container
          maxWidth="md"
          sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
            <Chip
              label="FAQ"
              sx={{
                bgcolor: "rgba(37,99,235,0.08)",
                color: "#2563EB",
                fontWeight: 600,
                px: 2,
                py: 0.5,
                mb: 2,
                fontSize: "0.85rem",
              }}
            />
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                color: "#0F172A",
                mb: 1,
              }}
            >
              Preguntas Frecuentes
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: "0.95rem",
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Respuestas rápidas a preguntas comunes sobre nuestros servicios.
            </Typography>
          </Box>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                disableGutters
                sx={{
                  borderRadius: 3,
                  border: "1px solid #E2E8F0",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": {
                    borderColor: "rgba(37,99,235,0.2)",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.06)",
                  },
                  "&:first-of-type": {
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  "&:last-of-type": {
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "#2563EB" }} />}
                  sx={{
                    px: 3,
                    py: 2,
                    "& .MuiAccordionSummary-content": { my: 1 },
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A" }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

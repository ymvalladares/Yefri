import { Box, Container, Skeleton, keyframes } from "@mui/material";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export function NavbarSkeleton() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        bgcolor: "rgba(15, 12, 41, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 6 },
        }}
      >
        {/* Logo placeholder */}
        <Skeleton
          variant="rounded"
          width={120}
          height={32}
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: 1.5,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />

        {/* Nav links placeholder */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton
              key={i}
              variant="rounded"
              width={72}
              height={36}
              sx={{
                bgcolor: "rgba(255,255,255,0.06)",
                borderRadius: 1.5,
                "&::after": {
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                  animation: `${shimmer} 1.5s infinite`,
                },
              }}
            />
          ))}
        </Box>

        {/* CTA placeholder */}
        <Skeleton
          variant="rounded"
          width={120}
          height={40}
          sx={{
            bgcolor: "rgba(37,99,235,0.25)",
            borderRadius: 2,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.1), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export function HeroSkeleton() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 500, sm: 550, md: 650, lg: 700, xl: 750 },
        background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.7) 50%, rgba(37,99,235,0.3) 100%)",
        display: "flex",
        alignItems: "center",
        pt: { xs: 6, md: 0 },
      }}
    >
      <Box sx={{ maxWidth: 800, mx: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
        <Skeleton
          variant="rounded"
          width={200}
          height={32}
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            mb: 3,
            borderRadius: 2,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />
        <Skeleton
          variant="text"
          width={400}
          height={80}
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            fontSize: "4rem",
            mb: 2,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            mb: 4,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" width={160} height={48} sx={{ bgcolor: "rgba(37,99,235,0.3)", borderRadius: 2 }} />
          <Skeleton variant="rounded" width={140} height={48} sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 2 }} />
        </Box>
      </Box>

      <Box sx={{ mx: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 }, mt: 4 }}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={180}
          sx={{
            maxWidth: 1000,
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: 3,
            "&::after": {
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              animation: `${shimmer} 1.5s infinite`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export function CarCardSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "grey.100",
        borderRadius: { xs: 3, md: 4 },
        overflow: "hidden",
        bgcolor: "#fff",
        boxShadow: "0 2px 14px rgba(15,23,42,0.06)",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          height: { xs: 160, sm: 180, md: 190 },
          bgcolor: "grey.100",
          "&::after": {
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            animation: `${shimmer} 1.5s infinite`,
          },
        }}
      />
      <Box sx={{ px: { xs: 2, md: 2.25 }, pt: 1.5, pb: { xs: 2, md: 2.25 }, flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        {/* Nombre + rating */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Skeleton variant="text" width="55%" height={24} sx={{ bgcolor: "grey.100" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Skeleton variant="circular" width={14} height={14} sx={{ bgcolor: "grey.200" }} />
            <Skeleton variant="text" width={28} height={16} sx={{ bgcolor: "grey.100" }} />
          </Box>
        </Box>

        {/* Subtítulo */}
        <Skeleton variant="text" width="40%" height={16} sx={{ bgcolor: "grey.100" }} />

        {/* Ubicación + precio */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flex: 1 }}>
            <Skeleton variant="circular" width={14} height={14} sx={{ bgcolor: "grey.200", flexShrink: 0 }} />
            <Skeleton variant="text" width="50%" height={16} sx={{ bgcolor: "grey.100" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.25, ml: 1 }}>
            <Skeleton variant="text" width={60} height={22} sx={{ bgcolor: "grey.100" }} />
            <Skeleton variant="text" width={24} height={14} sx={{ bgcolor: "grey.100" }} />
          </Box>
        </Box>

        {/* Specs */}
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 1.5, mt: 0.5, borderTop: "1px solid", borderColor: "grey.100" }}>
          {[1, 2, 3, 4].map((i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Skeleton variant="circular" width={14} height={14} sx={{ bgcolor: "grey.200" }} />
              <Skeleton variant="text" width={32} height={14} sx={{ bgcolor: "grey.100" }} />
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Skeleton
          variant="rounded"
          sx={{
            mt: 1.5,
            mb: 0.5,
            height: 42,
            borderRadius: "10px",
            bgcolor: "grey.200",
          }}
        />
      </Box>
    </Box>
  );
}

export function CarsGridSkeleton({ count = 6 }) {
  return (
    <Box sx={{ py: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 }, bgcolor: "#fff", px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
      <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
        <Skeleton variant="text" width={250} height={48} sx={{ bgcolor: "grey.100", mb: 1 }} />
        <Skeleton variant="text" width={300} height={24} sx={{ bgcolor: "grey.100" }} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" },
          gap: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 4 },
        }}
      >
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "grey.200",
                bgcolor: "#fff",
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{
                  height: { xs: 100, sm: 120, md: 140, lg: 160, xl: 180 },
                  bgcolor: "grey.100",
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Skeleton variant="text" width="70%" height={24} sx={{ bgcolor: "grey.100", mx: "auto" }} />
                <Skeleton variant="text" width="40%" height={16} sx={{ bgcolor: "grey.100", mx: "auto", mt: 1 }} />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export function CatalogPageSkeleton() {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
      <CatalogHeaderSkeleton />
      <Container maxWidth="xl" sx={{ pt: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Skeleton variant="rounded" width={160} height={40} sx={{ bgcolor: "grey.200", borderRadius: 1.5 }} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
            gap: { xs: 2, md: 3, lg: 4 },
          }}
        >
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <CarCardSkeleton key={i} />
            ))}
        </Box>
      </Container>
    </Box>
  );
}

export function CarDetailSkeleton() {
  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        position: "relative",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          bgcolor: "#F8FAFC",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, pt: "80px" }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
        <Skeleton variant="text" width={120} height={40} sx={{ bgcolor: "grey.200", mb: { xs: 2, md: 3, xl: 4 } }} />

        <Box sx={{ display: "flex", gap: { xs: 2, md: 3, lg: 4, xl: 5 }, flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ flex: 1, maxWidth: { md: "60%", xl: "62%" } }}>
            <Skeleton
              variant="rounded"
              sx={{
                width: "100%",
                height: { xs: 220, sm: 320, md: 400, lg: 480, xl: 520 },
                bgcolor: "grey.200",
                borderRadius: { xs: 2, md: 3 },
                "&::after": {
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                  animation: `${shimmer} 1.5s infinite`,
                },
              }}
            />

            <Box sx={{ mt: { xs: 3, md: 4 }, bgcolor: "#fff", borderRadius: { xs: 2, md: 3 }, p: { xs: 2, sm: 3, md: 4 } }}>
              <Skeleton variant="text" width="60%" height={48} sx={{ bgcolor: "grey.100", mb: 1.5 }} />
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <Skeleton variant="rounded" width={80} height={28} sx={{ bgcolor: "grey.100", borderRadius: 2 }} />
                <Skeleton variant="rounded" width={80} height={28} sx={{ bgcolor: "grey.100", borderRadius: 2 }} />
                <Skeleton variant="rounded" width={80} height={28} sx={{ bgcolor: "grey.100", borderRadius: 2 }} />
              </Box>
              <Skeleton variant="text" width="40%" height={28} sx={{ bgcolor: "grey.100", mb: 3 }} />

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }, gap: 2, my: 3 }}>
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Box key={i}>
                      <Skeleton variant="text" width="60%" height={20} sx={{ bgcolor: "grey.100" }} />
                      <Skeleton variant="text" width="80%" height={24} sx={{ bgcolor: "grey.100", mt: 0.5 }} />
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "38%", lg: "36%", xl: "35%" }, flexShrink: 0 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: { xs: 2, md: 3 },
                p: { xs: 2, sm: 3, md: 3, lg: 4, xl: 5 },
                position: { md: "sticky" },
                top: { md: 24 },
              }}
            >
              <Skeleton variant="text" width="50%" height={48} sx={{ bgcolor: "grey.100" }} />
              <Skeleton variant="text" width="80%" height={20} sx={{ bgcolor: "grey.100", mb: 3 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                <Skeleton variant="rounded" height={52} sx={{ bgcolor: "grey.200", borderRadius: 2 }} />
                <Skeleton variant="rounded" height={52} sx={{ bgcolor: "grey.200", borderRadius: 2 }} />
                <Skeleton variant="rounded" height={52} sx={{ bgcolor: "grey.200", borderRadius: 2 }} />
              </Box>

              <Skeleton variant="rounded" height={48} sx={{ bgcolor: "grey.200", borderRadius: 2, mb: 2 }} />

              <Skeleton variant="text" width="100%" height={60} sx={{ bgcolor: "grey.100", borderRadius: 2 }} />
            </Box>
          </Box>
        </Box>
        </Box>
      </Container>
      </Box>
    </Box>
  );
}

export function CatalogHeaderSkeleton() {
  return (
    <Box
      sx={{
        bgcolor: "#0F172A",
        color: "#F4F1EA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo mesh */}
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
          position: "relative",
          px: { xs: "6%", sm: "7%", md: "6%", lg: "8%" },
          pt: { xs: 6, md: 9 },
          pb: { xs: 5, md: 6 },
        }}
      >
        {/* Eyebrow */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5 }}>
          <Skeleton
            variant="rounded"
            width={28}
            height={1}
            sx={{ bgcolor: "rgba(37,99,235,0.3)" }}
          />
          <Skeleton
            variant="text"
            width={120}
            height={14}
            sx={{ bgcolor: "rgba(37,99,235,0.2)" }}
          />
        </Box>

        {/* Title + subtitle */}
        <Box sx={{ width: "100%", textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Skeleton
            variant="text"
            sx={{
              bgcolor: "rgba(255,255,255,0.08)",
              width: { xs: "80%", sm: "70%", md: "60%" },
              height: { xs: 56, sm: 72, md: 90 },
              mx: "auto",
              "&::after": {
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                animation: `${shimmer} 1.5s infinite`,
              },
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              bgcolor: "rgba(255,255,255,0.06)",
              width: { xs: "60%", sm: "50%", md: "40%" },
              height: 20,
              mx: "auto",
              mt: 3,
            }}
          />
        </Box>

        {/* Stats */}
        <Box sx={{ maxWidth: 1536, mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
              gap: { xs: 3, sm: 4 },
              width: "100%",
              mb: { xs: 3, md: 4 },
            }}
          >
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                  <Skeleton
                    variant="circular"
                    width={22}
                    height={22}
                    sx={{ bgcolor: "rgba(37,99,235,0.2)", flexShrink: 0 }}
                  />
                  <Box>
                    <Skeleton variant="text" width={50} height={24} sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
                    <Skeleton variant="text" width={70} height={14} sx={{ bgcolor: "rgba(255,255,255,0.06)" }} />
                  </Box>
                </Box>
              ))}
          </Box>

          {/* Divider */}
          <Box sx={{ height: 1, bgcolor: "rgba(244,241,234,0.12)", mb: { xs: 3, md: 4 } }} />

          {/* Search + filter panel */}
          <Box
            sx={{
              bgcolor: "#16213D",
              border: "1px solid rgba(244,241,234,0.12)",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Skeleton
                  variant="rounded"
                  sx={{
                    flex: 1,
                    maxWidth: 450,
                    height: 40,
                    bgcolor: "rgba(244,241,234,0.06)",
                    borderRadius: 1.5,
                  }}
                />
                <Skeleton
                  variant="rounded"
                  width={110}
                  height={32}
                  sx={{ bgcolor: "rgba(244,241,234,0.06)", borderRadius: 1 }}
                />
              </Box>
            </Box>

            {/* Filter row */}
            <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2, borderTop: "1px solid rgba(244,241,234,0.12)" }}>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton
                      key={i}
                      variant="rounded"
                      sx={{
                        width: { xs: "calc(50% - 8px)", sm: 140, md: 160 },
                        height: 40,
                        bgcolor: "rgba(244,241,234,0.06)",
                        borderRadius: 1.5,
                      }}
                    />
                  ))}
                <Skeleton
                  variant="rounded"
                  sx={{
                    width: { xs: "100%", sm: 200, md: 220 },
                    height: 40,
                    bgcolor: "rgba(244,241,234,0.06)",
                    borderRadius: 1.5,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Marquee skeleton */}
      <Box
        sx={{
          position: "relative",
          borderTop: "1px solid rgba(244,241,234,0.12)",
          py: 2.25,
          display: "flex",
          gap: 4,
          overflow: "hidden",
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Skeleton
              key={i}
              variant="text"
              width={80}
              height={16}
              sx={{ bgcolor: "rgba(255,255,255,0.05)", flexShrink: 0 }}
            />
          ))}
      </Box>
    </Box>
  );
}

export function AbbsiumPageSkeleton() {
  return (
    <Box sx={{ bgcolor: "#0F0C29", minHeight: "100vh", position: "relative" }}>
      {/* Cover area behind navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "86px",
          bgcolor: "#0F0C29",
          zIndex: 1,
        }}
      />

      {/* Skeleton content - matches navbar width minus border-radius */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          pt: "86px",
          width: { xs: "calc(94% - 44px)", sm: "calc(88% - 44px)", md: "calc(68% - 44px)" },
          maxWidth: "calc(1140px - 44px)",
          mx: "auto",
        }}
      >
            {/* Hero title skeleton */}
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Skeleton
                variant="text"
                width="60%"
                height={72}
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  mx: "auto",
                  mb: 3,
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.08), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
              <Skeleton
                variant="text"
                width="45%"
                height={28}
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  mx: "auto",
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
            </Box>

            {/* CTA buttons skeleton */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2.5, mb: { xs: 6, md: 8 } }}>
              <Skeleton
                variant="rounded"
                width={150}
                height={52}
                sx={{
                  bgcolor: "rgba(99,102,241,0.3)",
                  borderRadius: 2,
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
              <Skeleton
                variant="rounded"
                width={130}
                height={52}
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
            </Box>

            {/* Hero image/visual skeleton */}
            <Skeleton
              variant="rounded"
              sx={{
                width: "100%",
                height: { xs: 220, sm: 300, md: 380, lg: 440 },
                bgcolor: "rgba(255,255,255,0.04)",
                borderRadius: 3,
                mb: { xs: 5, md: 8 },
                "&::after": {
                  background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent)",
                  animation: `${shimmer} 1.5s infinite`,
                },
              }}
            />

            {/* Features section skeleton */}
            <Box sx={{ mb: { xs: 5, md: 7 } }}>
              <Skeleton
                variant="text"
                width={200}
                height={40}
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  mb: 2,
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.08), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />
              <Skeleton
                variant="text"
                width="55%"
                height={24}
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  mb: 5,
                  "&::after": {
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), transparent)",
                    animation: `${shimmer} 1.5s infinite`,
                  },
                }}
              />

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: 2.5, md: 3.5 } }}>
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 3.5,
                        borderRadius: 3,
                        border: "1px solid rgba(255,255,255,0.06)",
                        bgcolor: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <Skeleton
                        variant="circular"
                        width={44}
                        height={44}
                        sx={{
                          bgcolor: "rgba(99,102,241,0.2)",
                          mb: 2.5,
                        }}
                      />
                      <Skeleton
                        variant="text"
                        width="75%"
                        height={28}
                        sx={{ bgcolor: "rgba(255,255,255,0.06)", mb: 1.5 }}
                      />
                      <Skeleton
                        variant="text"
                        width="95%"
                        height={18}
                        sx={{ bgcolor: "rgba(255,255,255,0.04)" }}
                      />
                      <Skeleton
                        variant="text"
                        width="65%"
                        height={18}
                        sx={{ bgcolor: "rgba(255,255,255,0.04)" }}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
        </Box>
    </Box>
  );
}

export function StatsSkeleton() {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: { xs: 2, sm: 3, md: 4 },
          maxWidth: 800,
          mx: "auto",
          px: 3,
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Box key={i} sx={{ textAlign: "center" }}>
              <Skeleton variant="text" width={80} height={56} sx={{ bgcolor: "grey.200", mx: "auto", fontSize: "2.5rem" }} />
              <Skeleton variant="text" width={100} height={20} sx={{ bgcolor: "grey.200", mx: "auto", mt: 1 }} />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export function HomeCarsSkeleton({ count = 4 }) {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
          gap: { xs: 2, sm: 2.5, md: 3, lg: 4, xl: 5 },
        }}
      >
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <CarCardSkeleton key={i} />
          ))}
      </Box>
    </Box>
  );
}

import { useState, useEffect, FC } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  CalendarMonth as Calendar,
  Album as Disc,
  People as User,
  Close as X,
  ArrowBackIos as ArrowBack,
  ArrowForwardIos as ArrowForward,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parallaxBackground1 from "./assets/parallax-background.webp";
import parallaxBackground2 from "./assets/parallax-background2.webp";

// Constants for Texts
const APP_NAME = "Grim Records";
const WELCOME_TEXT = "Welcome to Grim Records";
const DISCOVER_MUSIC = "Discover New Music";
const UPCOMING_RELEASES_TITLE = "Upcoming Releases";
const NEW_ARTISTS_LABEL = "New Artists";
const POPULAR_ARTISTS_LABEL = "Popular Artists";

// Placeholder Data
const newArtists = ["Luna Nova", "Neon Pulse", "Astral Echoes"];
const popularArtists = [
  "Cosmic Drift",
  "Synthwave Collective",
  "Nebula Dreams",
];
const upcomingReleases = [
  { artist: "Luna Nova", album: "Midnight Serenade", date: "2024-05-15" },
  { artist: "Neon Pulse", album: "Electric Dreams", date: "2024-06-01" },
  { artist: "Cosmic Drift", album: "Interstellar Journey", date: "2024-06-20" },
];
const upcomingShows = [
  { artist: "Astral Echoes", venue: "Starlight Arena", date: "2024-07-10" },
  { artist: "Synthwave Collective", venue: "Neon Club", date: "2024-07-15" },
  { artist: "Nebula Dreams", venue: "Cosmic Theater", date: "2024-07-22" },
];

const carouselData = [
  {
    title: "New Album Release",
    subtitle: "Luna Nova - Midnight Serenade",
    cta: "Listen Now",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Upcoming Concert",
    subtitle: "Neon Pulse at Starlight Arena",
    cta: "Get Tickets",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Artist Spotlight",
    subtitle: "Featuring Cosmic Drift",
    cta: "Learn More",
    image: "/placeholder.svg?height=600&width=1200",
  },
];

export const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("new");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    fade: true,
    arrows: true, // Enables arrow controls
    nextArrow: <ArrowForward sx={{ color: "white" }} />, // Custom next arrow
    prevArrow: <ArrowBack sx={{ color: "white" }} />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Disable arrows for mobile view
        },
      },
    ],
  };

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Backgrounds for Parallax Effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}>
          <div
            style={{
              backgroundImage: `url(${parallaxBackground1})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              zIndex: -1,
            }}
          />
          <div
            style={{
              backgroundImage: `url(${parallaxBackground2})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              zIndex: -1,
            }}
          />
          <div
            style={{
              backgroundImage: `url(${parallaxBackground1})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              zIndex: -1,
            }}
          />
        </div>

        {/* Sticky Navbar */}
        <AppBar position="sticky" sx={{ background: "rgba(0,0,0,0.8)" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {APP_NAME}
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Artists</Button>
              <Button color="inherit">Releases</Button>
              <Button color="inherit">Shows</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={handleMenuToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuToggle}>
            <IconButton onClick={handleMenuToggle}>
              <X />
            </IconButton>
            <List>
              <ListItem component="a" href="#">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component="a" href="#">
                <ListItemText primary="Artists" />
              </ListItem>
              <ListItem component="a" href="#">
                <ListItemText primary="Releases" />
              </ListItem>
              <ListItem component="a" href="#">
                <ListItemText primary="Shows" />
              </ListItem>
              <ListItem component="a" href="#">
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
        </AppBar>

        {/* Hero Banner Carousel */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Slider {...carouselSettings}>
            {carouselData.map((slide, index) => (
              <Box key={index} sx={{ position: "relative" }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    p: 4,
                  }}>
                  <Typography variant="h2" fontWeight="bold">
                    {slide.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {slide.subtitle}
                  </Typography>
                  <Button variant="contained" color="primary">
                    {slide.cta}
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Featured Artists Section */}
        <Container sx={{ py: 4, px: 2 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4, color: "white" }}>
            {activeTab === "new" ? NEW_ARTISTS_LABEL : POPULAR_ARTISTS_LABEL}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
              padding: 4,
              background: "rgba(255,255,255,0.9)", // Slight transparency for the background
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              borderRadius: "8px",
            }}>
            <Button
              variant={activeTab === "new" ? "contained" : "outlined"}
              onClick={() => setActiveTab("new")}>
              {NEW_ARTISTS_LABEL}
            </Button>
            <Button
              variant={activeTab === "popular" ? "contained" : "outlined"}
              onClick={() => setActiveTab("popular")}>
              {POPULAR_ARTISTS_LABEL}
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
              pt: 4,
            }}>
            {(activeTab === "new" ? newArtists : popularArtists).map(
              (artist, index) => (
                <Card
                  key={index}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 16px)",
                      md: "calc(33.333% - 16px)",
                    },
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}>
                  <CardMedia>
                    <User className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                  </CardMedia>
                  <CardContent>
                    <Typography textAlign="center">{artist}</Typography>
                  </CardContent>
                </Card>
              )
            )}
          </Box>
        </Container>

        {/* Upcoming Releases */}
        <Container sx={{ py: 4, px: 2 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4, color: "white" }}>
            {UPCOMING_RELEASES_TITLE}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
              padding: 4,
              background: "rgba(255,255,255,0.7)", // Slight transparency for the background
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              borderRadius: "8px",
            }}>
            {upcomingReleases.map((release, index) => (
              <Card
                key={index}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    md: "calc(33.333% - 16px)",
                  },
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}>
                <CardMedia>
                  <Disc className="w-10 h-10 mx-auto mb-2 text-purple-600" />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">{release.album}</Typography>
                  <Typography variant="body2">{release.artist}</Typography>
                  <Typography variant="body2">{release.date}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </div>
      {/* Footer */}
      <Box
        sx={{
          py: 4,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          textAlign: "center",
        }}>
        <Typography variant="body2">
          &copy; 2024 {APP_NAME}. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

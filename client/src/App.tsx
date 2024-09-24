// App.tsx
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import grimRecordsBanner from "./assets/grim-records-banner.jpg"; // Adjust the path as needed
import "./App.css"; // Assuming additional styling tweaks here
import { ArtistsPage } from "./ArtistsPage";
import { SubmissionForm } from "./SubmissionForm";

export const App: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${grimRecordsBanner})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}>
      <Typography variant="h1" sx={{ fontSize: "4rem", mb: 4 }}>
        Music Label
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay on the background
          borderRadius: "8px",
          padding: "2rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        }}>
        <ArtistsPage />
        <SubmissionForm />
      </Box>
    </Box>
  );
};

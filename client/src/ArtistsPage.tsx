// ArtistsPage.tsx
import { FC } from "react";
import { Box } from "@mui/material";
import { ArtistCard } from "./ArtistCard";

const artists = [
  {
    name: "Artist One",
    description: "This is a description of Artist One.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Artist Two",
    description: "This is a description of Artist Two.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more artists as needed
];

export const ArtistsPage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        mb: 4,
      }}>
      {artists.map((artist, index) => (
        <ArtistCard
          key={index}
          name={artist.name}
          description={artist.description}
          imageUrl={artist.imageUrl}
        />
      ))}
    </Box>
  );
};

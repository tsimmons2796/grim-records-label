// ArtistCard.tsx
import { FC } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ArtistProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const ArtistCard: FC<ArtistProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
}

export const SubmissionForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "500px",
        mt: 4,
      }}
      onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
        Apply to Be Featured
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: "#fff" }, // Label color
        }}
        InputProps={{
          style: { color: "#fff" }, // Text color
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#b3b3b3", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", // Focused border color
            },
          },
        }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: "#fff" }, // Label color
        }}
        InputProps={{
          style: { color: "#fff" }, // Text color
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#b3b3b3", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", // Focused border color
            },
          },
        }}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: "#fff" }, // Label color
        }}
        InputProps={{
          style: { color: "#fff" }, // Text color
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#b3b3b3", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", // Focused border color
            },
          },
        }}
      />
      <TextField
        label="Phone Number"
        type="tel"
        variant="outlined"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: "#fff" }, // Label color
        }}
        InputProps={{
          style: { color: "#fff" }, // Text color
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#b3b3b3", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", // Focused border color
            },
          },
        }}
      />
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        required
        InputLabelProps={{
          style: { color: "#fff" }, // Label color
        }}
        InputProps={{
          style: { color: "#fff" }, // Text color
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#b3b3b3", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", // Focused border color
            },
          },
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

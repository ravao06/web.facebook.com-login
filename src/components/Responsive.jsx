import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Divider,
  Grid,
} from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
import fbIcon from "../assets/images/favicon.png";
import { grey } from "@mui/material/colors";

const Responsive = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      pt={2}
      bgcolor={"white"}
      height={"100vh"}
      width={"100vw"}
    >
      <Typography variant="caption" color="black" fontFamily={"revert"}>
        Français (France)
      </Typography>
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        sx={{
          //   minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom right, #f0f2f5, #e4e6eb)",
          paddingBottom: 2,
          overflowX: "hidden",
        }}
        // border={'red solid 2px'}
      >
        <Typography variant="h4" sx={{ color: "#1877f2", mb: 2 }}>
          <img
            src={fbIcon}
            alt="Facebook Icon"
            style={{ width: "60px", height: "60px" }}
          />
        </Typography>

        <Box
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: 360,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Numéro mobile ou e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant="outlined"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#1877f2", mb: 1, p: 1.3, borderRadius: 15 }}
            onClick={handleLogin}
          >
            Se connecter
          </Button>

          <Link
            href="#"
            underline="hover"
            color={grey[700]}
            display="block"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Mot de passe oublié ?
          </Link>

          <Divider sx={{ pb: 6 }} />

          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#1877f2",
              borderColor: "#1877f2",
              mb: 1,
              p: 1,
              borderRadius: 15,
            }}
          >
            Créer un compte
          </Button>
        </Box>
        <Typography variant="caption" sx={{ mt: 1, color: "gray" }}>
          © Meta
        </Typography>
        <Grid container justifyContent={"center"}>
          <Typography variant="caption" sx={{ mt: 2, color: "gray" }}>
            <Link href="#" underline="hover" color="inherit">
              À propos
            </Link>{" "}
            •
            <Link href="#" underline="hover" color="inherit" sx={{ ml: 1 }}>
              Aide
            </Link>{" "}
            •
            <Link href="#" underline="hover" color="inherit" sx={{ ml: 1 }}>
              Plus
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Responsive;

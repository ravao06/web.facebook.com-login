import { Box, Link, Typography, Grid } from "@mui/material";

const Footer = () => {
  const languages = [
    "Français (France)",
    "Malagasy",
    "English (US)",
    "Italiano",
    "Español",
    "Deutsch",
    "中文(简体)",
    "Türkçe",
    "Português (Brasil)",
    "العربية",
    "हिन्दी",
  ];

  const links = [
    "S’inscrire",
    "Se connecter",
    "Messenger",
    "Facebook Lite",
    "Vidéo",
    "Lieux",
    "Jeux",
    "Marketplace",
    "Meta Pay",
    "Boutique Meta",
    "Meta Quest",
    "Ray-Ban Meta",
    "Meta AI",
    "Instagram",
    "Threads",
    "Collectes de dons",
    "Services",
    "Centre d’information sur les élections",
    "Politique de confidentialité",
    "Centre de confidentialité",
    "Groupes",
    "À propos",
    "Créer une publicité",
    "Créer une Page",
    "Développeurs",
    "Emplois",
    "Cookies",
    "Choisir sa publicité",
    "Conditions générales",
    "Aide",
  ];

  const linkStyle = {
    marginRight: "10px",
    fontSize: "12px",
    color: "#737373",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <Box
      sx={{ backgroundColor: "#f0f2f5"}}
      height={"2vh"}
      mt={2}
      pt={"10vh"}
    >
      <Grid container justifyContent="left" spacing={1} >
        {languages.map((lang, index) => (
          <Grid item key={index}>
            <Link href="#" sx={linkStyle}>
              {lang}
            </Link>
          </Grid>
        ))}
        <Grid item>
          <Link href="#" sx={{ ...linkStyle, fontWeight: "bold" }}>
            +
          </Link>
        </Grid>
      </Grid>

      <hr style={{ margin: "5px 0", borderColor: "#ddd" }} />

      <Grid container justifyContent="left" spacing={1} my={2}>
        {links.map((link, index) => (
          <Grid item key={index}>
            <Link href="#" sx={linkStyle}>
              {link}
            </Link>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" sx={{ color: "#737373", mt: 1 }} fontWeight={400} fontSize={'small'}>
        Meta © 2025
      </Typography>
    </Box>
  );
};

export default Footer;

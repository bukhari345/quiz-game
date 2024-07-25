import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#1e1e2f",
    color: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#8e24aa",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(to right, #8e24aa, #ff4081)",
    color: "#ffffff",
    '&:hover': {
      background: "linear-gradient(to right, #ff4081, #8e24aa)",
    },
  },
  switchButton: {
    color: "#8e24aa",
    '&:hover': {
      textDecoration: "underline",
    },
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
  },
}));

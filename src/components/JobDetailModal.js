import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
// import Paper from "@mui/material/Paper";
import api from "../data/fetchData";
import { useNavigate, useParams } from "react-router-dom";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "none",
  padding: "10px",
  borderRadius: "5px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24
  // backgroundColor: theme.palette.primary.light,
};

function JobDetailModal() {
  // let location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = React.useState(null);

  React.useEffect(() => {
    const fetch = async () => {
      const newJob = await api.getJob(id);
      setJob(newJob);
    };
    fetch();
  }, [id]);

  const handleClose = () => {
    navigate("/");
    // navigate(location?.state?.backgroundLocation || "/");
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 28 }}
              gutterBottom
              // component="h1"
            >
              {job?.title}
            </Typography>
            <Divider />
            <Typography sx={{ mb: 1.5 }} variant="body2">
              {job?.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              City: {job?.city}
            </Typography>
            <Typography color="text.primary">
              Skill:
              <br />
              {job?.skills.map((skill) => (
                <Chip label={skill} />
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default JobDetailModal;

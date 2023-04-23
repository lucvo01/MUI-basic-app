import * as React from "react";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { useLocation, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light
}));

export default function JobCard({ description, skills, id, title }) {
  const location = useLocation();

  // const navigate = useNavigate();
  // const handleJobDetail = () => {
  //   navigate(`/JobDetail/${id}`, { backgroundLocation: location });
  // };

  return (
    <CardStyle variant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
        <Card sx={{ minWidth: 275 }} id={id}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Divider />
            <Typography variant="h5" component="div">
              {skills.map((skill) => (
                <Chip label={skill} variant="outlined" />
              ))}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              component={Link}
              to={`/JobDetail/${id}`}
              state={{ backgroundLocation: location }}
              onClick={() => console.log("Learn more", location)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </CardStyle>
  );
}

import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import JobDetailModal from "../components/JobDetailModal";
// import RequireAuth from "../auth/RequireAuth";
import { useParams } from "react-router-dom";
import api from "../data/fetchData";

function JobDetail() {
  return (
    <Stack>
      <JobDetailModal />
    </Stack>
  );
}

export default JobDetail;

import * as React from "react";
import { useState, useEffect } from "react";
import SearchAppBar from "../components/SearchAppBar.js";
import JobCard from "../components/JobCard.js";
// import jobs from './data/jobs.json';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import api from "../data/fetchData.js";
import Grid from "@mui/material/Grid";
import {useSearchParams} from "react-router-dom";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page, q);
      setJobs(data.jobs);
      setPageTotal(data.pageTotal);
    };
    fetch();
  }, [page, q]);

  return (
    <div>
      <SearchAppBar />
      <Grid container spacing={3}>
        {jobs?.map((job) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={job.id}>
            <JobCard
              id={job.id}
              title={job.title}
              description={job.description}
              skills={job.skills}
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={pageTotal}
          page={page}
          onChange={(event, value) => {
            setPage(value);
          }}
          sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}
        />
      </Stack>
    </div>
  );
}

export default Home;

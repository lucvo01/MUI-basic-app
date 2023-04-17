import jobs from "./jobs.json";

function getJobs(page) {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const pageTotal = Math.ceil(jobs.length/5);
  return {jobs: jobs.slice(startIndex, endIndex), pageTotal};
}

export default getJobs;

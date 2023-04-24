import jobs from "./jobs.json";

async function getJobs(page, q = null) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;
  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const pageTotal = Math.ceil(jobs.length / 5);

  if(q) {
    let filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.description.includes(q) ||
        job.city.includes(q) ||
        job.skills.some((skill) => skill.includes(q))
    );
    return { jobs: filteredJobs, pagesTotal: 1 };
  } else {
    return { jobs: jobs.slice(startIndex, endIndex), pageTotal };
  }

}

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return jobs.find((job) => job.id == id);
}
const api = { getJobs, getJob };

export default api;

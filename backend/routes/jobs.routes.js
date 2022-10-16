const {Router} = require('express');
const {addJob, searchForJob, getAllJobs} = require('../controllers/jobs.controller')
const router = Router();

router.post('/add_job', addJob);
router.get('/search_for_job/:title', searchForJob);
router.get('/get_all_jobs', getAllJobs);

module.exports = router;
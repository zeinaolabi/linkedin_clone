const {Router} = require('express');
const {addJob, searchForJob, getAllJobs, applyToJob, getJobNotification, appliedToJob} = require('../controllers/jobs.controller')
const router = Router();

router.post('/add_job', addJob);
router.post('/apply', applyToJob);
router.post('/check_if_applied', appliedToJob);
router.get('/search_for_job/:title', searchForJob);
router.get('/get_all_jobs', getAllJobs);
router.get('/get_notifications/:userID', getJobNotification);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
    createBed,
    getAllbedsdetails,
    getBedbyid,
    getBedbyStatus,
    updateBed,
    deleteBedbyId
} = require('../Controllers/bed_controller');

const requireAuth = require('../middleware/Auth/requireauth')

//router.use(requireAuth)

router.post("/add",createBed);
router.get("/",getAllbedsdetails);
router.get("/:id",getBedbyid);
router.get("/status/:status",getBedbyStatus);
router.put("/:id",updateBed);
router.delete("/:id",deleteBedbyId)

module.exports = router;
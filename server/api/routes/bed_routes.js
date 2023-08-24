const express = require("express");
const router = express.Router();

const {
    createBed,
    getAllbedsdetails,
    getBedbyid,
    getBedbyStatus,
    deleteBedbyId
} = require('../Controllers/bed_controller');

router.post("/add",createBed);
router.get("/",getAllbedsdetails);
router.get("/:id",getBedbyid);
router.get("/status/:status",getBedbyStatus);
router.delete("/:id",deleteBedbyId)

module.exports = router;
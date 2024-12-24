const { Signup , Login } = require("../controllers/AuthControllers");
const router = require("express").Router();
const userVerification = require("../middlewares/AuthMiddleware")

router.post("/signup", Signup);





router.post('/login', Login);
router.post('/',userVerification,(req, res) => {
    res.json({ status: true, message: "User is verified" });
  });
module.exports = router;
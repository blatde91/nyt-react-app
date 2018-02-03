const router = require("express").Router();
const booksController = require("../../controllers/articleController");

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/:id")
  .get(articleController.findById)
  .delete(articleController.remove);

module.exports = router;
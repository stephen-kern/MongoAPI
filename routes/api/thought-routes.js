const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// get all or create /api/thoughts
router.route("/").get(getAllThoughts).post(addThought);

// Get thought by id or update thought or delete a thought
router.route("/:id").get(getThoughtById).put(updateThought).delete(removeThought);

// post a reaction
router.route("/:thoughtId/reactions").post(addReaction);

// delete a reaction 
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

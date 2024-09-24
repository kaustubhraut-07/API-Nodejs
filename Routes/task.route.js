const { addTask,getTasks , updateTask} = require("../Controller/Tasks.controller");

const router = require("express").Router();

router.post("/addtask", addTask);
router.get("/getalltasks" , getTasks);
router.patch("/updatetask/:taskId", updateTask);

module.exports = router;
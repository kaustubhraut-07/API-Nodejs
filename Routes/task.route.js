const { addTask,getTasks , updateTask, deletetask} = require("../Controller/Tasks.controller");

const router = require("express").Router();

router.post("/addtask", addTask);
router.get("/getalltasks" , getTasks);
router.patch("/updatetask/:taskId", updateTask);
router.delete("/deletetask/:taskId", deletetask);

module.exports = router;
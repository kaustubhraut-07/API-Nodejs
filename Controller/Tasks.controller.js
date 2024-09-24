const Tasks = require("../Models/Tasks");

const getTasks = async (req, res) => {
    try{
        const tasks = await Tasks.find();
        return res.status(200).json({ message: "tasks fetched", data: tasks });
    }catch(error){
   return     res.status(500).json({ message: error.message });
    }
};

const addTask = async (req, res) => {
    try {
        const { userId, name, description, completed, date } = req.body; 

       
        const newTask = new Tasks({
            name,
            description,
            completed,
            date,
            user: userId  
        });

        await newTask.save();
        return res.status(200).json({ message: "Task added successfully", data: newTask });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const updateTask = async (req, res) => {
    try {
        const { name, description, completed, date } = req.body;
        const { taskId } = req.params;
        const updatedTask = await Tasks.findByIdAndUpdate(taskId, {
            name,
            description,
            completed,
            date
        }, { new: true });
        return res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = { getTasks, addTask , updateTask }
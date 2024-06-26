import { createTask, updateTask } from '../validation/to-do-validation.js';

//Creating a validator middleware fro routes

export const safeCreateTask = (req, res, next)=>{
    const payload= createTask.safeParse(req.body);
    if (!payload.success){
        res.status(401).json({
            msg:"Wrong Input"
        });   
    }
    next();
};

export const safeUpdateTask = (req, res, next)=>{
    const id = req.body.id;
    const payload= updateTask.safeParse(id);
    if (!payload.success){
        res.status(401).json({
            msg:"Wrong Input"
        });   
    }
    next();
};


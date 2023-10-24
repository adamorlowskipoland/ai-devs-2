import { TaskAutomation } from "./service/task_automation.js";

const taskService = new TaskAutomation("hello-world");

console.log("running", taskService);

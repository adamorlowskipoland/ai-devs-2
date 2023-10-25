import { TaskService } from "./service/task-service.js";
import { TaskAutomation } from "./task-automation.js";

const taskAutomation = new TaskAutomation(new TaskService("helloapi"));

console.log("running");
console.log("calling");
taskAutomation.solveTask("helloapi").then((res) => {
  console.log('%c Line: finished, msg: : ', 'color: skyblue', res);
});

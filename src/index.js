import { TaskAutomation } from "./task-automation.js";

const taskAutomation = new TaskAutomation("helloapi");

console.log("running");
console.log("calling");
taskAutomation.solveTask().then((res) => {
  console.log('%c Line: finished, msg: : ', 'color: skyblue', res);
});

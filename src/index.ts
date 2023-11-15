import { TaskAutomation } from "./task-automation.js";

// const taskAutomation = new TaskAutomation("helloapi");
const moderationTaskAutomation = new TaskAutomation("moderation");

console.log("running");
console.log("calling");
moderationTaskAutomation.solveTask().then((res) => {
  console.log('%c Line: finished, msg: : ', 'color: skyblue', res);
});

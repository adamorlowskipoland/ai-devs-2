import { taskNameToHandlerMap } from "./helpers/task-handlers.js";

export class TaskAutomation {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async solveTask(taskName) {
        await this.taskService.getTaskToken(taskName);
        const task = await this.taskService.getTask();
        const answer = taskNameToHandlerMap[taskName](task);
        console.log('%c Line: answer, msg: : ', 'color: skyblue', answer);
        return await this.taskService.answerTask(answer);
    }
}
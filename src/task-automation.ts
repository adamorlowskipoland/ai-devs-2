import { taskNameToHandlerMap } from "./helpers/task-handlers.js";
import { TaskService } from "./service/task-service.js";

export class TaskAutomation extends TaskService {
  constructor(taskName: string) {
    super(taskName);
  }

  async solveTask(taskName = this.taskName) {
    await this.getTaskToken(taskName);
    const task = await this.getTask();
    const answer = taskNameToHandlerMap[taskName](task);
    return await this.answerTask(answer);
  }
}
import { tasks } from "../adapters/databaseAdapter.js";

export const getTasks = (date) => {
  return tasks[date];
};

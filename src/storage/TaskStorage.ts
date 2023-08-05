import { resolve } from 'path';

import { readJson, writeJson } from 'fs-extra';

import { Task } from '@/domain-like/task';

export class TaskStorage {
  private static readonly PATH = resolve(
    process.cwd(),
    'src',
    'storage',
    'tasks.json',
  );

  static async find() {
    return (await readJson(this.PATH)) as Task[];
  }

  static async findOne(id: number) {
    return (await this.find()).find((task) => task.id === id) as Task;
  }

  static async update(task: Task) {
    const _tasks = await this.find();
    const tasks = _tasks.map((_task) => (_task.id === task.id ? task : _task));
    await writeJson(this.PATH, tasks);
  }
}

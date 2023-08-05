import type { NextApiRequest, NextApiResponse } from 'next';

import { TaskStorage } from '@/storage/TaskStorage';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const tasks = await TaskStorage.find();
  res.status(200).json({ tasks });
}

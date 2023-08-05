import type { NextApiRequest, NextApiResponse } from 'next';

import { TaskStorage } from '@/storage/TaskStorage';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const task = await TaskStorage.findOne(Number(req.query.id));
    res.status(200).json({ task });
  } else if (req.method === 'PUT') {
    await TaskStorage.update(req.body.task);
    res.status(200).send('更新完了');
  }
}

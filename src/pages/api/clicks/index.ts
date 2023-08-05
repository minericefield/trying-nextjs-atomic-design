import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * ストレージ化せずに適当にメモリーで
 */
const clicks: { [key: string]: number } = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  clicks[req.body.key] = clicks[req.body.key] ? clicks[req.body.key] + 1 : 1;
  /**
   * ログだけ出しとく
   */
  console.log('要素別クリック数: ', clicks);
  res.status(200).send('クリック数集計完了');
}

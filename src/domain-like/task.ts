/**
 * ドメインっぽいけどドメインではないなにか
 */
export interface Task {
  id: number;
  title: string;
  body: string;
  image: string;
  isDone: boolean;
}

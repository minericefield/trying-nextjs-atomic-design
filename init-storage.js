const path = require('path')

const fs = require('fs-extra')

const tasks = [
  {
    id: 1,
    title: 'MySQL をインストールする',
    body: 'body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1body1',
    image: '/mysql.png',
    isDone: true,
  },
  {
    id: 2,
    title: 'AWS CLI をインストールする',
    body: 'body2',
    image: '/aws.png',
    isDone: false,
  },
  {
    id: 3,
    title: 'VSCode をインストールする VSCode をインストールする',
    body: 'body3',
    image: '/vscode.png',
    isDone: false,
  },
];

fs.writeJson(path.resolve(__dirname, 'src/storage/tasks.json'), tasks)

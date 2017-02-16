import { Command } from './../classes/command';
import { Project } from './../classes/project';
import { Todo } from './../classes/todo';

export let projects: Project[] = [
  new Project(0, 'ToolBot', '/home',
    'Set of tools for help developers to manage, update, upgrade their projects and find help.', undefined, true, [], [
      new Todo(new Date().getTime(), 'Lalalala', new Date()),
      new Todo(new Date().getTime(), 'Otro todo', new Date()),
      new Todo(new Date().getTime(), 'Todo', new Date(), 'Mucho que hacer', true),
    ], [
      new Command('test', 'ng testlint'),
      new Command('deploy', 'ng deploy')
    ]),
  new Project(1, 'FlexboxLayout', '/home', 'Super flexbox layout', undefined, false, [], [
    new Todo(new Date().getTime(), 'Terminar layout', new Date()),
    new Todo(new Date().getTime(), 'Cambiar col names', new Date()),
  ], [
      new Command('start', 'npm start'),
      new Command('install', 'npm install')
    ]),
  new Project(2, 'Angular 2', '/home', 'Hoolis', undefined, true, [], [
    new Todo(new Date().getTime(), 'Terminar libro', new Date()),
    new Todo(new Date().getTime(), 'Escribir plunkers', new Date()),
  ]),
  new Project(3, 'Vivatronica', '/home', 'Hoolis', undefined, true, [], [
    new Todo(new Date().getTime(), 'Organizar todo', new Date()),
  ], [
    new Command('test', 'npm test'),
  ])
];

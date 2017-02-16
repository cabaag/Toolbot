import { Package } from './../classes/package';

export let packages: [Package] = [
  new Package(new Date().getTime(), 'Debugger', 0),
  new Package(new Date().getTime(), 'Linter', 0),
  new Package(new Date().getTime(), 'Chat', 0),
  new Package(new Date().getTime(), 'Todo extend', 0),
]
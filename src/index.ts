import { MethodInterface } from './model';
import { info } from './implementation/info';
import { turn } from './implementation/turn';
import { msg } from './implementation/msg';

const implementation: MethodInterface = {
  info,
  turn,
  msg,
};

/*
 * This (hack?) makes the implementation to be importable as any regular node file
 * when bundling the code with webpack
 */
__non_webpack_module__.exports = implementation;

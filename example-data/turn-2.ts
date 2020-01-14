import { TurnInfo } from '../src/model';

/*
 * Example of the data sent by the server when calling the `turn` method
 */
const info: TurnInfo = {
  player: {
    maxHp: 100,
    hp: 100,
    viewRadius: 3,
    abnormalState: [],
    inventory: [
      {
        type: 'SMALL_HEALTH_PACK',
        id: 1805538579344845,
      },
    ],
  },
  view: {
    map: [
      {
        data: 'WALL',
        x: -3,
        y: -3,
      },
      {
        data: 'WALL',
        x: -3,
        y: -2,
      },
      {
        data: 'WALL',
        x: -3,
        y: -1,
      },
      {
        data: 'WALL',
        x: -3,
        y: 0,
      },
      {
        data: 'WALL',
        x: -3,
        y: 1,
      },
      {
        data: 'WALL',
        x: -3,
        y: 2,
      },
      {
        data: 'WALL',
        x: -3,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: -3,
      },
      {
        data: 'WALL',
        x: -2,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: 1,
      },
      {
        data: 'WALL',
        x: -2,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: -3,
      },
      {
        data: 'WALL',
        x: -1,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: 1,
      },
      {
        data: 'WALL',
        x: -1,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 1,
      },
      {
        data: 'WALL',
        x: 0,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: -3,
      },
      {
        data: 'WALL',
        x: 1,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 1,
      },
      {
        data: 'WALL',
        x: 1,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: -3,
      },
      {
        data: 'WALL',
        x: 2,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 1,
      },
      {
        data: 'WALL',
        x: 2,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: -3,
      },
      {
        data: 'WALL',
        x: 3,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: 1,
      },
      {
        data: 'WALL',
        x: 3,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: 3,
      },
    ],
    objects: [
      {
        data: {
          type: 'SMALL_HEALTH_PACK',
          id: 4348748477460897,
        },
        x: -2,
        y: 3,
      },
      {
        data: {
          id: 6539015199322537,
          type: 'CLOSED_DOOR',
        },
        x: 0,
        y: -2,
      },
      {
        data: {
          type: 'TREASURE',
          id: 101804862873787,
        },
        x: 0,
        y: -1,
      },
      {
        data: {
          type: 'BIG_HEALTH_PACK',
          id: 4446827014475277,
        },
        x: 0,
        y: 1,
      },
    ],
    entities: [],
  },
};

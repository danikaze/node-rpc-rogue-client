import { TurnInfo } from '../src/model';

/*
 * Example of the data sent by the server when calling the `turn` method
 */
const info: TurnInfo = {
  player: {
    maxHp: 100,
    hp: 95,
    viewRadius: 3,
    abnormalState: ['POISON'],
    inventory: [
      {
        type: 'SMALL_HEALTH_PACK',
        id: 2841590355548707,
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
        data: 'EMPTY',
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
        data: 'EMPTY',
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
        data: 'EMPTY',
        x: -2,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: 3,
      },
      {
        data: 'WALL',
        x: -1,
        y: -3,
      },
      {
        data: 'EMPTY',
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
        data: 'EMPTY',
        x: -1,
        y: 2,
      },
      {
        data: 'WALL',
        x: -1,
        y: 3,
      },
      {
        data: 'WALL',
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
        data: 'EMPTY',
        x: 0,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 3,
      },
      {
        data: 'WALL',
        x: 1,
        y: -3,
      },
      {
        data: 'EMPTY',
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
        data: 'WALL',
        x: 2,
        y: -3,
      },
      {
        data: 'EMPTY',
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
        data: 'EMPTY',
        x: 2,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 3,
      },
      {
        data: 'WALL',
        x: 3,
        y: -3,
      },
      {
        data: 'EMPTY',
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
        data: 'WALL',
        x: 3,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: 2,
      },
      {
        data: 'WALL',
        x: 3,
        y: 3,
      },
    ],
    objects: [
      {
        data: {
          id: 7081754619799619,
          type: 'CLOSED_DOOR',
        },
        x: -3,
        y: -1,
      },
      {
        data: {
          type: 'TREASURE',
          id: 8628814592225483,
        },
        x: -2,
        y: -2,
      },
      {
        data: {
          type: 'TREASURE',
          id: 1247062846595237,
        },
        x: -2,
        y: 2,
      },
      {
        data: {
          type: 'TREASURE',
          id: 7662358352040683,
        },
        x: 2,
        y: 2,
      },
    ],
    entities: [],
  },
};

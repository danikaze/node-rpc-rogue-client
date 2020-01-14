import { TurnInfo } from '../src/model';

/*
 * Example of the data sent by the server when calling the `turn` method
 *
 * Since the player has a `LIGHT` in its inventory the vision radius is bigger,
 * so there's more available information in the `view` field
 */
const info: TurnInfo = {
  player: {
    maxHp: 100,
    hp: 100,
    viewRadius: 6,
    abnormalState: [],
    inventory: [
      {
        type: 'SMALL_HEALTH_PACK',
        id: 3619405360024307,
      },
      {
        id: 3049104869318629,
        type: 'LIGHT',
      },
    ],
  },
  view: {
    map: [
      {
        data: 'EMPTY',
        x: -6,
        y: -6,
      },
      {
        data: 'WALL',
        x: -6,
        y: -5,
      },
      {
        data: 'WALL',
        x: -6,
        y: -4,
      },
      {
        data: 'WALL',
        x: -6,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: -6,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -4,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 0,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 2,
      },
      {
        data: 'WALL',
        x: -5,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: -5,
        y: 6,
      },
      {
        data: 'WALL',
        x: -4,
        y: -6,
      },
      {
        data: 'WALL',
        x: -4,
        y: -5,
      },
      {
        data: 'WALL',
        x: -4,
        y: -4,
      },
      {
        data: 'WALL',
        x: -4,
        y: -3,
      },
      {
        data: 'WALL',
        x: -4,
        y: -2,
      },
      {
        data: 'WALL',
        x: -4,
        y: -1,
      },
      {
        data: 'WALL',
        x: -4,
        y: 0,
      },
      {
        data: 'WALL',
        x: -4,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: -4,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -4,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -4,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: -4,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: -4,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: -4,
      },
      {
        data: 'WALL',
        x: -3,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 0,
      },
      {
        data: 'WALL',
        x: -3,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 2,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: -3,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: -4,
      },
      {
        data: 'WALL',
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
        data: 'WALL',
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
        data: 'EMPTY',
        x: -2,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: -2,
        y: 5,
      },
      {
        data: 'WALL',
        x: -2,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: -4,
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
        data: 'WALL',
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
        data: 'EMPTY',
        x: -1,
        y: 4,
      },
      {
        data: 'WALL',
        x: -1,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: -1,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: -4,
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
        data: 'WALL',
        x: 0,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 2,
      },
      {
        data: 'WALL',
        x: 0,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 4,
      },
      {
        data: 'WALL',
        x: 0,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 0,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: -4,
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
        data: 'WALL',
        x: 1,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 2,
      },
      {
        data: 'WALL',
        x: 1,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 4,
      },
      {
        data: 'WALL',
        x: 1,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 1,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: -4,
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
        data: 'WALL',
        x: 2,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 2,
      },
      {
        data: 'WALL',
        x: 2,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 4,
      },
      {
        data: 'WALL',
        x: 2,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 2,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: -4,
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
        data: 'EMPTY',
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
      {
        data: 'EMPTY',
        x: 3,
        y: 4,
      },
      {
        data: 'WALL',
        x: 3,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 3,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: -4,
      },
      {
        data: 'WALL',
        x: 4,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: 0,
      },
      {
        data: 'WALL',
        x: 4,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: 2,
      },
      {
        data: 'WALL',
        x: 4,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: 4,
      },
      {
        data: 'WALL',
        x: 4,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 4,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: -4,
      },
      {
        data: 'WALL',
        x: 5,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: 0,
      },
      {
        data: 'WALL',
        x: 5,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: 2,
      },
      {
        data: 'WALL',
        x: 5,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: 5,
        y: 5,
      },
      {
        data: 'WALL',
        x: 5,
        y: 6,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: -6,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: -5,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: -4,
      },
      {
        data: 'WALL',
        x: 6,
        y: -3,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: -2,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: -1,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: 0,
      },
      {
        data: 'WALL',
        x: 6,
        y: 1,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: 2,
      },
      {
        data: 'WALL',
        x: 6,
        y: 3,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: 4,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: 5,
      },
      {
        data: 'EMPTY',
        x: 6,
        y: 6,
      },
    ],
    objects: [
      {
        data: {
          id: 2408556350680111,
          type: 'CLOSED_DOOR',
        },
        x: -6,
        y: -6,
      },
      {
        data: {
          type: 'TREASURE',
          id: 6740146883939397,
        },
        x: -5,
        y: -2,
      },
      {
        data: {
          type: 'SMALL_HEALTH_PACK',
          id: 4348748477460897,
        },
        x: -3,
        y: -2,
      },
      {
        data: {
          type: 'TREASURE',
          id: 101804862873787,
        },
        x: -1,
        y: -6,
      },
      {
        data: {
          type: 'BIG_HEALTH_PACK',
          id: 4446827014475277,
        },
        x: -1,
        y: -4,
      },
      {
        data: {
          type: 'TREASURE',
          id: 2157348966825807,
        },
        x: -1,
        y: 6,
      },
      {
        data: {
          id: 1550715723453375,
          type: 'OPEN_DOOR',
        },
        x: 3,
        y: 1,
      },
      {
        data: {
          type: 'KNIFE',
          id: 5196298302213675,
        },
        x: 3,
        y: 2,
      },
    ],
    entities: [],
  },
};

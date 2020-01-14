import { TurnInfo, PlayerAction } from '../model';

/**
 * Each turn the client will receive information about its player's state and the environment
 * Then, based on this information, the client should return an action to perform
 *
 * @param info Available information to the player
 */
export function turn(info: TurnInfo): PlayerAction {
  return { type: 'PASS' };
}

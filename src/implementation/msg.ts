import { ActionResultError } from '../model';

/**
 * After each action is sent, the server could provide some feedback
 *
 * @param text Short text in natural language
 * @param error If provided, the action for that turn failed and this is the reason
 */
export function msg(text: string, error?: ActionResultError): null {
  return null;
}

import { ClientInfo } from '../model';

/**
 * This method will be requested by the server before the game starts
 * It's just a way to get information from each client to identify them
 */
export function info(): ClientInfo {
  return {
    name: 'Client Bootstrap',
  };
}

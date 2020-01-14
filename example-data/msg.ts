/*
 * Examples of the data sent by the server when calling the `msg` method
 *
 * Since the `msg` method takes 2 parameters, the data here is defined as an array,
 * so the method would be called as:
 *   msg(...data)
 * or what is the same:
 *   msg(data[0], data[1])
 */

// After sending the correct `ActionOpenDoor`
const msgExample1 = ['You opened the door'];
// After sending the correct `ActionMove` but moving into tile with a `TRAP` object
const msgExample2 = ['You stepped into a trap. You are poisoned!'];
// After sending an unknown action type
const msgExample3 = ['', 'INVALID_ACTION'];
// After sending an invalid objectId in an `ActionUseObject`
const msgExample4 = ['', 'INVALID_OBJECT_ID'];
// After trying to open a `LOCKED_DOOR` without having a `KEY`
const msgExample5 = ['The door is locked. You need a key.', 'DOOR_LOCKED'];

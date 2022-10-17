import { delegateInterface, eventInterface } from "../interfaces";

export const sortDelegateObjectsAlphabetically = (
  a: delegateInterface,
  b: delegateInterface
) => {
  const nameA = a.firstName.toUpperCase();
  const nameB = b.firstName.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const sortEventByStartTime = (a: eventInterface, b: eventInterface) => {
  const startTimeA = a.startTime.toUpperCase();
  const startTimeB = b.startTime.toUpperCase();
  if (startTimeA < startTimeB) {
    return -1;
  }
  if (startTimeA > startTimeB) {
    return 1;
  }
  return 0;
};

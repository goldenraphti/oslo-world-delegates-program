import { delegateInterface } from "../interfaces";

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

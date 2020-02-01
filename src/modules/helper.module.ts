/* Type */
import { TJsonObject } from '../types/general.type';

const transformNavJSON = (orgJSON: TJsonObject[]): TJsonObject[] => {
  const finalJSON = [];
  const sortedJSON = orgJSON.sort((a: TJsonObject, b: TJsonObject) => {
    const parentA = a.parent === null ? -1 : a.parent;
    const parentB = b.parent === null ? -1 : b.parent;
    return parentA - parentB;
  });
  const jsonLength = sortedJSON.length - 1;

  // looping the array in reverse
  for (let loop = jsonLength; loop > -1; loop--) {
    const currentLoop = sortedJSON[loop];

    // going through each looped element to see if it should be a child
    for (let loop2 = 0; loop2 < jsonLength; loop2++) {
      const currentJSON = sortedJSON[loop2];
      if (currentLoop.parent === currentJSON.id) {
        if (!currentJSON.child) {
          currentJSON.child = [];
        }
        currentJSON.child.push(currentLoop);
      }
    }

    // push root contents to array
    if (currentLoop.parent === null) {
      finalJSON.push(currentLoop);
    }
  }

  return finalJSON.sort((a: TJsonObject, b: TJsonObject) => a.id - b.id);
};

export {
  transformNavJSON,
};

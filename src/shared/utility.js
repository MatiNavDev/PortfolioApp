/**
 * update the param object with the param properties
 * @param {*} object
 * @param {*} propertiesToUpdate
 */
const updateObject = (object, propertiesToUpdate) => {
  return {
    ...object,
    ...propertiesToUpdate
  };
};

export { updateObject };

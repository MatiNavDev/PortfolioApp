/**
 * update the param object with the param properties
 * @param {*} object
 * @param {*} propertiesToUpdate
 */
const updateObject = (object, propertiesToUpdate) => ({
  ...object,
  ...propertiesToUpdate
});

/**
 * Actualiza el estado de loading del state
 * @param {Object} state
 * @param {Boolean} loading
 */
const setLoading = (state, loading) => updateObject(state, { loading });

export { updateObject, setLoading };

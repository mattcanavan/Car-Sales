//1. action types
//2. action creators
//3. action objects


// action creator
export const addFeature = (newFeature) => {
    return { type: 'ADD_FEATURE', payload: newFeature}
}

export const removeFeature = (feature) => {
    return { type: 'REMOVE_FEATURE', payload: feature}
}
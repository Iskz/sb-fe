export const add = (state) => ({
    ...state,
    count: state.count + 1,
});

export const remove = (state) => ({
    ...state,
    count: state.count - 1,
});

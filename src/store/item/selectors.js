export const selectAllItems = (state) => state.item.allItems;

export const selectNeeded = (state) =>
  state.item.allItems.filter((item) => {
    return item.fulfilled === false;
  });

export const selectFulfilled = (state) =>
  state.item.allItems.filter((item) => {
    return item.fulfilled === true;
  });

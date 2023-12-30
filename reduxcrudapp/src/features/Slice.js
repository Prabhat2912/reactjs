import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  datas: [
    {
      id: "1",
      text: "hello",
    },
  ],
};

export const dataSlice = createSlice({
  name: "crudData",
  initialState,
  reducers: {
    addData: (state, action) => {
      const data = {
        id: nanoid(),
        text: action.payload,
      };

      state.datas.push(data);
    },
    updateData: (state, action) => {
      const { id, newText } = action.payload;
      if (state.datas.id === id) {
        state.datas.text = newText;
      }
    },
    deleteData: (state, action) => {
      state.datas = state.datas.filter((data) => data.id !== action.payload);
    },
    getData: (state, action) => {
      const dataItem = state.datas.find((data) => data.id === action.payload);

      if (dataItem) {
        return dataItem.text;
      }
      return null;
    },
  },
});

export const { addData, updateData, deleteData, getData } = dataSlice.actions;
export default dataSlice.reducer;

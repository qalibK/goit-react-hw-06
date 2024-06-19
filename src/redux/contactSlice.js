import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number, id } = action.payload;
      state.contacts.push({ name, number, id });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;

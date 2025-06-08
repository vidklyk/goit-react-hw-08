import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(fetchContacts.fulfilled, (s, { payload }) => {
        s.isLoading = false;
        s.items = payload;
      })
      .addCase(fetchContacts.rejected, (s, { payload }) => {
        s.isLoading = false;
        s.error = payload;
      })
      .addCase(addContact.fulfilled, (s, { payload }) => {
        s.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (s, { payload }) => {
        s.items = s.items.filter((c) => c.id !== payload);
      })
      .addCase(logout.fulfilled, (s) => {
        s.items = [];
        s.isLoading = false;
        s.error = null;
      }),
});

export default contactsSlice.reducer;

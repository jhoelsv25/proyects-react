import { createSlice } from "@reduxjs/toolkit";
const DEFAULT_STATE = [
  {
    id: "1",
    name: "Lena Mayer",
    email: "lena@gmail.com",
    github: "lena",
  },
  {
    id: "2",
    name: "Max Smith",
    email: "max@gmail.com",
    github: "max",
  },
  {
    id: "3",
    name: "Anna Stone",
    email: "Garmin@gmail.com",
    github: "anna",
  },
  {
    id: "5",
    name: "Truls Cumbersome",
    email: "Running@gmail.com",
    github: "truls",
  },
  {
    id: "6",
    name: "Peter Pikser",
    email: "Rolex@gmail.com",
    github: "petter",
  },
  {
    id: "7",
    name: "Phlipp Forest",
    email: "On Clouds@gmail.com",
    github: "philip",
  },
  {
    id: "8",
    name: "Mara Pacemaker",
    email: "Ortovox@gmail.com",
    github: "mara",
  },
  {
    id: "9",
    name: "Sev Major",
    email: "Oakley@gmail.com",
    github: "major",
  },
];

const initialState = (() => {
  const persistedState = localStorage.getItem("users");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    addNewUser: (state, action) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
  },
});

export default userSlice.reducer;

export const { deleteUserById, addNewUser } = userSlice.actions;

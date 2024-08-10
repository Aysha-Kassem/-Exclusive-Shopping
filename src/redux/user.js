import { createSlice } from "@reduxjs/toolkit";

const name = "user";

const initialState = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  phone: localStorage.getItem('phone'),
  password: localStorage.getItem('password'),
  loggedin: false,
  openuser: false,
  openlist: false,
  shoppingCart: null,
  likedProduct: null,
  products: null,
};

const reducers = {
  setshoppingCart: (state, {number}) => {
    state.shoppingCart = number;
  },
  setLikedProduct: (state, {number}) => {
    state.likedProduct = number;
  },
  fetchProducts: (state, {payload}) => {
    state.products = payload;
  },
  login: (state) => {
    state.loggedin = true;
  },
  logout: (state) => {
    state.name = null;
    state.email = null;
    state.phone = null;
    state.password = null;
    state.loggedin = false;
  },
  setuser: (state) => {
    state.openuser =!state.openuser;
    state.openlist = false;
  },
  setlist: (state) => {
    state.openuser = false;
    state.openlist =!state.openlist;
  }

};

export const listSlice = createSlice({
  name,
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const { siginUp, login, logout, setshoppingCart, setLikedProduct, fetchProducts ,setuser ,setlist } = listSlice.actions;

export default listSlice.reducer;

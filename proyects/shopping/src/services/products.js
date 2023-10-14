import axios from "axios";
import { environment } from "../environments/environment";

const apiUrl = environment.apiUrl;
export const getProducts = async () => {
  try {
    const res = await axios.get(`${apiUrl}/products`);
    return res.data;
  } catch (err) {
    throw new Error("Error get all products ");
  }
};
/* export const getProductCategory = () => {
  try {
    const res = axios.get(`${apiUrl}/products/categories`);

    return res.data;
  } catch (error) {
    throw new Error("Error get all categories");
  }
}; */

export const getCategories = async () => {
  try {
    const res = await axios.get(`${apiUrl}/products/categories`);
    return res.data;
  } catch (err) {
    throw new Error("Error get products for categories");
  }
};
export const searchProducts = async ({ search }) => {
  try {
    const res = await axios.get(`${apiUrl}/products/search?q=${search}`);
    return res.data;
  } catch (error) {
    throw new Error("Error search products");
  }
};

export const getProductById = async ({ id }) => {
  try {
    const res = await axios.get(`${apiUrl}/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Error get product by id");
  }
};

export const skipLimitProduct = async ({ skip, limit }) => {
  try {
    const res = await axios.delete(`${apiUrl}/products?${limit}&${skip}`);
    return res.data;
  } catch (error) {
    throw new Error("Error skip limit products");
  }
};

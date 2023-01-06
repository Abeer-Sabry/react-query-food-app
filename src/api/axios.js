import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: {
    "Content-Type": "application/json",
  },
});
// export const axiosInstance = axios.create({
//   baseURL: "https://api.spoonacular.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const axiosInstance = axios.create({
//   baseURL: "https://api.api-ninjas.com/v1",
//   headers: {
//     "X-Api-Key": "M416dtU9xL8AuW70Gv/wYQ==Nqi8SIuVqHBchMhN",
//   },
// });

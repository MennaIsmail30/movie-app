import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "https://api.themoviedb.org/3/movie/top_rated?",
//     params: {
//         api_key: "0e98660d7c43c484ed7f42c56d60d48e",
//     },
// });

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         console.log(config);
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;

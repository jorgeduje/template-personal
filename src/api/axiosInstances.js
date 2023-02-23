import axios from "axios";

// Puedes configurar una instancia de axios aqui

let config = {
    baseURL: '', // Aca puedes adaptar tu url base para hacer peticiones HTTP
    headers: {
        "Content-Type": "application/json",
        // 'Authorization' : `` //where applicable
    }
};

let axiosInstance = axios.create(config);
export default axiosInstance
import apiRequest from "../axios-instance/main";

apiRequest.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);


apiRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
   
      const status = error.response.status;
      const data = error.response.data;

      console.error(`Response error: Status ${status}`, data);

      switch (status) {
        case 400:
          alert("Bad request.");
          break;
        case 401:
          alert("You are not authorized. Please log in.");
          break;
        case 403:
          alert("Access forbidden.");
          break;
        case 404:
          alert("Resource not found.");
          break;
        case 500:
          alert("Server error occurred. Please try again later.");
          break;
        default:
          alert(data.message || "An unknown error occurred.");
      }
    } else if (error.request) {
  
      console.error("No response received:", error.request);
      alert("No response from server. Please check your internet connection.");

    } else {
        
      console.error("Axios error:", error.message);
      alert("An error occurred while sending the request.");

    }

    return Promise.reject(error);
  }
);

export default apiRequest;
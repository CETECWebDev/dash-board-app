import apiRequestProxy from "../axios-instance/proxy";
import i18n from "@/i18n";

apiRequestProxy.interceptors.request.use(
  (config) => {
    console.log("📤 Request sent from proxy to:", config.url);
    console.log("Request:", config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);



apiRequestProxy.interceptors.response.use(
  (response) => response,
  (error) => {
    const customMessages = {
      400: i18n.t('400'),
      401: i18n.t('401'),
      403: i18n.t('403'),
      404: i18n.t('404'),
      500: i18n.t('500'),
    };

    if (error.response) {
      const status = error.response.status;

      const customMessage = customMessages[status];

      error.customMessage = customMessage 
      return Promise.reject(error);
    } else {
      error.customMessage = 'اتصال به سرور ممکن نیست. لطفاً اینترنتت رو بررسی کن. 📡';
      return Promise.reject(error);
    }
  }
);


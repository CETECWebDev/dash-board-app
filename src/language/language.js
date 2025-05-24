const languagesText = {
  sidebar: {
    dashboard: { en: "Dashboard", fa: "داشبورد" },
    devices: { en: "Devices", fa: "دستگاه ها" },
  },

  pagination: {
    previous: { en: "← Previous", fa: " قبلی ←" },
    next: { en: "Next", fa: "بعدی" },
  },

  devicespage: {
    adddevice: { en: "+ Add new device", fa: " افزودن دستگاه جدید +" },
    settings: { en: "Change Settings", fa: "تغییر تنظیمات" },
  },
  employeespage: {
    adduser: { en: "+ Add User", fa: "افزودن کاربر + " },
  },
};

const translate = (dir, path) => {
  const lang = dir === "rtl" ? "fa" : "en";
  const keys = path.split(".");
  let value = languagesText;

  for (let key of keys) {
    value = value?.[key];
    if (!value) return path;
  }

  return value[lang] || path;
};

export { translate, languagesText };

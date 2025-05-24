const languagesText = {
  sidebar: {
    dashboard: { en: 'Dashboard', fa: 'داشبورد' },
    devices: { en: 'Devices', fa: 'دستگاه ها' },
  }
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

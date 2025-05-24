const languagesText = {
  sidebar: {
    dashboard: { en: 'Dashboard', fa: 'داشبورد' },
    devices: { en: 'Devices', fa: 'دستگاه ها' },
  },
  Route: {
   title: { en: 'List Route', fa: 'لیست محورها' },
    goRoute: { en: 'GoRoute', fa: 'محور رفت' },
    backRoute: { en: 'BackRoute', fa: 'محور برگشت' },
  },
   AddUser: {
    addUse: {en: 'Add User', fa: 'افزودن کاربر'},
     email: {en: 'Emaill', fa: 'ایمیل'},
    name: {en: 'Name', fa: 'نام'},
    login: {en: 'Create User', fa: "نبت کاربر"},
     goBack: {en: 'Go Back', fa: "برگشت"},

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

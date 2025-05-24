const languagesText = {
  sidebar: {
        navigation: { en: 'Navigation Menu', fa: 'منوی ناوبری' },
        dashboard: { en: 'Dashboard', fa: 'داشبورد' },
        devices: { en: 'Devices', fa: 'دستگاه ها' },
        roads: { en: 'Roads', fa: 'محور ها' },
        users: { en: 'Users', fa: 'کاربر ها' },
        database: { en: 'Database', fa:'دیتابیس'},
        settings: {en: 'Settings' , fa: 'تنظیمات'}
    },

  pagination: {
    // previous: { en: "← ", fa: " ←" },
    // next: { en: "Next", fa: "بعدی" },
    page: { en: "Page", fa: "صفحه" },
  },

  devicespage: {
    adddevice: { en: "+ Add new device", fa: " افزودن دستگاه جدید +" },
    settings: { en: "Change Settings", fa: "تغییر تنظیمات" },
  },
  employeespage: {
    adduser: { en: "+ Add User", fa: "افزودن کاربر + " },
    removemodal: { en: "Are you sure you want to delete this user ?", fa: "آیا مطمئن هستید که می خواهید این کاربر را حذف کنید؟" },
    removemodal_yes: { en: "Confirm", fa: "تایید" },
    removemodal_no: { en: "Cancel", fa: "لغو" },

  },
  
    deviceDataCard: {
        status: {en : 'Status' , fa: 'وضعیت'} ,
        active: {en : 'Active' , fa: 'فعال'},
        deactive: {en : 'Deactive' , fa: 'غیر فعال'},
        countedVehicle: {en : 'Counted Vehicle' , fa: 'خودرو های شمارش شده'},
        direction: {en : 'Directions' , fa: 'مسیریابی'},
        detail: {en: ' Details' , fa: ' جزئیات'},
    },

    Roads :{
        addRoad: { en: "+ Add Road", fa: "افزودن محور +" },

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
}

export { translate, languagesText }

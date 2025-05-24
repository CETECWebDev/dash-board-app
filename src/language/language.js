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

    deviceDataCard: {
        status: {en : 'Status' , fa: 'وضعیت'} ,
        active: {en : 'Active' , fa: 'فعال'},
        deactive: {en : 'Deactive' , fa: 'غیر فعال'},
        countedVehicle: {en : 'Counted Vehicle' , fa: 'خودرو های شمارش شده'},
        direction: {en : 'Directions' , fa: 'مسیریابی'},
        detail: {en: ' Details' , fa: ' جزئیات'},
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
}

export { translate, languagesText }

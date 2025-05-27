import { TbAxisY } from "react-icons/tb";

const languagesText = {
    sidebar: {
        navigation: { en: 'Navigation Menu', fa: 'منوی ناوبری' },
        dashboard: { en: 'Dashboard', fa: 'داشبورد' },
        devices: { en: 'Devices', fa: 'دستگاه ها' },
        roads: { en: 'Roads', fa: 'محور ها' },
        users: { en: 'Users', fa: 'کاربر ها' },
        database: { en: 'Database', fa: 'دیتابیس' },
        settings: { en: 'Settings', fa: 'تنظیمات' },
        title: { en: 'Traffic Monitoring System', fa: 'سامانه جامع تردد شماری' },
    },

    pagination: {
        page: { en: "Page", fa: "صفحه" },
    },

    PieChart: {
        title: { en: 'Device Status', fa: 'امار تردد خودرو ها' },
        heavy: { en: 'Truck', fa: 'سنگین' },
        normal: { en: 'Sedan', fa: 'سواری' },
        motorcycle: { en: 'Motorcycle', fa: 'موتور' },
    },

    devicespage: {
        adddevice: { en: " Add Device", fa: " افزودن دستگاه  " },
        settings: { en: "Change Settings", fa: "تغییر تنظیمات" },
    },

    employeespage: {
        adduser: { en: " Add User", fa: "افزودن کاربر  " },
        removemodal: { en: "Are you sure you want to delete this user ?", fa: "آیا مطمئن هستید که می خواهید این کاربر را حذف کنید؟" },
        removemodal_yes: { en: "Confirm", fa: "تایید" },
        removemodal_no: { en: "Cancel", fa: "لغو" },

    },

    deviceDataCard: {
        status: { en: 'Status', fa: 'وضعیت' },
        active: { en: 'Active', fa: 'فعال' },
        road: { en: 'Road', fa: 'محور' },
        deactive: { en: 'Deactive', fa: 'غیر فعال' },
        countedVehicle: { en: 'Counted Vehicle', fa: 'خودرو های شمارش شده' },
        direction: { en: 'Directions', fa: 'مسیریابی' },
        detail: { en: ' Details', fa: ' جزئیات' },
    },

    addRoad: {
        title: { en: " Add Road", fa: "افزودن محور " },
        name: { en: "Road Name", fa: "نام محور" },
        address: { en: "Axis Direction", fa: "ادرس محور" },
        officeProvince: { en: "Office + Province", fa: "اداره + استان" },
        click: { en: " add Road", fa: "افزودن محور" },
        back: { en: "Back", fa: "بازگشت" },

    },


    addDevice: {
        title: { en: 'Add Device', fa: 'افزودن دستگاه' },
        name: { en: 'Device Name', fa: 'نام دستگاه' },
        lat: { en: `Device's Lat`, fa: 'عرض جغرافیایی' },
        lng: { en: `Device's Lng`, fa: 'طول جغرافیایی' },
        description: { en: `Description`, fa: 'توضیحات'},
        deviceSerial: { en: `Device's Serial`, fa: 'سریال دستگاه' },
        devicecode: { en: 'Device Code', fa: 'کد دستگاه' },
        deviceroad: { en: 'Device Road', fa: 'محور دستگاه' },
        simNumber: { en: 'Simcard Number', fa: 'شماره سیمکارت' },
        simSerial: { en: 'Simcard Serial', fa: 'سریال سیمکارت' },
        deviceStatus: { en: 'Device Status', fa: 'وضعیت دستگاه' },
        active: { en: 'Active', fa: 'فعال' },
        deactive: { en: 'Deactive', fa: 'غیر فعال' },
        createDevice: { en: 'Create Device', fa: ' ثبت دستگاه' },
    },


    backLink: {
        back: { en: 'back', fa: 'بازگشت' }
    },

    deviceSetting: {
        title: { en: 'Device Settings', fa: 'تنظیمات دستگاه' },
        select: { en: 'Select Device', fa: 'انتخاب دستگاه' },
        frameware: { en: 'Frameware Version', fa: 'نخسه فریم ور' },
        serverID: { en: 'Device Server IP', fa: 'ای پی سرور' },
        simNumber: { en: 'Simcard Number', fa: 'شماره سیمکارت' },
        loopNumber: { en: 'loopNumber', fa: 'شماره حلقه' },
        applyAll: { en: 'Apply to all Devices', fa: 'اعمال برای همه دستگاها' },
        applySelected: { en: 'Apply to selected Devices', fa: 'اعمال به دستگاهای انتخاب شده' },
    },


    applySettingModal: {
        deviceList: { en: 'Device List', fa: 'لیست دستگاه ها' },
        SelectedDevices: { en: 'Selected Devices', fa: 'دستگاه های انتخاب شده' },
        apply: { en: 'Apply', fa: 'اعمال تغییرات' },
        cancel: { en: 'Cancel', fa: 'لغو' }
    }

    ,
    lineChart: {
        y_axis_text: { en: 'Income', fa: 'درآمد' },
        x_axis_text: { en: "Months", fa: "ماه " },
        full_labelsize: { en: '14', fa: '14' },
        dataCard_labelsize: { en: '10', fa: '10' },

    },

    DeviceStatusCount: {
        title: { en: 'Device Count', fa: ' تعداد دستگاه‌ها' },
        totalDevices: { en: 'Total Devices:', fa: 'کل دستگاه‌ها :' },
        activeDevices: { en: 'Active Devices:', fa: 'دستگاه های فعال:' },
        inactiveDevices: { en: 'Deactive Devices:', fa: 'دستگاه‌های غیرفعال:' },
    }
    ,
    addUsers: {
        title: { en: 'Add User', fa: 'افزودن کاربر' },
        name: { en: 'Name...', fa: 'نام ...' },
        email: { en: 'Email...', fa: 'ایمیل ....' },
        backButton: { en: 'Back', fa: 'بازگشت' },
        sendButton: { en: 'Add User', fa: 'افزودن کاربر' }
    },

    font:{
        fontFamily: { en: 'sans-serif', fa: 'IranSans' },

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

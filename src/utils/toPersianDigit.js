import i18n from "@/i18n";

export function toPersianDigits(ent) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    if(i18n.language === 'fa'){
        return String(ent).replace(/\d/g, (d) => persianDigits[d]);
    }
    return ent
}
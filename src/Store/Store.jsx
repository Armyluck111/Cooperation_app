import { atom } from "recoil";
export const $Current_width=atom({
    key:"$Current_width",
    default:window.innerWidth
})

export const $CurrentLanguage=atom({
    key:"$CurrentLanguage",
    default:"arabic"
})

export const $SideMenueIndex=atom({
    key:"$SideMenueIndex",
    default:false,
})

export const $Form=atom({
    key:"$Form",
    default:false,
})

export const $VolunteerForm=atom({
    key:"$VolunteerForm",
    default:false,
})


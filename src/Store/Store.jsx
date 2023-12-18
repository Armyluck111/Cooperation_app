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


export const $Answer=atom({
    key:"$Answer",
    default:false,
})
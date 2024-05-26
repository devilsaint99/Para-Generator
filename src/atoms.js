import { atom } from "recoil";

export const words = atom({
    key:"word",
    default:""
}
)

export const contentState = atom({
    key:"contentState",
    default:""
})
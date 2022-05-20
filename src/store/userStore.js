//recoilを使った、グローバルなstateの定義・管理
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});

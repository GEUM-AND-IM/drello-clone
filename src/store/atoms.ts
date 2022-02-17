import { atom } from "recoil";

interface IToDoAtomProps {
  [key: string]: string[];
}

export const toDoAtom = atom<IToDoAtomProps>({
  key: "toDo",
  default: {
    미완료: ["a", "b", "c", "d", "e", "f"],
    "진행 중": ["s", "l"],
    완료: ["k", "h", "j"],
  },
});

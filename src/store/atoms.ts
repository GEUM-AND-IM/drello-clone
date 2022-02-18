import { atom } from "recoil";

export interface IToDoItem {
  id: number;
  text: string;
}

interface IToDoAtomProps {
  [key: string]: IToDoItem[];
}

export const toDoAtom = atom<IToDoAtomProps>({
  key: "toDo",
  default: {
    미완료: [
      { id: 1, text: "리덕스 사가 공부하기" },
      { id: 2, text: "JEST 공부하기" },
      { id: 3, text: "리액트 테스팅 라이브러리 공부하기" },
    ],
    "진행 중": [
      { id: 4, text: "모이자 api 통신 끝내기" },
      { id: 5, text: "조은 프로그래머 실무 가이드 시청하기" },
    ],
    완료: [],
  },
});

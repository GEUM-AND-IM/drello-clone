export interface IToDoItem {
  id: number;
  text: string;
}

export interface IToDoBoardProps {
  [key: string]: IToDoItem[];
}

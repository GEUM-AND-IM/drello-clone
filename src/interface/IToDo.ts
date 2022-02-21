export interface IToDoItem {
  id: number;
  text: string;
}

export interface IToDoAtomProps {
  [key: string]: IToDoItem[];
}

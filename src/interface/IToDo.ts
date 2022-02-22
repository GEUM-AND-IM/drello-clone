export interface IToDoItem {
  id: number;
  text: string;
}

export interface IToDoBoardProps {
  [key: string]: IToDoItem[];
}

interface test {
  name: string;
  pw: string;
  id: string;
}

interface test2 {
  name: string;
  school: string;
  address: string;
}

export const onTest = <T extends test | test2>(data: T): T => {
  return data;
};

export interface UsersItem {
  id: number;
  name: string;
}

export interface Item {
  id: number;
  title: string;
  body?: string;
}

export interface ParemsProps {
  params: {
    id: string;
  };
}

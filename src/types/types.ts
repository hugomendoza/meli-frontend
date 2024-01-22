export interface PropsInitialState {
  loading: boolean;
  items: Item[]; 
  categories: string[];
}

export interface PropsProducts {
  ok:         boolean;
  author:     Author;
  items:      Item[];
  categories: string[];
}

export interface Author {
  name:     string;
  lastname: string;
}

export interface Item {
  id:            string;
  title:         string;
  price:         Price;
  picture:       string;
  condition:     string;
  free_shipping: boolean;
}

export interface Price {
  currency: string;
  amount:   number;
  decimals: number;
}

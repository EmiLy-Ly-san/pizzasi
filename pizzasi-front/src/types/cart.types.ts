export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;

  // (optionnel, remplissable plus tard)
  image?: string;        // ex: "/images/pizza1.svg"
  sku?: string;          // ex: "BE003" équivalent id de la pizza en e-commerce(stock keeping unique)
  description?: string;  // ex: "Sauce tomate, mozzarella, basilic..."
};

export type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;

  // helpers UI 
  increase: (id: string) => void;
  decrease: (id: string) => void;
};
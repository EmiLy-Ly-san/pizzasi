import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartContextValue, CartItem } from "../types/cart.types";
import { CartContext } from "./CartContext";


const seedItems: CartItem[] = [
  {
    id: "p1",
    name: "Pizza Diavola",
    price: 18,
    quantity: 2,
    image: "/images/pizza2.svg",
    sku: "BE003",
    description: "Sauce tomate, mozzarella, salami piquant",
  },
  {
    id: "p2",
    name: "Pizza Margherita",
    price: 12,
    quantity: 1,
    image: "/images/pizza1.svg",
    sku: "BE001",
    description: "Sauce tomate, mozzarella, basilic",
  },
];

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(seedItems);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clear = () => setItems([]);

  const increase = (id: string) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrease = (id: string) => {
    setItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
        )
      // si tu veux supprimer quand ça passe à 0 plus tard, on changera ici
    );
  };

  const value: CartContextValue = useMemo(
    () => ({ items, addItem, removeItem, clear, increase, decrease }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}



import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartContextValue, CartItem } from "../types/cart.types";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }: { children: ReactNode }) {
  // ✅ panier vide au départ (plus de fake items)
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + (item.quantity || 1) }
            : p
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
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

  // ✅ si on passe à 0 : on retire l’item
  const decrease = (id: string) => {
    setItems((prev) => {
      const current = prev.find((p) => p.id === id);
      if (!current) return prev;
      if (current.quantity <= 1) return prev.filter((p) => p.id !== id);
      return prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };

  const value: CartContextValue = useMemo(
    () => ({ items, addItem, removeItem, clear, increase, decrease }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}



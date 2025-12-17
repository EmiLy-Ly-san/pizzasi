import { useParams } from "react-router-dom";
import data from "../data/products.json";
import type { Product } from "../data/products-mock";
import { useCart } from "../hook/useCart";
import Toast from "../components/Toast";
import { useToast } from "../hook/useToast";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { visible, message, show } = useToast();

  const product = (data.products as Product[]).find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <div className="p-5 text-zinc-500">
        Produit introuvable
      </div>
    );
  }


  return (
    <div className="pb-28">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto mt-6 h-72 w-72 rounded-full object-cover"
        />

        <button className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          ←
        </button>

        <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 px-5">
        <div className="text-xs text-zinc-400">{product.sku}</div>

        <h1 className="mt-1 text-[22px] font-semibold text-zinc-800">
          {product.name}
        </h1>

        {product.subtitle && (
          <p className="mt-2 text-sm text-zinc-500">
            {product.subtitle}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-400">Prix</div>
            <div className="text-[22px] font-semibold text-zinc-800">
              {product.price} €
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-100 px-3 py-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
              −
            </button>
            <span className="text-sm font-medium">1</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow">
              +
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pl-8 w-[92%] max-w-md pt-6">
        <button
          className="
    flex w-full items-center justify-center gap-2
    rounded-full bg-zinc-900 py-1 text-white
    transition-transform duration-150
    hover:scale-[1.01]
    active:scale-95 active:shadow-inner
  "
          onClick={() => {
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image,
              sku: product.sku,
              description: product.subtitle,
            });

            show("Produit ajouté au panier");
          }}
        >
          <img src="/icons/cart-icon.svg" alt="cart" className="h-10 w-10" />
          Ajouter
        </button>

      </div>
      <Toast visible={visible} message={message} />
    </div>
  );
}



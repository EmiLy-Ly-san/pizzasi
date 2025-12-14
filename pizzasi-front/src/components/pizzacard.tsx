const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: 8.5,
    image: "https://via.placeholder.com/300",
    description: "Une pizza classique avec sauce tomate, mozzarella et basilic frais.",
  },
  {
    id: 2,
    name: "Reine",
    price: 10,
    image: "https://via.placeholder.com/300",
    description: "Jambon, champignons, mozzarella et sauce tomate.",
  },
  {
    id: 3,
    name: "4 Fromages",
    price: 11,
    image: "https://via.placeholder.com/300",
    description: "Mélange savoureux de mozzarella, gorgonzola, emmental et parmesan.",
  },
];

export default function PizzaCatalog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {pizzas.map((pizza) => (
        <motion.div
          key={pizza.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="rounded-2xl shadow-md overflow-hidden">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-48 object-cover"
            />
            <cardContent className="p-4 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{pizza.name}</h2>
              <p className="text-sm text-gray-600">{pizza.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold">{pizza.price} €</span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 border rounded-lg p-2"
                />
                <Button className="rounded-2xl px-4 py-2">
                  Ajouter au panier
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

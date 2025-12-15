import PizzaMomentCard from "../components/PizzaMomentCard";
import OrderTrackingCard from "../components/OrderTrackingCard";

export default function Dashboard() {
  return (
    <div className="pb-32">
      <PizzaMomentCard />
      <OrderTrackingCard />
    </div>
  );
}
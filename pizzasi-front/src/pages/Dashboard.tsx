import PizzaMomentCard from "../components/PizzaMomentCard";
import OrderTrackingCard from "../components/OrderTrackingCard";
import SubscriptionCard from "../components/SubscriptionPage";

export default function Dashboard() {
  return (
    <div className="pb-32">
      <PizzaMomentCard />
      <OrderTrackingCard />
      <SubscriptionCard />
    </div>
  );
}
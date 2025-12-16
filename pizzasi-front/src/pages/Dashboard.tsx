import PizzaMomentCard from "../components/PizzaMomentCard";
import OrderTrackingCard from "../components/OrderTrackingCard";
import SubscriptionCard from "../components/SubscriptionPage";
import OrderHistory from "../components/OrderHistory";
import RankingsCarousel from "../components/RankingCarousel";

export default function Dashboard() {
  return (
    <div className="pb-32">
      <PizzaMomentCard />
      <OrderTrackingCard />
      <SubscriptionCard />
      <OrderHistory />
      <RankingsCarousel />
    </div>
  );
}
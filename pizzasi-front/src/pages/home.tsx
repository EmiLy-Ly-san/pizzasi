type Achievement = {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  completed: boolean;
};

type Props = {
  avatarUrl: string;
  bannerImageUrl: string;
  userName: string;
  role: string;
  achievements: Achievement[];
};

export default function SuccesDefisScreen({
  avatarUrl,
  bannerImageUrl,
  userName,
  role,
  achievements,
}: Props) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            className="w-12 h-12 rounded-full"
            alt="avatar"
          />
          <div>
            <p className="font-semibold">Bienvenue {userName} !</p>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          🔔
        </div>
      </div>

      {/* Banner */}
      <div className="px-4">
        <div className="relative bg-orange-400 rounded-2xl p-5 text-white overflow-hidden">
          <h2 className="text-xl font-bold">
            Proposez nous votre recette
          </h2>
          <p className="mt-2">
            Proposez votre recette et devenez la Pizza du Trimestre !
          </p>

          <button className="mt-4 bg-white text-orange-400 font-semibold px-5 py-2 rounded-full">
            Participer →
          </button>

          <img
            src={bannerImageUrl}
            className="absolute right-[-20px] top-5 w-40"
            alt="pizza"
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="p-4 space-y-3">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl"
          >
            <img src={item.iconUrl} className="w-12 h-12" />
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </div>
            <span className="text-xl">
              {item.completed ? "✅" : "⬜"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

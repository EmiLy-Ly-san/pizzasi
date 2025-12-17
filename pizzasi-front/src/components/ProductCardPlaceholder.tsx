export default function ProductCardPlaceholder() {
  return (
    <div className="flex h-40 w-full flex-col justify-between rounded-2xl bg-zinc-100 p-4">
      <div className="h-20 rounded-xl bg-zinc-200" />
      <div className="space-y-2">
        <div className="h-3 w-3/4 rounded bg-zinc-200" />
        <div className="h-3 w-1/2 rounded bg-zinc-200" />
      </div>
    </div>
  );
}

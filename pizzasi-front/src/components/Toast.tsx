type ToastProps = {
  message: string;
  visible: boolean;
};

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div
      className={`
        fixed bottom-43 left-1/2 z-50 -translate-x-1/2
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <div className="rounded-full bg-[#ad252e] px-12 py-3 text-sm text-white shadow-lg text-center">
        {message}
      </div>
    </div>
  );
}
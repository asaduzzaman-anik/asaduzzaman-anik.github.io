export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-indigo-300/25 blur-3xl dark:bg-indigo-700/15" />
      <div className="absolute right-[-12rem] top-[24rem] h-[34rem] w-[34rem] rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-700/10" />
      <div className="absolute bottom-[-16rem] left-[35%] h-[32rem] w-[32rem] rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-700/10" />
    </div>
  );
}

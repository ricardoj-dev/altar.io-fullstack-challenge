import { useFullStackChallengeStore } from "@/store";

const DisplayCode = () => {
  const code = useFullStackChallengeStore((state) => state.code);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center items-center gap-1">
        <div className="red-ball" />
        <p className="text-blue-950 font-bold">Live</p>
      </div>
      <p className="border-2 border-blue-950 text-xl uppercase py-4 px-8">
        Your Code: <span className="font-bold">{code}</span>
      </p>
    </div>
  );
};

export default DisplayCode;

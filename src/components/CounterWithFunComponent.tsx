type Tprops = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunComponent = ({ count, setCount }: Tprops) => {
  return (
    <div className="border border-red-400 m-10">
      <button
        className="px-1 bg-purple-500 text-white rounded m-10"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterWithFunComponent;

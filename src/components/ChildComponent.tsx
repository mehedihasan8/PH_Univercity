const ChildComponent = ({ count }: { count: number }) => {
  return (
    <div className="rounded p-10 mx-10 mb-10  border-purple-400 border">
      {count}
    </div>
  );
};

export default ChildComponent;

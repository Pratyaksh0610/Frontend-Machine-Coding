import { memo, useCallback, useEffect, useMemo, useState } from "react";

const MemoizedGreeting = memo(
  function ({ name }) {
    console.log("MEMOIZED HELLO");
    return <p>{name}</p>;
  },
  function (prevProps, nextProps) {
    //arePropsEqual ka check hai ye
    return true;
  },
);

const Greeting = function ({ name }) {
  console.log("NORMAL HELLO");
  return <p>{name}</p>;
};

const MemoizedCallback = memo(function ({ add }) {
  console.log("REEEEEE");
  return <p>Memoized Function Component Call</p>;
});

export default function MemoizedComponent() {
  const [count, setCount] = useState(0);
  const addFn = function () {
    console.log("ADD");
  };
  const expensiveValue = useMemo(function () {
    let ans = 0;
    for (let i = 0; i < 1e9; i++) {
      ans++;
    }
    return ans;
  }, []);
  const memoizedAddFn = useCallback(addFn, [count]);
  return (
    <div>
      <h1>Memoized Component</h1>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
      <MemoizedGreeting name={count} />
      <MemoizedCallback add={memoizedAddFn} />
      {expensiveValue}
      {/* <Greeting name={"PRATY"} /> */}
    </div>
  );
}

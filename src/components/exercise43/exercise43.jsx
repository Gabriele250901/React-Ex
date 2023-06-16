import { useMemo } from "react";

export function FilteredList({ listObj = [{name : "Gabriele", age: 21}] }) {
  const filter = useMemo(() => {
    return listObj.filter((el) => el.age >= 18);
  }, [listObj]);
  return (
    <div>
      {filter.map((e) => (
        <li key={e.id}>
          <h1>Name : {e.name}</h1>
          <h1>Age : {e.age}</h1>
        </li>
      ))}
    </div>
  );
}

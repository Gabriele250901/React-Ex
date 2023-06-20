import { useEffect, useRef } from "react";

export function CarDetails({
  initialValue = { model: "Audi", year: 2010, color: "red" },
}) {
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    modelRef.current.value = initialValue.model;
    yearRef.current.value = initialValue.year;
    colorRef.current.value = initialValue.color;
  }, [initialValue]);
  function handleFormChange(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleFormChange}>
        <input type="text" name="model" ref={modelRef} />
        <input type="text" name="year" ref={yearRef} />
        <input type="text" name="color" ref={colorRef} />
      </form>
    </div>
  );
}



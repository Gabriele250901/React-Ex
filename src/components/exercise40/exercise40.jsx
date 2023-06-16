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
  }, []);

  useEffect(()=> {
    
  },[initialValue])
  function handleFormChange(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleFormChange}>
        <input
          type="text"
          name="model"
          ref={modelRef}
         
        />
        <input
          type="text"
          name="year"
          ref={yearRef}
         
        />
        <input
          type="text"
          name="color"
          ref={colorRef}
          
        />
      </form>
    </div>
  );
}


/* ciao jeremy l'esercizio manca di una parte , non ho idea di come si possa fare, ho provato con una funzione onChange,
con un sideEffect ogni volta che il valore cambia ma nulla non riesco a far resettare ogni volta che il valore 
cambia , in caso se vuoi lo possiamo vedere in live o non saprei */
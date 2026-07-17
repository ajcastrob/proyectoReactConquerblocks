import { useState, useEffect, useRef } from "react";

export const useQuery = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("El campo de búsqueda está vacío");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se permiten números al comienzo para buscar películas");
      return;
    }

    if (query.length < 3) {
      setError("La película debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return { query, error, setQuery };
};

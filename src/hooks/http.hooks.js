import { useCallback, useState } from "react";


const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      metod = "GET",
      body = null,
      heders = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { metod, body, heders });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null),[]);

  return {loading, error, request, clearError};
};

export default useHttp;

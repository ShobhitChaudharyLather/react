import { useEffect, useState } from "react";

function useExchangeRate(from, to) {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (!from || !to) return;

    const fetchRate = async () => {
      const url = `https://v6.exchangerate-api.com/v6/37eebe7701376ebfee7ceea2/latest/${from}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.result === "success") {
          const fetchedRate = data.conversion_rates[to];
          if (fetchedRate) {
            setRate(fetchedRate);
          } else {
            console.warn("Currency not supported:", to);
            setRate(null);
          }
        } else {
          console.error("API error:", data);
          setRate(null);
        }
      } catch (err) {
        console.error("Fetch failed:", err.message);
        setRate(null);
      }
    };

    fetchRate();
  }, [from, to]);

  return rate;
}

export default useExchangeRate;

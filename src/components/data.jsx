import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function useData() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    Papa.parse("/Labeling sentimen model Aardiiiiyyy(Desember-fix).csv", {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: (results) => {
        const clean = results.data.map(row => {
          const obj = {};
          Object.keys(row).forEach(k => {
            const key = k.replace(/^\uFEFF/, "").trim().toLowerCase();
            let val = row[k]?.trim();

            if (key === "label_sentiment" && val) {
              val = val.toLowerCase();
              if (val === "positif") val = "positive";
              if (val === "negatif") val = "negative";
              if (val === "netral") val = "neutral";
            }
            obj[key] = val;
          });
          return obj;
        });
        setTweets(clean);
      }
    });
  }, []);

  return tweets;
}

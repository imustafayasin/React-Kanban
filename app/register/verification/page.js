"use client";
import { useEffect, useState } from "react";
import { verification } from "controller/accountController";
export default function Verification({ searchParams }) {
  const [result, setResult] = useState({ state: "loading" });
  useEffect(() => {
    (async () => {
      if (!searchParams.token) {
        alert("token not provided.");
      }
      let result = await verification(searchParams.token);
    })();
  });
  return <pre>selam</pre>;
}

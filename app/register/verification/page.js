"use client";
import { useEffect, useState } from "react";
import { verification } from "controller/accountController";

import LoadingState from "./states/loading";
import SuccessState from "./states/success";
import FailedState from "./states/failed";
import { useRouter } from "next/navigation";

export default function Verification({ searchParams }) {
  const router = useRouter();
  const [content, setContent] = useState(<LoadingState />);
  useEffect(() => {
    (async () => {
      if (!searchParams.token) {
        setContent(
          <FailedState
            title="Token not provided!"
            button={{ title: "Go to login page", link: "/login" }}
          />
        );
        return;
      }

      let verificationResult = await verification(searchParams.token);

      setContent(
        verificationResult.success === true ? (
          <SuccessState />
        ) : (
          <FailedState
            title="Mail not confirmed."
            button={{ title: "Go to login page", link: "/login" }}
          />
        )
      );

      if (verificationResult.success === true) {
        setTimeout(() => {
          router.replace("/");
        }, 4000);
      }
    })();
  }, []);

  return (
    <div className="w-[400px] flex flex-col text-center justify-center mx-auto h-full items-center">
      {content}
    </div>
  );
}

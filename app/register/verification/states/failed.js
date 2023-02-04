import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function FailedState({ title, button }) {
  return (
    <>
      <ExclamationTriangleIcon className="w-14 mb-6 text-red-800" />
      <h1 className="font-lg col-start-2 mb-3  font-semibold text-3xl	">
        {title ?? "An error"}
      </h1>

      {Object.keys(button).length && (
        <Link
          className="bg-[#7F56D9] mt-5 px-4  py-3 rounded text-white"
          href={button.link}
        >
          {button.title}
        </Link>
      )}
      {/* <p className=" text-center text-slate-500 text-base	mb-8">
        Your account has been successfully confirm.
        <br />
        Redirecting to application...
      </p> */}
    </>
  );
}

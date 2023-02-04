import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function SuccessState() {
  return (
    <>
      <CheckBadgeIcon className="w-14 mb-6 text-green-800" />
      <h1 className="font-lg col-start-2 mb-3  font-semibold text-3xl	">Email verified</h1>
      <p className=" text-center text-slate-500 text-base	mb-8">
        Your account has been successfully confirmed
        <br />
        Redirecting to application...
      </p>
    </>
  );
}

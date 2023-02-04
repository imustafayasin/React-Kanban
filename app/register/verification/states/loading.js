import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function LoadingState() {
  return (
    <>
      <ArrowPathIcon className="w-14 mb-6 animate-spin " />
      <h1 className="font-lg col-start-2 mb-3  font-semibold text-3xl	">
        We confirm your account...
      </h1>
      <p className=" text-center text-slate-500 text-base	mb-8">
        We confirm your account...
      </p>
    </>
  );
}

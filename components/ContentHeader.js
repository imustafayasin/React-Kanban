import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
export default function ContentHeader({ show, activeBoard }) {
  return (
    <div className="flex justify-between px-10 border-b border-gray-200   bg-gray-100 py-5 items-center">
      <h3 className="text-xl"> {activeBoard.name}</h3>
      <div className="flex items-center">
        <button className="rounded py-2.5 px-4 text- border" onClick={() => show()}>
          Add New Task
        </button>
        <EllipsisVerticalIcon className=" w-10 h-7 ml-3 cursor-pointer" />
      </div>
    </div>
  );
}

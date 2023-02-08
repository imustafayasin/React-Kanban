import { useState } from "react";
import AddTaskModal from "./modals/AddTaskModal";
export default function ContentHeader({ columns }) {
  const [createModalIsOpen, setCreateModalState] = useState(false);
  return (
    <>
      <AddTaskModal
        show={createModalIsOpen}
        columns={columns}
        onHide={setCreateModalState}
      />
      <div className="flex justify-between px-10 border-b border-gray-200   bg-gray-100 py-5 items-center">
        <h3 className="text-xl">Board name</h3>
        <button
          className="rounded py-2.5 px-4 text- border"
          onClick={() => setCreateModalState(true)}
        >
          Add New Task
        </button>
      </div>
    </>
  );
}

import AddBoardModal from "./AddBoardModal";
import UpdateBoardModal from "./UpdateBoardModal";
import AddTaskModal from "./AddTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import { useSelector } from "react-redux";
export default function Modals() {
  const showUpdateBoardModal = useSelector((state) => state.modal.showUpdateBoardModal);
  const showAddBoardModal = useSelector((state) => state.modal.showAddBoardModal);
  const showAddTaskModal = useSelector((state) => state.modal.showAddTaskModal);
  const showUpdateTaskModal = useSelector((state) => state.modal.showUpdateTaskModal);

  return (
    <>
      {showAddBoardModal && <AddBoardModal />}
      {showUpdateBoardModal && <UpdateBoardModal />}
      {showAddTaskModal && <AddTaskModal />}
      {showUpdateTaskModal && <UpdateTaskModal />}
    </>
  );
}

import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/ContentHeader";

export default function Home() {
  let style = {
    content: {
      height: "calc(100% - 85px)",
      width: "calc(100vw - 312px)",
    },
  };

  return (
    <div className="mx-auto flex flex-row h-full overflow-hidden w-full	relative">
      <Sidebar />
      <main className="w-full">
        <ContentHeader />
        <div
          style={style.content}
          className="content bg-gray-100	 px-10 p-8 flex gap-6 overflow-x-auto	"
        >
          <div className="board shrink-0	 h-full min-w-[330px]">
            <div className="board-header flex items-center mb-4 d-flex gap-2">
              <div className="w-3 h-3 border rounded-full bg-sky-500"></div>
              <h5 className="title text-sm	font-medium">TODO (5)</h5>
            </div>
            <div className="board-items">
              <div className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-medium font-semibold">Complete Designs</h2>
                <p className="text-xs text-gray-600">0 of 1 subtasks</p>
              </div>
              <div className="board-item bg-white cursor-pointer  shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-lg	 font-semibold">Complete Design</h2>
                <p className="text-sm text-gray-600">0 of 1 subtasks</p>
              </div>
              <div className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-lg	 font-semibold">Complete Design</h2>
                <p className="text-sm text-gray-600">0 of 1 subtasks</p>
              </div>
            </div>
          </div>{" "}
          <div className="board shrink-0	 h-full min-w-[330px]">
            <div className="board-header flex items-center mb-4 d-flex gap-2">
              <div className="w-3 h-3 border rounded-full bg-purple-500"></div>
              <h5 className="title text-sm	font-medium">Doing (5)</h5>
            </div>
            <div className="board-items">
              <div className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-medium font-semibold">Complete Design</h2>
                <p className="text-xs text-gray-600">0 of 1 subtasks</p>
              </div>
              <div className="board-item bg-white cursor-pointer  shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-lg	 font-semibold">Complete Design</h2>
                <p className="text-sm text-gray-600">0 of 1 subtasks</p>
              </div>
              <div className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4">
                <h2 className="mb-2 text-lg	 font-semibold">Complete Design</h2>
                <p className="text-sm text-gray-600">0 of 1 subtasks</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

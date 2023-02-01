import Sidebar from "@/components/Sidebar";
import ContentHeader from "@/components/ContentHeader";

export default function Home() {
  let style = {
    content: {
      height: "calc(100% - 96px)",
    },
  };

  return (
    <div className="mx-auto flex flex-row h-full">
      <Sidebar />
      <main className="basis-full">
        <ContentHeader />
        <div
          style={style.content}
          className="content h-full bg-zinc-800 px-10 py-8 grid grid-cols-4 gap-4"
        >
          <div className="board h-full flex items-center justify-center text-stone-200 cursor-pointer bg-zinc-700 rounded-md	 font-xl">
            + New Boards
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ContentHeader() {
  return (
    <div className="flex justify-between px-8 text-white py-5 items-center bg-neutral-600 ">
      <h3 className="text-xl">Board name</h3>
      <button className="rounded p-4 bg-violet-500">Add New Task</button>
    </div>
  );
}

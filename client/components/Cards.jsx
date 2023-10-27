export default function Cards() {
  return (
    <div className="flex ">
      <div className="bg-slate-100 p-6 w-50px h-50px gap-1">
        <h5 className="mb-2 text-xl ">Card title</h5>
        <p className="mb-4">
          Some quick example text to build on the card
        </p>
        <button type="button" className="bg-gray-600  text-center rounded-full">
          Readmore
        </button>
      </div>
    </div>
  );
}

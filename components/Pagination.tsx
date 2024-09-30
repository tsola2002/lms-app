"use client";

const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
          <button
            disabled
            className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            Prev
          </button>
          <div className="flex items-center gap-2 text-sm">
          </div>
          <button
            className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      );
}

export default Pagination
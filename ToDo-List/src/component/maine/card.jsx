import React, { useState } from "react";

const information = [
  { id: 1, title: "Example task", category: "Home", status: "todo" },
  { id: 2, title: "Example task 2", category: "Home", status: "todo" },
  { id: 3, title: "Math homework", category: "School", status: "todo" },
  { id: 4, title: "Buy tomatoes", category: "Shopping list", status: "todo" },
];

function Card({ selectedCategory }) {
  const [tasks, setTasks] = useState(information);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Home");
  const [editId, setEditId] = useState(null);

  const colors = {
    None: "bg-gray-400",
    Home: "bg-red-300",
    School: "bg-orange-300",
    "Shopping list": "bg-sky-300",
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesCategory =
      selectedCategory === "All" || task.category === selectedCategory;

    const matchesStatus =
      filter === "Done"
        ? task.status === "done"
        : filter === "Not done"
          ? task.status === "todo"
          : true;

    return matchesCategory && matchesStatus;
  });

  const changeStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "todo" : "done" }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const openAddModal = () => {
    setTitle("");
    setCategory("Home");
    setEditId(null);
    setShowModal(true);
  };

  const openEditModal = (task) => {
    setTitle(task.title);
    setCategory(task.category);
    setEditId(task.id);
    setShowModal(true);
  };

  const saveTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, title, category } : task,
        ),
      );
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: title.trim(),
          category,
          status: "todo",
        },
      ]);
    }

    setShowModal(false);
    setTitle("");
    setEditId(null);
  };

  return (
    <main className="min-h-screen flex-1 bg-[#f5f5f5] px-5 py-4 sm:px-8">
      <h1 className="mb-5 text-center text-2xl font-normal text-[#555] sm:text-3xl">
        All your tasks
      </h1>

      <div className="mx-auto max-w-4xl">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-[#555]">Tasks</h2>

          <div className="flex items-center gap-1">
            {["All", "Done", "Not done"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg border px-3 py-1 text-xs transition ${
                  filter === item
                    ? "border-gray-200 bg-white text-gray-700"
                    : "border-gray-200 bg-transparent text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() =>
                setFilter(filter === "Not done" ? "All" : "Not done")
              }
              className="ml-1 p-1 text-gray-400"
              aria-label="Filter tasks"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex min-h-[60px] items-stretch overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => changeStatus(task.id)}
                aria-label="Change task status"
                className="flex w-[60px] shrink-0 items-center justify-center border-r border-gray-200"
              >
                <span
                  className={`h-5 w-5 rounded-full border border-[#a78bdb] ${
                    task.status === "done" ? "bg-[#a78bdb]" : "bg-white"
                  }`}
                >
                  {task.status === "done" && (
                    <svg
                      viewBox="0 0 20 20"
                      className="h-full w-full p-1 text-white"
                    >
                      <path
                        d="m4 10 4 4 8-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-2">
                <p
                  className={`break-words text-base font-medium ${
                    task.status === "done"
                      ? "text-gray-400 line-through"
                      : "text-[#555]"
                  }`}
                >
                  {task.title}
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    className={`h-3 w-3 shrink-0 rounded-sm ${
                      colors[task.category] || "bg-gray-400"
                    }`}
                  />
                  <span className="text-xs text-gray-400">{task.category}</span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 px-3 sm:gap-6 sm:px-5">
                <button
                  onClick={() => openEditModal(task)}
                  aria-label="Edit task"
                  className="text-gray-300 transition hover:text-gray-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="m3 17.25 11.06-11.06 3.75 3.75L6.75 21H3v-3.75zM20.71 6.04a1 1 0 0 0 0-1.42l-2.34-2.34a1 1 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
                  </svg>
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                  className="text-gray-300 transition hover:text-red-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M6 7h12l-1 14H7L6 7zm3-4h6l1 2h4v2H4V5h4l1-2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={openAddModal}
          className="mt-3 flex h-10 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-transparent text-sm text-gray-400 transition hover:bg-white"
        >
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded border border-gray-300 text-base leading-none">
            +
          </span>
          Add a task
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <form
            onSubmit={saveTask}
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
          >
            <h2 className="mb-5 text-lg font-semibold text-gray-700">
              {editId !== null ? "Edit task" : "Add a task"}
            </h2>

            <label className="mb-2 block text-sm text-gray-600">
              Task title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-purple-400"
              autoFocus
              required
            />

            <label className="mb-2 block text-sm text-gray-600">Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-6 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-400"
            >
              <option value="None">None</option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Shopping list">Shopping list</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#8b5bd7] px-4 py-2 text-sm text-white hover:bg-[#7746c3]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

export default Card;

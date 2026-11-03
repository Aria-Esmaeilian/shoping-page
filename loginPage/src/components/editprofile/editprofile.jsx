import { useState } from "react";

export default function EditProfile({ user, onCancel, onSave }) {
  const [firstname, setFirstname] = useState(user.firstname || "");
  const [lastname, setLastname] = useState(user.lasttname || "");

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      firstname: firstname,
      lasttname: lastname,
    });
  }

  return (
    <section className="mb-6 rounded-2xl border border-[#3F3F46] bg-black p-6">
      <h3 className="mb-5 text-xl font-bold">Edit Profile</h3>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            className="rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white outline-none focus:border-white"
          />

          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last Name"
            className="rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white outline-none focus:border-white"
          />
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="submit"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-black"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-[#3F3F46] px-5 py-3 text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

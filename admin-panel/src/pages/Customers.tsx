import { useEffect, useState } from "react";
import { useTheme } from "./theme";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  age: number;
  gender: string;
  phone: string;
  role: string;
  address: {
    city: string;
    country: string;
  };
  company: {
    name: string;
    title: string;
  };
};

export default function Customers() {
  const { dark } = useTheme();
  const [fechdata, setfechdata] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const get = await fetch("https://dummyjson.com/users");
        const data = await get.json();
        setfechdata(data.users);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const cardStyle = dark
    ? "border-gray-700 bg-[rgb(35,44,58)] text-white"
    : "border-gray-200 bg-white text-gray-900";

  const mutedText = dark ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`min-h-full p-8 ${
        dark ? "bg-[rgb(17,24,39)] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {selectedUser === null ? (
        <div>
          <h1 className="mb-6 text-3xl font-bold">Customers</h1>

          <div className={`overflow-hidden rounded-2xl shadow-sm ${cardStyle}`}>
            {fechdata.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedUser(item)}
                className={`flex cursor-pointer items-center gap-4 border-b p-5 transition-colors duration-200 ${
                  dark
                    ? "border-gray-700 hover:bg-gradient-to-r hover:from-[rgb(54,57,101)] hover:via-[rgba(69,46,122,0.4)] hover:to-transparent"
                    : "border-gray-200 hover:bg-violet-50"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.firstName}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {item.firstName} {item.lastName}
                  </p>
                  <p className={`truncate text-sm ${mutedText}`}>
                    {item.email}
                  </p>
                </div>

                <span className={mutedText}>←</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedUser(null)}
            className={`mb-6 rounded-lg border px-4 py-3 transition ${
              dark
                ? "border-[rgb(35,44,58)] bg-[rgb(35,44,58)] hover:bg-gray-700"
                : "border-gray-200 bg-white hover:bg-violet-50"
            }`}
          >
            ← Back to Customers
          </button>

          <div className={`rounded-2xl border p-6 shadow-sm ${cardStyle}`}>
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div className="flex items-center gap-5">
                <img
                  src={selectedUser.image}
                  alt={selectedUser.firstName}
                  className="h-20 w-20 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </h2>
                  <p className={`mt-1 ${mutedText}`}>{selectedUser.email}</p>
                  <p className={`mt-2 text-sm ${mutedText}`}>
                    {selectedUser.address.city}, {selectedUser.address.country}
                  </p>
                </div>
              </div>

              <button
                className={`rounded-lg px-5 py-3 font-medium ${
                  dark
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                Edit Customer
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "AGE", value: selectedUser.age },
                { label: "GENDER", value: selectedUser.gender },
                { label: "PHONE", value: selectedUser.phone },
                { label: "ROLE", value: selectedUser.role },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl border p-5 ${
                    dark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <p className={`text-sm ${mutedText}`}>{item.label}</p>
                  <p className="mt-2 break-words text-2xl font-bold capitalize">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div
                className={`rounded-xl border-b p-6 lg:col-span-2 ${
                  dark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className="mb-5 text-lg font-bold">Customer Information</h3>

                {[
                  {
                    label: "Full name",
                    value: `${selectedUser.firstName} ${selectedUser.lastName}`,
                  },
                  { label: "Email", value: selectedUser.email },
                  {
                    label: "Location",
                    value: `${selectedUser.address.city}, ${selectedUser.address.country}`,
                  },
                  { label: "Company", value: selectedUser.company.name },
                  { label: "Job title", value: selectedUser.company.title },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex justify-between gap-4 py-4 ${
                      index !== 4
                        ? `border-b ${
                            dark ? "border-gray-700" : "border-gray-200"
                          }`
                        : ""
                    }`}
                  >
                    <span className={mutedText}>{item.label}</span>
                    <span className="break-all text-right font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-xl border p-6 ${
                  dark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className="mb-5 text-lg font-bold">Quick Actions</h3>

                <div className="flex flex-col gap-4">
                  {["View profile", "View company", "Contact customer"].map(
                    (action) => (
                      <button
                        key={action}
                        className={`text-left font-medium ${dark ? "text-violet-400 hover:text-violet-300" : "text-violet-600 hover:text-violet-800"}`}
                      >
                        {action} →
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

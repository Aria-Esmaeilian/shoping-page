import { Link } from "react-router-dom";

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-50 px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-amber-500 font-bold text-lg mb-4">ARIA WEBSITE</p>

          <h1 className="text-7xl font-bold mb-8">Welcome to My World</h1>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-9">
            A place where technology, creativity, learning, and development come
            together. This website represents my journey into modern web
            development and the skills I am building every day.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">
          <div className="bg-amber-500 p-16">
            <p className="text-white font-bold text-lg mb-5">
              ABOUT THIS PROJECT
            </p>

            <h2 className="text-5xl font-bold text-white mb-7">
              Building Something Great
            </h2>

            <p className="text-white text-xl leading-9 max-w-5xl">
              This project started as a simple idea and gradually became
              something much bigger. Every component, page, button, and
              interaction is part of my journey in learning frontend development
              and creating modern websites.
            </p>
          </div>

          <div className="p-14">
            <h3 className="text-4xl font-bold mb-7">My Journey</h3>

            <p className="text-xl text-gray-600 leading-9 mb-6">
              I started with the fundamentals of web development and gradually
              moved toward JavaScript, APIs, React, and modern frontend tools.
              Instead of only watching tutorials, I try to build real projects
              and solve problems by myself.
            </p>

            <p className="text-xl text-gray-600 leading-9">
              Every project helps me understand something new and gives me more
              experience with writing code, designing interfaces, working with
              data, and building complete web applications.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-bold text-lg mb-3">WHAT I KNOW</p>

            <h2 className="text-5xl font-bold">My Skills</h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
              These are the technologies and concepts I have been learning and
              practicing through different projects.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">HTML</h3>

              <p className="text-gray-600 leading-7">
                Creating structured and organized web pages using semantic HTML.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">CSS</h3>

              <p className="text-gray-600 leading-7">
                Styling websites, creating layouts, responsive designs, cards,
                buttons, and modern interfaces.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                Tailwind CSS
              </h3>

              <p className="text-gray-600 leading-7">
                Building modern user interfaces quickly using Tailwind utility
                classes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                JavaScript
              </h3>

              <p className="text-gray-600 leading-7">
                Working with JavaScript fundamentals, logic, functions, arrays,
                objects, and modern syntax.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">DOM</h3>

              <p className="text-gray-600 leading-7">
                Selecting elements, changing content, manipulating styles, and
                creating interactive pages.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">Arrays</h3>

              <p className="text-gray-600 leading-7">
                Working with arrays and using methods such as map, filter, and
                reduce.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                LocalStorage
              </h3>

              <p className="text-gray-600 leading-7">
                Saving, reading, updating, and deleting information using
                browser storage.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                Fetch API
              </h3>

              <p className="text-gray-600 leading-7">
                Getting data from APIs and working with asynchronous JavaScript.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                Async / Await
              </h3>

              <p className="text-gray-600 leading-7">
                Handling asynchronous operations and working with API requests
                more effectively.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                REST API
              </h3>

              <p className="text-gray-600 leading-7">
                Working with external APIs, fetching data, filtering
                information, and displaying results.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                Pagination
              </h3>

              <p className="text-gray-600 leading-7">
                Creating pagination systems for displaying large amounts of data
                in smaller sections.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">React</h3>

              <p className="text-gray-600 leading-7">
                Building reusable components, passing props, and creating modern
                React applications.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                React Router
              </h3>

              <p className="text-gray-600 leading-7">
                Creating multiple pages and navigating between pages in React
                applications.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">
                Components
              </h3>

              <p className="text-gray-600 leading-7">
                Creating reusable React components and organizing projects into
                separate parts.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">Git</h3>

              <p className="text-gray-600 leading-7">
                Managing project versions and working with Git commands during
                development.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-amber-500 mb-4">GitHub</h3>

              <p className="text-gray-600 leading-7">
                Uploading projects, managing repositories, and working with
                GitHub.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-100 rounded-3xl p-16 mb-20 shadow-lg">
          <div className="text-center">
            <p className="text-amber-600 font-bold text-lg mb-4">
              WHAT I AM LEARNING
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Becoming Better Every Day
            </h2>

            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-9">
              Learning programming is a continuous process. There is always
              something new to discover, another problem to solve, and a better
              way to build something. My goal is to keep improving my JavaScript
              and React skills and become a stronger frontend developer through
              practice and real projects.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-12">
            What I Can Build
          </h2>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="text-5xl mb-6">💻</div>

              <h3 className="text-3xl font-bold mb-5">Websites</h3>

              <p className="text-gray-600 text-lg leading-8">
                Modern websites with clean layouts, responsive design,
                navigation, buttons, cards, and interactive elements.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="text-5xl mb-6">🔌</div>

              <h3 className="text-3xl font-bold mb-5">API Projects</h3>

              <p className="text-gray-600 text-lg leading-8">
                Projects that communicate with APIs, receive data, filter
                results, and display information dynamically.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="text-5xl mb-6">⚛️</div>

              <h3 className="text-3xl font-bold mb-5">React Apps</h3>

              <p className="text-gray-600 text-lg leading-8">
                React applications using components, props, routing, and
                reusable structures.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-5xl font-bold text-amber-500">15+</h3>

            <p className="text-lg mt-3 text-gray-600">Skills</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-5xl font-bold text-amber-500">∞</h3>

            <p className="text-lg mt-3 text-gray-600">Ideas</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-5xl font-bold text-amber-500">100%</h3>

            <p className="text-lg mt-3 text-gray-600">Motivation</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-5xl font-bold text-amber-500">24/7</h3>

            <p className="text-lg mt-3 text-gray-600">Learning</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-16 text-center text-white mb-12">
          <p className="text-amber-400 font-bold text-lg mb-5">THE NEXT STEP</p>

          <h2 className="text-5xl font-bold mb-7">
            Keep Learning. Keep Building.
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-9 mb-10">
            The goal is not to know everything. The goal is to keep learning,
            keep practicing, and keep building better projects. Every line of
            code is another step forward.
          </p>

          <p className="text-3xl font-bold text-amber-400">
            The best version is still being built.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-amber-600 hover:scale-105 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

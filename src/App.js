import React from "react";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-800 p-4 text-white">
        <nav>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            {/* Add more navigation items */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-blue-500 p-4">
          <h1 className="text-2xl font-semibold text-white">My App</h1>
        </header>

        {/* Search Bar */}
        <div className="bg-gray-100 p-4">
          <input
            type="text"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            placeholder="Search..."
          />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200 p-4">
          <div className="rounded-md bg-white p-4 shadow-md">
            <h2 className="mb-2 text-lg font-semibold">Main Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

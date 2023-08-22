function MyApp() {
  return (
    <>
      <div className="flex h-screen bg-slate-200">
        <aside className="w-1/6 bg-slate-800">
          <h1 className="p-4 text-4xl font-bold text-white">Logo</h1>
          <hr />
          <nav>
            <ul className="flex flex-col space-y-4 p-4 font-medium text-white">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </aside>

        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex w-full items-center justify-between space-x-4 bg-slate-400 px-4">
            <input
              type="search"
              placeholder="Search..."
              className="m-2 basis-1/2 rounded-md p-4 shadow-md focus:border-blue-500 focus:outline-none focus:ring"
            />
            <h1 className="text-2xl font-semibold text-white">Profile</h1>
          </header>

          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-300 p-4">
            <div className="rounded-md bg-white p-4 shadow-md">
              <h1 className="text-4xl font-semibold text-black">Title</h1>
              <p className=" text-lg font-normal text-black">Body</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default MyApp;

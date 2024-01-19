const Navbar = () => {
  return (
    <nav className="h-[80px] flex justify-between items-center px-6 shadow-lg bg-[#f8f9fa] sticky top-0 right-0 z-[99999]">
      <h1 className="font-bold text-lg text-[#3a4a67]">Dashboard Attendance</h1>
      <div className="flex items-center gap-x-4">
        <button className="px-4 py-2 bg-white rounded text-center border">
          --All Organization--
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-logout"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

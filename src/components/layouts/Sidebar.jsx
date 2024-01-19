const Sidebar = () => {
  return (
    <aside className="min-h-screen w-0 md:w-[60px] bg-[#991b1b] relative">
      <div className="w-6 h-6 rounded-full bg-[#67748e] hidden lg:flex justify-center items-center border-[2px] border-white text-white absolute top-7 -right-3 z-[9999999]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-down"
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
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </div>
    </aside>
  );
};

export default Sidebar;

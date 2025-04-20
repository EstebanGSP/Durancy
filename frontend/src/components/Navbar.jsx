const Navbar = () => {
    return (
      <header className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/logo-durancy.png" alt="Logo Durancy" className="h-10" />
          </div>
        </div>
  
        {/* Bande violette */}
        <div className="h-[20px] bg-purple-500 w-full"></div>
      </header>
    );
  };
  
  export default Navbar;
  
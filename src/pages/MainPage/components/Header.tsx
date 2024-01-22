import Navbar from '@/pages/MainPage/components/Navbar.tsx';

const Header = () => {
  return (
    <div className="w-full flex items-center h-[70px]">
      <div className="w-[200px]flex justify-center">
        <img
          className="w-[200px] pl-[20px]"
          src="../../../../public/Logo.png"
          alt="logo"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

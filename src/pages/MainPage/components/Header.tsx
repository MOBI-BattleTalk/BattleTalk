import Navbar from '@/pages/MainPage/components/Navbar.tsx';
import ProfileButton from '@/pages/MainPage/components/ProfileButton.tsx';

const Header = () => {
  return (
    <div className="w-full flex items-center h-[80px] justify-around bg-white bg-opacity-50 fixed top-0">
      <div className="w-[200px] flex justify-center">
        <img
          className="w-[200px] pl-[20px]"
          src="../../../../public/Logo.png"
          alt="logo"
        />
      </div>
      <Navbar />
      <div className="w-[200px]">
        <ProfileButton imgUrl={'../../../Profile.png'} nickname={'도라에몽'} />
      </div>
    </div>
  );
};

export default Header;

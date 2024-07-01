import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledTextField } from '@/components/ui';

const LoginView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-screen ">
      <div className="flex justify-center items-center flex-grow">
        <div className="flex flex-col p-4 sm:w-96 ">
          <img src="/brand_logo.png" alt="brand logo" className="w-full p-4" />
          <form action="" className="flex flex-col gap-4">
            <StyledTextField label="Email" size="medium" />
            <StyledTextField label="Password" size="medium" type="password" />
            <StyledButton
              onClick={() => {
                navigate('/');
              }}
            >
              Log In
            </StyledButton>
          </form>
        </div>
      </div>
      <img src="/loginSideBanner.jpg" alt="sidebanner" className="hidden lg:flex h-full" />
    </div>
  );
};

export default LoginView;

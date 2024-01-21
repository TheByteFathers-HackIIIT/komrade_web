import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.png';
import Logo from '../../images/logo/logo.png';

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('seshkey') !== null && localStorage.getItem('registered') === 'true') {
      navigate('/dashboard');
    }
  }, []);
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark full-height">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block responsive-size-logo-signin" src={Logo} alt="Logo" />
                <img className="dark:hidden responsive-size-logo-signin" src={LogoDark} alt="Logo" />
              </Link>

            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5 flex items-center justify-center flex-col">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign-in using College Email.
              </h2>
                <div className="mb-5 flex items-center justify-center">
                  {/* TODO: Change redirect URL */}
                  <Link to="https://login.iiit.ac.in/cas/login?service=http%3A%2F%2Flocalhost%3A5173%2Fcas">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign in
                    </button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

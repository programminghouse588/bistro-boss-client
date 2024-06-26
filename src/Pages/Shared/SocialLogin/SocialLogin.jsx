import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          toast.success("Google  Successful!");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSign = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Github  Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      id="third-party-auth"
      className="flex items-center justify-around mb-4 flex-wrap"
    >
      <button
        onClick={handleGoogleSign}
        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
      >
        <img
          className="max-w-[45px]"
          src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
          alt="Google"
        />
      </button>

      <button
        onClick={handleGithubSign}
        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
      >
        <img
          className="max-w-[45px] filter dark:invert"
          src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
          alt="Github"
        />
      </button>
    </div>
    // <div className="flex items-center justify-center space-x-4 mt-6">
    //   {" "}
    //   <button
    //     onClick={handleGithubSignUp}
    //     className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    //   >
    //     {" "}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 16 16"
    //       className="w-6 h-6 mr-3"
    //     >
    //       {" "}
    //       <path
    //         fillRule="evenodd"
    //         d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    //       />{" "}
    //     </svg>{" "}
    //     Github{" "}
    //   </button>{" "}
    //   <button
    //     onClick={handleGoogleSignUp}
    //     className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    //   >
    //     {" "}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-6 h-6 mr-3"
    //       viewBox="0 0 48 48"
    //     >
    //       {" "}
    //       <path
    //         fill="#fbc02d"
    //         d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    //       />{" "}
    //       <path
    //         fill="#e53935"
    //         d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    //       />{" "}
    //       <path
    //         fill="#4caf50"
    //         d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    //       />{" "}
    //       <path
    //         fill="#1565c0"
    //         d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    //       />{" "}
    //     </svg>{" "}
    //     Google{" "}
    //   </button>{" "}
    // </div>
  );
};

export default SocialLogin;

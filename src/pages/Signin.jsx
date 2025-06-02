import React, { useState } from 'react'
import { Link } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { userlogininformation } from '../slices/Userslice';

const Signin = () => {

  const dispatch = useDispatch()
  const provider = new GoogleAuthProvider();


  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()



  const handleemai = (e) => {
    setData((prev) => {
      return { ...prev, email: e.target.value }
    })
  }

  const handlepassword = (e) => {
    setData((prev) => {
      return { ...prev, password: e.target.value }
    })
  }



  const handlebutton = (e) => {
    e.preventDefault()
    if (!data.email || !data.password) {
      toast.error("This didn't work.")
    }

    if (data.email && data.password) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {

          const user = userCredential.user;

          if (user.emailVerified) {

            localStorage.setItem("login", JSON.stringify(user))
            navigate('/')
          }
          else {
            toast.error("Please varify your email")
          }
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode.includes("auth/invalid-credential"))
            toast.error("Invalid email or password")


          setData({
            email: '',
            password: ''
          })



          console.log(errorCode)
        });
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      toast.error("Invalid email addresh")

    }

    else {
      toast.success("Sign up Successfully")
    }
    console.log(data)
  }

  // close code //


  const handlegooglelogin = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(userlogininformation(user))
        navigate('/')

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)
      });
  }





  return (
    <section className="bg-gray-50 dark:bg-gray-900 bg-[url(/src/assets/pharmacy_img.png)] bg-no-repeat bg-center bg-cover">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href=""
          className="flex items-center mb-6 text-2xl font-normal text-white dark:text-white font-display bg-black p-5 rounded-2xl"
        >

          Hasib Medicin Center
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input onChange={handleemai}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input onChange={handlepassword}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={handlebutton}
                type="submit"
                className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:scale-110 transition duration-500 ease-in-out"
              >
                Log In
              </button>

              <button
                onClick={handlegooglelogin}
                type="submit"
                className=" text-black  hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 mx-25 
                hover:scale-110 transition duration-500 ease-in-out "
              >
                Sign in with google
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signin
import React, { useState } from 'react'
import { Link } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";

import { useSelector } from 'react-redux';



const Signup = () => {

  const dataa = useSelector((state) => state.logininformation)
  console.log(dataa)

  const auth = getAuth();

  const [data, setData] = useState({
    fastname: '',
    lastname: '',
    email: '',
    password: '',
    confrimpassword: '',
  });



  const navigate = useNavigate()



  // input //


  const handlefastname = (e) => {
    setData((prev) => {
      return { ...prev, fastname: e.target.value }
    })
  }

  const handlelastname = (e) => {
    setData((prev) => {
      return { ...prev, lastname: e.target.value }
    })
  }

  const handleemail = (e) => {
    setData((prev) => {
      return { ...prev, email: e.target.value }
    })
  }

  const handlepassword = (e) => {
    setData((prev) => {
      return { ...prev, password: e.target.value }
    })
  }

  const handleconfrimpassword = (e) => {
    setData((prev) => {
      return { ...prev, confrimpassword: e.target.value }
    })
  }


  // input close //



  const handlebutton = (e) => {
    e.preventDefault()
    if (!data.fastname || !data.lastname || !data.email || !data.password || !data.confrimpassword)
      toast.error("Please fill out the form.")
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
      toast.error("Invalid email addresh")

    else {

      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              toast.success("Sign up Successfully")
              updateProfile(auth.currentUser, {
                displayName: data.fastname,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                const user = userCredential.user;
                navigate("/")
                console.log(user)

              }).catch((error) => {

              });

            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("email-already-in-use"))
            toast.error("email already in use")

          setData({
            fastname: '',
            lastname: '',
            email: '',
            password: '',
            confrimpassword: '',
          })



          console.log(errorCode)
        });
    }






    console.log(data)
  }

  // close code //



  return (
    <section className="bg-gray-50 dark:bg-gray-900 bg-[url(/src/assets/pharmacy_img.png)] bg-no-repeat bg-center bg-cover">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-normal text-white dark:text-white font-display"
        >

          Hasib Medicine Center
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fast Name
                </label>
                <input onChange={handlefastname}
                  value={data.fastname}
                  type="text"
                  name="text"
                  id="text1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="atikulla"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input onChange={handlelastname}
                  value={data.lastname}
                  type="text"
                  name="text"
                  id="text2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="hasib"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input onChange={handleemail}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  value={data.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input onChange={handleconfrimpassword}
                  value={data.confrimpassword}
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button onClick={handlebutton}
                type="submit"
                className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:scale-110 transition duration-500 ease-in-out"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup
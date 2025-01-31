import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { FaEye } from "react-icons/fa";
import CardProfile from "../component/CardProfile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addProfile } from "../redux/reducers/profile";

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      first_name: profile.first_name,
      last_name: profile.last_name,
      phone_number: profile.phone_number,
      email: profile.email,
      password: profile.password,
    },
  });

  const onsubmit = (value) => {
    const fileInput = document.getElementById("image");
    const selected = fileInput.files[0];
  
    const formData = new FormData();
    formData.append("first_name", value.first_name);
    formData.append("last_name", value.last_name);
    formData.append("phone_number", value.phone_number);
    formData.append("email", value.email);
    formData.append("password", value.password);
    formData.append("image", selected);
  
    console.log("data =", fileInput);
    console.log("data =", selected);
    console.log(value);
  
    fetch("http://localhost:8888/profile", {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((response) => dispatch(addProfile(response.results)))
      .catch((error) => console.error(error));
  };
  
  React.useEffect(() => {
    if (profile) {
      reset({
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone_number: profile.phone_number,
        email: profile.email,
        image: profile.image,
        password: profile.password,
      });
    }
  }, [profile, reset]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar tittle="navbarhome" />
      <div className="bg-white pt-6 flex md:hidden justify-center gap-14  rounded-lg">
        <div className="border-b-orange-500 border-b-2 pb-6">
          Account Settings
        </div>
        <Link to="/orderhistory">Order History</Link>
      </div>
      <main className="pt-14 px-20 pb-24 flex gap-8 justify-center bg-gray-300">
        <CardProfile />
        <div className="hidden md:flex flex-col gap-12">
          <div className="bg-white pt-6 flex gap-14 pl-12 pr-[487px] rounded-lg">
            <div className="border-b-orange-500 border-b-2 pb-6">
              Account Settings
            </div>
            <Link to="/orderhistory">Order History</Link>
          </div>
          <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg">
              <div className="flex flex-col gap-4">
                <span>Details Information</span>
                <hr></hr>
              </div>
              <fieldset className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="first_name">First Name</label>
                  <div>
                    {profile.first_name !== "" ? (
                      <input
                        className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44"
                        type="text"
                        {...register("first_name", { required: true })}
                        id="first_name"
                        placeholder={profile.first_name}
                      />
                    ) : (
                      <input
                        className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44"
                        type="text"
                        {...register("first_name", { required: true })}
                        id="first_name"
                        placeholder="first name"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="last_name">Last Name</label>
                  <div>
                    {profile.last_name !== "" ? (
                      <input
                        className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44"
                        type="text"
                        {...register("last_name", { required: true })}
                        id="last_name"
                        placeholder={profile.last_name}
                      />
                    ) : (
                      <input
                        className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44"
                        type="text"
                        {...register("last_name", { required: true })}
                        id="last_name"
                        placeholder="last name"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">E-mail</label>
                  <div>
                    <input
                      className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44 placeholder:text-gray-800"
                      type="text"
                      placeholder={profile.email}
                      {...register("email", { required: true })}
                      id="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone_number">Phone Number</label>
                  <div className="py-5 pl-6 border rounded-xl border-gray-300 flex gap-5">
                    <span className="border-r-2 border-r-gray-300 pr-5 text-gray-300">
                      +62
                    </span>
                    {profile.phone_number !== "" ? (
                      <input
                        className=" outline-none"
                        type="tel"
                        {...register("phone_number", { required: true })}
                        id="phone_number"
                        placeholder={profile.phone_number}
                      />
                    ) : (
                      <input
                        className=" outline-none"
                        type="tel"
                        {...register("phone_number", { required: true })}
                        id="phone_number"
                        placeholder="82174589324"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <input
                    className="py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44 placeholder:text-gray-800"
                    type="file"
                    {...register("image", { required: true })}
                    id="image"
                  />
                </div>
              </fieldset>
            </div>
            <div className="bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg">
              <div className="flex flex-col gap-4">
                <span>Account and Privacy</span>
                <hr />
              </div>

              <fieldset className="flex gap-8">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">New Password</label>
                  <div className="flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7">
                    <input
                      className=" outline-none"
                      type="text"
                      {...register("password", { required: true })}
                      placeholder="Write your password"
                    />
                    <FaEye className="h-7 w-7 text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Confirm Password</label>
                  <div className="flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7">
                    <input
                      className="outline-none"
                      type="text"
                      placeholder="Confirm your password"
                    />
                    <FaEye className="h-7 w-7 text-gray-400" />
                  </div>
                </div>
              </fieldset>
            </div>
            <button className="bg-orange-400 hover:bg-orange-600 text-white w-80 h-14 flex justify-center items-center rounded-xl">
              Update changes
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;

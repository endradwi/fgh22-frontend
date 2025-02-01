import React from "react";
import star from "../assets/star.svg";
import lingkaran from "../assets/ellipse.svg";
import profile from "../assets/profileDefault.svg";
import ProfilePage from "./ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../redux/reducers/profile";
import { API_URL } from "../config/api-config";

const ALLOWED_EXT_TO_UPLOAD = ["image/jpeg", "image/jpg", "image/png"];

function CardProfile() {
  const [isShow, Setshow] = React.useState(false);
  const profile = useSelector((state) => state.profile.data);
  // const dispatch = useDispatch();
  // const [file, setfile] = React.useState({});
  const token = useSelector(state=>state.auth.token)
  // const selectImage = (e) => {
    // const selected = e.target.files[0];
    // const formData = new FormData();
    // formData.append("image", selected)
    // if (selected.size > 2 * 1024 * 1024) {
      // window.alert("File size to large");
      // return;
    // }
    // if (!ALLOWED_EXT_TO_UPLOAD.includes(selected.type)) {
      // window.alert("File type not supported");
    // }
    // Object.keys(e).forEach(key=>{
    //     formData.append(key. update(key))
    // })
    
    // if (selected.name){
    // selected.append('Image', selected)
    // }
    // fetch("http://localhost:8888/profile", {
      // method: "PATCH",
      // body: formData,
      // headers: {
        // "Content-type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      // },
    // })
    // .then((res)=>res.json())
    // .then((response)=> dispatch(addProfile(response.results)))
    // setfile(selected);
    // dispatch(addProfile(setfile(selected)))
    // ;
  // };
  return (
    <div>
      {isShow && (
        <>
          <ProfilePage />
        </>
      )}
      <div className="flex flex-col gap-0.5">
        <div className="bg-white px-10 py-10 rounded-t-lg flex flex-col gap-8 justify-center items-center">
          <div className="flex gap-40 items-center justify-between">
            <div>INFO</div>
            <div>. . .</div>
          </div>
          {/* <form className='w-full h-full flex flex-col justify-center items-center' onSubmit={updateImage}> */}
          <label className="flex flex-col justify-center items-center gap-5">
            <img
              className="w-[136px] aspect-square rounded-full cursor-pointer hover:opacity-50 hover:bg-black"
              src={profile.image === "" ? profile : `${API_URL}/profile/image/${profile.image}`}
              alt=""
            />
            {/* <span className=''>{file.name}</span> */}
            {/* <input */}
              {/* // type="file" */}
              {/* // id="image" */}
              {/* // onChange={selectImage} */}
              {/* // name="image" */}
              {/* // className="hidden" */}
            {/* // /> */}
          </label>
          {/* <button className='bg-slate-400 w-16 h-10 rounded border'>Upload File</button> */}
          {/* </form> */}
          <div className="flex flex-col justify-center items-center gap-1">
            {profile.first_name !== "" ? (
              <div>{profile.first_name + " " + profile.last_name}</div>
            ) : (
              <div>{profile.email}</div>
            )}
            <div>Moviegoers</div>
          </div>
        </div>
        <div className="bg-white px-10 py-10 rounded-b-lg md:hidden flex flex-col gap-8">
          <span>Loyalty Points</span>
          <div className="bg-orange-700 py-5 pl-5 pr-32 rounded-xl flex flex-col gap-5 text-white static">
            <div>Moviegoers</div>
            <div>
              320
              <span>points</span>
            </div>
            <img
              className="absolute left-[390px] top-[610px]"
              src={lingkaran}
              alt=""
            />
            <img
              className="absolute left-[370px] top-[600px]"
              src={lingkaran}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>180 points become a master</div>
            <div className="bg-gray-200 w-64 h-4 rounded-xl">
              <div className="bg-orange-600 w-24 h-4 rounded-xl"></div>
            </div>
          </div>
          <button
            onClick={() => Setshow(!isShow)}
            className="border border-orange-400 text-center py-3 rounded-xl block md:hidden"
          >
            Edit Profile
          </button>
        </div>
        <div className="bg-white px-10 py-10 rounded-b-lg hidden md:flex flex-col gap-8">
          <span>Loyalty Points</span>
          <div className="bg-orange-700 py-5 pl-5 pr-32 rounded-xl flex flex-col gap-5 text-white relative">
            <div>Moviegoers</div>
            <div>
              320
              <span>points</span>
            </div>
            <img
              className="absolute right-[-20px] top-[-10px]"
              src={lingkaran}
              alt=""
            />
            <img
              className="absolute right-[-10px] top-[-30px]"
              src={lingkaran}
              alt=""
            />
            <img className="absolute right-1 top-0" src={star} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <div>180 points become a master</div>
            <div className="bg-gray-200 w-64 h-4 rounded-xl">
              <div className="bg-orange-600 w-24 h-4 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;

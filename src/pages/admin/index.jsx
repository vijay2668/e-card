"use client";
// import { auth, db, storage } from "@/firebase";
import {
  currentMRROfStartup,
  currentMRROfStartupShow,
  extractDomainName,
  handleChange,
  handleOnBlur,
  handleStartupDelete,
  provideURL,
  startUpStatusShow
} from "@/provide";
import { arrayUnion, deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import getData from "@/fetch";
import Share from "../components/Share";
import { GrClose } from "react-icons/gr";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaLock } from "react-icons/fa";
import { auth, db, storage } from "@/firebase/config";
const socialMedia = ["Twitter", "GitHub", "YouTube", "LinkedIn", "Email"];

const AdminPage = () => {
  const router = useRouter();
  const [userUid, setuserUid] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [result, setresult] = useState("");
  const [check, setcheck] = useState(false);
  const [preview, setpreview] = useState(false);
  const [user] = useAuthState(auth);

  const get = async () =>{
    const Result = await getData();
    setresult(Result);
  }

  useEffect(() => {
    const get = async () => {
      if(user){
        localStorage.setItem("uid", user?.uid);
        localStorage.setItem("email", user?.email);
        const Result = await getData();
        setresult(Result);
        setuserUid(localStorage.getItem("uid"));
        setuserEmail(localStorage.getItem("email"));
        // console.log(user)
      }
    };

    get();
  }, [userUid, userEmail, router, user]);

  

  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState("");
  const [startUpURl, setStartUpURl] = useState("https://");
  const [socialMediaURL, setSocialMediaURL] = useState("");
  const [location, setLocation] = useState("");
  const [MRRGoal, setMRRGoal] = useState("");
  const [showTotalMRR, setShowTotalMRR] = useState(false);
  const [displayAsGoal, setDisplayAsGoal] = useState(false);
  const [show, setShow] = useState(true);
  const [addStartupInputShow, setAddStartupInputShow] = useState(false);
  const [socialBtnIndex, setSocialBtnIndex] = useState(0);
  const [bio, setBio] = useState("");
  const fileInputRef = useRef(null);
  const [inputValues, setInputValues] = useState({});
  const [currentMRRValues, setCurrentMRRValues] = useState({});
  const [currentMRRValuesShow, setCurrentMRRValuesShow] = useState({});

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const date = new Date().getTime();
    const storageRef = ref(storage, `${userUid + date}`);
    if (file) {
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          setSelectedFile(downloadURL);
        });
      });
    }
  };

  const iframeRef = useRef();
  const handleReload = () => {
    iframeRef.current.contentWindow.location.reload(true); // reload iframe content
  }
  

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  if (selectedFile !== null && userUid !== "" && userEmail !== "") {
    updateDoc(doc(db, "users", userUid), {
      uid: userUid,
      email: userEmail,
      photo: selectedFile,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2500);

  }

  if (username.length > 0 && !isActive1) {
    updateDoc(doc(db, "users", userUid), {
      username: username,
    });
    setTimeout(() => {
      handleReload();
      setUsername("")
      get();
    }, 1000);
  }

  if (bio.length > 0 && !isActive2) {
    updateDoc(doc(db, "users", userUid), {
      bio: bio,
    });
    setTimeout(() => {
      handleReload();
      setBio("")
      get();
    }, 1000);
  }

  if (location.length > 0 && !isActive3) {
    updateDoc(doc(db, "users", userUid), {
      location: location,
    });
    setTimeout(() => {
      handleReload();
      setLocation("");
      get();
    }, 1000);
  }

  if (showTotalMRR) {
    updateDoc(doc(db, "users", userUid), {
      showTotalMRR: showTotalMRR,
    });
    setTimeout(() => {
      handleReload();
      setShowTotalMRR(false);
      get();
    }, 1000);
  }

  if (displayAsGoal) {
    updateDoc(doc(db, "users", userUid), {
      displayAsGoal: displayAsGoal,
    });
    setTimeout(() => {
      handleReload();
      setDisplayAsGoal(false);
      get();
    }, 1000);
  }

  if (MRRGoal.length > 0 && !isActive4) {
    updateDoc(doc(db, "users", userUid), {
      MRRGoal: MRRGoal,
    });
    setTimeout(() => {
      handleReload();
      setMRRGoal('');
      get();
    }, 1000);
  }

  if (startUpURl.length > 8 && !isActive5) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayUnion({
        url: startUpURl,
      })
    });
    setTimeout(() => {
      handleReload();
      setStartUpURl('https://');
      get();
    }, 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (socialMediaURL.length > 0 && !isActive6) {
      updateDoc(doc(db, "users", userUid), {
        [socialMedia[socialBtnIndex]]: provideURL(
          socialMedia[socialBtnIndex],
          socialMediaURL
        )
      });
      setTimeout(() => {
        handleReload();
        setSocialMediaURL('');
        get();
      }, 1000);
    }
  }

  function activateButton(btn) {
    // get all buttons
    const buttons = document.querySelectorAll(".social-btn");

    // loop through all buttons and remove 'active' className
    buttons.forEach((button) => {
      button.classNameList.remove("bg-primary");
    });

    // add 'active' className to the clicked button
    btn.currentTarget.classNameList.add("bg-primary");
    // console.log(btn.target.textContent);
    if (btn.target.textContent.includes(socialMedia[socialBtnIndex])) {
      updateDoc(doc(db, "users", userUid), {
        [socialMedia[socialBtnIndex]]: deleteField()
      });
      setTimeout(() => {
        handleReload();
        get();
      }, 1000);
    }
  }

  
if(user && result){
  return (
    <main className="h-screen overflow-hidden relative ">
      {!preview ? (
        <>
          <header className="sticky top-0 bg-base-200 p-2 md:p-4 md:m-4 md:rounded-3xl mb-4 z-40">
            <div className="flex gap-2 justify-end border-b border-neutral/50 pb-2 mb-2 md:hidden">
              <Link
                className="btn btn-sm btn-primary gap-1"
                href="/admin/upgrade"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                  </svg>
                </span>
                <div className="text-sm">Upgrade</div>
              </Link>
              <button onClick={()=> setcheck(true)} className="btn btn-sm gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                  ></path>
                </svg>
                Share
              </button>
            </div>
            <div className="flex gap-2 justify-center md:hidden">
              <Link
                className="btn btn-square btn-ghost flex-col gap-1 flex-1 btn-active"
                href="/admin"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div className="text-[0.65rem] hidden">Page</div>
              </Link>
              <Link
                className="btn btn-square btn-ghost flex-col gap-1 flex-1 "
                href="/admin/appearance"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z"></path>
                  </svg>
                </span>
                <div className="text-[0.65rem] hidden">Theme</div>
              </Link>
              <Link
                className="btn btn-square btn-ghost flex-col gap-1 flex-1 "
                href="/admin/settings"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div className="text-[0.65rem] hidden">Settings</div>
              </Link>
            </div>
            <div className="hidden md:flex gap-2 lg:gap-4">
              <Link
                className="btn btn-sm lg:btn-md btn-ghost gap-1.5 btn-active"
                href="/admin"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div className="text-sm">Page</div>
              </Link>
              <Link
                className="btn btn-sm lg:btn-md btn-ghost gap-1.5 "
                href="/admin/appearance"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z"></path>
                  </svg>
                </span>
                <div className="text-sm">Theme</div>
              </Link>
              <Link
                className="btn btn-sm lg:btn-md btn-ghost gap-1.5 "
                href="/admin/settings"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div className="text-sm">Settings</div>
              </Link>
              <div className="flex ml-auto gap-2 lg:gap-4">
                <Link
                  className="btn btn-sm lg:btn-md  btn-primary gap-1.5"
                  href="/admin/upgrade"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                    </svg>
                  </span>
                  <div className="text-sm">Upgrade</div>
                </Link>
                <button
                  onClick={() => setcheck(true)}
                  className="btn btn-sm lg:btn-md gap-1.5 ml-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                    ></path>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </header>
          <div className="md:flex p-4 h-full overflow-scroll max-w-7xl mx-auto">
            {/* will Not change  */}
            <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
              <div className="relative p-4 rounded-3xl duration-200 select-none bg-base-300">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex gap-4">
                      <div
                        onClick={() => fileInputRef.current.click()}
                        className="relative inline-flex group"
                      >
                        {result?.photo && selectedFile === null ? (
                          <img
                            src={result?.photo}
                            alt="User profile"
                            className="w-12 h-12 rounded-full inline-block object-cover "
                            referrerPolicy="no-referrer"
                            width="48"
                            height="48"
                          />
                        ) : (
                          <img
                            src={selectedFile}
                            alt="User profile"
                            className="w-12 h-12 rounded-full inline-block object-cover "
                            referrerPolicy="no-referrer"
                            width="48"
                            height="48"
                          />
                        )}
                        <div className="absolute inset-0 z-20 flex justify-center items-center bg-transparent group-hover:bg-base-300/50 duration-200 cursor-pointer">
                          <button className="btn btn-square btn-sm  bg-neutral/50 border-neutral/0 group-hover:bg-neutral group-hover:border-neutral ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5 block"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <input
                          type="file"
                          name="picture"
                          className="file-input file-input-sm hidden"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={handleFileInputChange}
                        />
                      </div>
                      <div className="flex-1">
                        <span className="relative font-semibold w-full">
                          <input
                            onFocus={() => setIsActive1(true)}
                            onBlur={() => setIsActive1(false)}
                            type="text"
                            placeholder="Your name"
                            className="input  peer w-full placeholder:opacity-50 input-bordered"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="w-full">
                      <span className="relative inline-block w-full">
                        <textarea
                          onFocus={() => setIsActive2(true)}
                          onBlur={() => setIsActive2(false)}
                          type="text"
                          placeholder="I quit my job to build a profitable startup!"
                          className="textarea  peer placeholder:opacity-50 w-full h-16 textarea-bordered"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShow(true)}
                      className="btn btn-sm btn-square  btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z"></path>
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => setShow(false)}
                      className="btn btn-sm btn-square  btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z"></path>
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="border-t border-neutral ">
                    <div
                      className={`${
                        show ? "block" : "hidden"
                      } form-control w-full`}
                    >
                      <label className="label">
                        <span className="label-text">Where are you based?</span>
                      </label>
                      <div className="input-group">
                        <span className="bg-neutral">📍</span>
                        <input
                          onFocus={() => setIsActive3(true)}
                          onBlur={() => setIsActive3(false)}
                          type="text"
                          placeholder="Bali 🌴"
                          className="input  peer w-full placeholder:opacity-50 input-bordered"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={`${!show ? "block" : "hidden"}`}>
                      <div className="form-control flex-row">
                        <label className="label cursor-pointer gap-2">
                          <span className="label-text">
                            Show total MRR (all startups)
                          </span>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={showTotalMRR}
                            onChange={(e) => setShowTotalMRR(e.target.checked)}
                          />
                        </label>
                      </div>
                      <div className="form-control flex-row">
                        <label className="label cursor-pointer gap-2">
                          <span className="label-text">Display as goal</span>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={displayAsGoal}
                            onChange={(e) => setDisplayAsGoal(e.target.checked)}
                          />
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">MRR goal</span>
                        </label>
                        <div className="input-group">
                          <span className="bg-neutral">$</span>
                          <input
                            onFocus={() => setIsActive4(true)}
                            onBlur={() => setIsActive4(false)}
                            type="number"
                            placeholder="1000"
                            className="input  peer w-full placeholder:opacity-50 input-bordered"
                            value={MRRGoal}
                            onChange={(e) => setMRRGoal(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>

              <div className="relative p-4 rounded-3xl duration-200 select-none bg-base-300">
                <div className="space-y-4">
                  <div
                    className={`${
                      addStartupInputShow ? "block" : "hidden"
                    } flex items-center justify-between gap-4`}
                  >
                    <input
                      onFocus={() => setIsActive5(true)}
                      onBlur={() => setIsActive5(false)}
                      type="url"
                      placeholder="https://next-unicorn.com"
                      className="input  w-full placeholder:opacity-50 input-bordered "
                      value={startUpURl}
                      onChange={(e) => setStartUpURl(e.target.value)}
                    />
                    <button
                      onClick={() => setAddStartupInputShow(false)}
                      className="btn btn-square btn-ghost"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => setAddStartupInputShow(true)}
                    className={`btn ${result?.startUpURl?.length > 0 && "pointer-events-none flex items-center gap-2"} btn-primary btn-block ${
                      addStartupInputShow ? "hidden" : "block"
                    }`}
                  >
                    {result?.startUpURl?.length > 0 && <FaLock/>}
                    {result?.startUpURl?.length > 0 ? "Upgrade to add more startup" : "Add startup"}
                  </button>
                </div>
              </div>

              {/* startups */}
              <ul className="flex flex-col gap-5">
                {result?.startUpURl?.map((item, index) => (
                  <li key={index}>
                    <div className="space-y-4" data-rbd-droppable-id="startups">
                      <div>
                        <div className="relative p-4 bg-base-200 rounded-3xl duration-200 select-none hover:bg-base-300 cursor-pointer">
                          <div className="flex gap-4 items-stretch">
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="relative inline-flex group shrink-0">
                                  <img
                                    alt={extractDomainName(item?.url)}
                                    src={`https://www.google.com/s2/favicons?domain=${item?.url}`}
                                    className="w-10 h-10 shrink-0 drop-shadow object-cover "
                                    referrerPolicy="no-referrer"
                                    width="48"
                                    height="48"
                                  />
                                </div>
                                <span className="relative font-semibold w-full">
                                  <p className="font-bold mr-auto ml-2">
                                    {extractDomainName(item?.url)}
                                  </p>
                                </span>
                              </div>
                              {result?.startUpURl[index]?.note ===
                                undefined && (
                                <span className="relative w-full ">
                                  <input
                                    type="text"
                                    placeholder="Sell your startup!"
                                    className="input peer placeholder:opacity-50 w-full input-sm bg-transparent"
                                    name={`input${index}`}
                                    value={inputValues[`input${index}`]}
                                    onChange={(e) =>
                                      handleChange(e, setInputValues)
                                    }
                                    onBlur={(e) =>
                                      handleOnBlur(e, index, userUid, result, handleReload, get)
                                    }
                                  />
                                </span>
                              )}
                              <div className="flex gap-4">
                                <button
                                  onClick={() =>
                                    handleStartupDelete(index, result, userUid, handleReload, get)
                                  }
                                  className="btn btn-square btn-ghost btn-sm hover:btn-error"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* show or hide */}

                          {result?.startUpURl[index]?.note !== undefined && (
                            <div className="ml-[48px] mr-[64px] mt-2 border-t border-neutral pt-2">
                              <div className="flex flex-col gap-2">
                                {result?.startUpURl[index]?.currentMRR ===
                                  undefined && (
                                  <div className="form-control w-full">
                                    <label className="label pt-0">
                                      <span className="label-text">
                                        Current MRR
                                      </span>
                                    </label>
                                    <span className="relative input-group w-full">
                                      <span className="bg-neutral">$</span>
                                      <input
                                        type="number"
                                        placeholder="100"
                                        className="input peer w-full placeholder:opacity-50 input-bordered"
                                        name={`input${index}`}
                                        value={
                                          currentMRRValues[`input${index}`]
                                        }
                                        onChange={(e) =>
                                          currentMRROfStartup(
                                            e,
                                            setCurrentMRRValues
                                          )
                                        }
                                      />
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 peer-focus:hidden hidden"
                                      >
                                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                )}

                                {result?.startUpURl[index]?.currentMRRshow ===
                                  undefined && (
                                  <div className="form-control flex-row">
                                    <label className="label cursor-pointer gap-2">
                                      <span className="label-text">Show?</span>
                                      <input
                                        type="checkbox"
                                        className="checkbox"
                                        name={`input${index}`}
                                        value={
                                          currentMRRValuesShow[`input${index}`]
                                        }
                                        onChange={(e) =>
                                          currentMRROfStartupShow(
                                            e,
                                            index,
                                            userUid,
                                            result, handleReload, get
                                          )
                                        }
                                      />
                                    </label>
                                  </div>
                                )}

                                {result?.startUpURl[index]?.currentMRRshow &&
                                  result?.startUpURl[index]?.statusValue ===
                                    undefined && (
                                    <div className="form-control w-full">
                                      <label className="label pt-0">
                                        <span className="label-text">Status</span>
                                      </label>
                                      <select className="select input-bordered">
                                        <option value="" disabled="">
                                          Pick one
                                        </option>
                                        <option value="🏗️ Building...">
                                          🏗️ Building...
                                        </option>
                                        <option value="🟢 Active">
                                          🟢 Active
                                        </option>
                                        <option value="☕️ On hold">
                                          ☕️ On hold
                                        </option>
                                        <option value="💰 Acquired">
                                          💰 Acquired
                                        </option>
                                        <option value="❌ Discontinued">
                                          ❌ Discontinued
                                        </option>
                                      </select>
                                    </div>
                                  )}

                                {result?.startUpURl[index]?.currentMRRshow &&
                                  result?.startUpURl[index]?.statusShow ===
                                    undefined && (
                                    <div className="form-control flex-row">
                                      <label className="label cursor-pointer gap-2">
                                        <span className="label-text">Show?</span>
                                        <input
                                          type="checkbox"
                                          className="checkbox"
                                          value=""
                                          onChange={(e) =>
                                            startUpStatusShow(
                                              e,
                                              index,
                                              userUid,
                                              result, handleReload, get
                                            )
                                          }
                                        />
                                      </label>
                                    </div>
                                  )}
                              </div>
                            </div>
                          )}
                          {/* show or hide */}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* startups */}

              <div className="divider"></div>
              <div>
                <div className="flex items-center gap-2 overflow-y-scroll">
                  <button
                    onClick={(e) => {
                      setSocialBtnIndex(0);
                      activateButton(e);
                    }}
                    className="btn btn-square bg-primary fill-base-content btn-ghost social-btn"
                  >
                    {result?.Twitter ? (
                      <span className="text-xs capitalize">Remove Twitter</span>
                    ) : (
                      <svg
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currenColor"
                      >
                        <path d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      setSocialBtnIndex(1);
                      activateButton(e);
                    }}
                    className="btn btn-square fill-base-content btn-ghost social-btn"
                  >
                    {result?.GitHub ? (
                      <span className="text-xs capitalize">Remove GitHub</span>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currenColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      setSocialBtnIndex(2);
                      activateButton(e);
                    }}
                    className="btn btn-square fill-base-content btn-ghost social-btn"
                  >
                    {result?.YouTube ? (
                      <span className="text-xs capitalize">Remove YouTube</span>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currenColor"
                      >
                        <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      setSocialBtnIndex(3);
                      activateButton(e);
                    }}
                    className="btn btn-square fill-base-content btn-ghost social-btn"
                  >
                    {result?.LinkedIn ? (
                      <span className="text-xs capitalize">
                        Remove LinkedIn
                      </span>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currenColor"
                      >
                        <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path>
                        <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path>
                        <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      setSocialBtnIndex(4);
                      activateButton(e);
                    }}
                    className="btn btn-square fill-base-content btn-ghost social-btn"
                  >
                    {result?.Email ? (
                      <span className="text-xs capitalize">Remove Email</span>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currenColor"
                      >
                        <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                        <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                        <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                        <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
                      </svg>
                    )}
                  </button>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      {socialMedia[socialBtnIndex]}
                    </span>
                  </label>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      onFocus={() => setIsActive6(true)}
                      onBlur={() => setIsActive6(false)}
                      type="text"
                      placeholder={`Link to your ${socialMedia[socialBtnIndex]}`}
                      className="input  peer w-full placeholder:opacity-50 input-bordered"
                      value={socialMediaURL}
                      onChange={(e) => setSocialMediaURL(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>{" "}
                      Add
                    </button>
                  </form>
                </div>
              </div>
              <div className="divider"></div>
              <Link className="btn btn-block gap-2" href="/admin/upgrade">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"></path>
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"></path>
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"></path>
                </svg>
                Remove branding
              </Link>
            </div>
            {/* component */}
            <div className="hidden md:block md:basis-2/5">
              <div className="relative border-[8px] lg:border-[14px] border-black rounded-3xl lg:rounded-[3.5rem] w-64 lg:w-80 xl:w-96 aspect-[9/19] overflow-hidden max-w-sm mx-auto transitionfix">
                <div className="camera"></div>
                <div className="absolute inset-0 z-10">
                  {result?.name && (
                    <iframe
                      src={`https://up-page.netlify.app/${result?.name}?key=7&zoom=80&track=0`}
                      className="h-full w-full"
                      ref={iframeRef}
                    ></iframe>
                  )}
                </div>
              </div>
              <p className="text-sm text-base-content/80 mt-2 text-center select-all">
                {`localhost:3000/${result?.name}`}
              </p>
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://up-page.netlify.app/${result?.name}?key=7&zoom=80&track=0`}
          className="h-full w-full"
          ref={iframeRef}
        ></iframe>
      )}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-20">
        <button
          onClick={() => {
            if (preview) {
              setpreview(false);
            } else {
              setpreview(true);
            }
          }}
          className={`${
            preview && "bg-primary border-0 hover:bg-[#4406cc]"
          } btn gap-1 shadow-lg`}
        >
          {!preview ? (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Preview</span>
            </div>
          ) : (
            <GrClose className="text-xl" />
          )}
        </button>
      </div>

      {/* Share Component */}
      <Share check={check} setcheck={setcheck} result={result} />
    </main>
  );
}
};

export default AdminPage;

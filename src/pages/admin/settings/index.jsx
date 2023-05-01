"use client"
import getData from "@/fetch";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Share from "@/pages/components/Share";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const SettingsPage = () => {
  const [check, setcheck] = useState(false)
  const [email, setEmail] = useState("");
  const [result, setresult] = useState("")
  const [user] = useAuthState(auth);
  useEffect(()=>{
    const get = async () => {
      const Result = await getData();
      setresult(Result);
      setEmail(localStorage.getItem("email"));
    }
    
    get();
  },[result]);

  const router = useRouter();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  
  useEffect(()=>{
    if(!user){
      console.log("Sign-out successful.")
      localStorage.clear();
      router.push("/");
    }
  },[router, user])

// console.log(check)
if(user && result){
  return (
    <main className="mb-24">
      <header className="sticky top-0 bg-base-200 p-2 md:p-4 md:m-4 md:rounded-3xl mb-4 z-40">
        <div className="flex gap-2 justify-end border-b border-neutral/50 pb-2 mb-2 md:hidden">
          <Link className="btn btn-sm btn-primary gap-1" href="/admin/upgrade">
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
            className="btn btn-square btn-ghost flex-col gap-1 flex-1 "
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
            className="btn btn-square btn-ghost flex-col gap-1 flex-1 btn-active"
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
          <Link className="btn btn-sm lg:btn-md btn-ghost gap-1.5 " href="/admin">
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
            className="btn btn-sm lg:btn-md btn-ghost gap-1.5 btn-active"
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
            <button onClick={()=> setcheck(true)} className="btn btn-sm lg:btn-md gap-1.5 ml-auto">
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
      <div className="max-w-3xl mx-auto p-4 space-y-8 md:border-2 border-neutral md:shadow-lg rounded-3xl text-center">
        <div className="space-y-2">
          <p>Youre signed up as {email}</p>
          <p className="text-sm text-base-content/80 select-all">
            up-page.netlify.app/{result?.name || "your name"}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p>Your plan:</p>
          <span className="badge">☕️ Coffee Profitable - FREE</span>
        </div>
        <div className="divider"></div>
        <div className="flex justify-center">
          <button onClick={handleLogOut} className="btn btn-primary">Log out</button>
        </div>
      </div>

{/* share component */}
      <Share check={check} setcheck={setcheck} result={result}/>
    </main>
  );
}
};

export default SettingsPage;

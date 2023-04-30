import getData from "@/fetch";
import { auth, db } from "@/firebase";
import Share from "@/pages/components/Share";
import { doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GrClose } from "react-icons/gr";

const dataTheme = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"
];
const AppearancePage = () => {
  const [preview, setpreview] = useState(false);
  const [result, setresult] = useState("");
  const [check, setcheck] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const get = async () => {
      const Result = await getData();
      setresult(Result);
    };

    get();
  }, []);

  const iframeRef = useRef();
  const handleReload = () => {
    iframeRef.current.contentWindow.location.reload(true); // reload iframe content
  }

  const handleTheme = (e, index) => {
    let theme = e.currentTarget.dataset.theme;
    const uid = localStorage.getItem("uid");
  
    // Remove border classes from all elements
    const borderElems = document.querySelectorAll(".active");
    borderElems.forEach((elem) => {
      elem.classList.remove("border-4", "border-[#570DF8]");
    });
  
    // Add border classes to clicked element
    e.currentTarget.classList.add("border-4", "border-[#570DF8]");
  
    if (index < 2 && uid && theme) {
      updateDoc(doc(db, "users", uid), {
        theme: theme
      });
      setTimeout(() => {
        handleReload();
      }, 2000);
    }
  };
  
  
  if(user && result){
    return (
      <main className="h-screen overflow-hidden">
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
                  className="btn btn-square btn-ghost flex-col gap-1 flex-1 btn-active"
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
                  className="btn btn-sm lg:btn-md btn-ghost gap-1.5 "
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
                  className="btn btn-sm lg:btn-md btn-ghost gap-1.5 btn-active"
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
            <div className="flex gap-4 h-full p-4 max-w-7xl mx-auto overflow-scroll">
              <div className="grid max-w-xs auto-rows-max gap-4 md:gap-6 mx-auto md:basis-3/5 w-full overflow-y-auto pb-44">
                <div className="stack hover:block">
                  {dataTheme.map((theme, index) => (
                    <>
                      <div
                        key={index}
                        onClick={(e) => handleTheme(e, index)}
                        className="active hover:scale-100 rounded-2xl overflow-hidden cursor-pointer relative duration-200 w-full border-2 border-[#282a36]"
                        data-theme={theme}
                      >
                        <div className="grid grid-cols-4 h-24 md:h-28">
                          <div className="h-full bg-base-100"></div>
                          <div className="h-full bg-base-200"></div>
                          <div className="h-full bg-base-content"></div>
                          <div className="h-full bg-primary"></div>
                        </div>
                        <span className="absolute bottom-2 left-2 z-10 text-xs text-base-content/80">
                          {theme}
                        </span>
                        {index >= 2 && (
                          <div className="absolute inset-0 p-4 bg-base-200/50 z-30 flex justify-center items-center hover:bg-transparent duration-200">
                            <div>
                              <Link
                                className="btn btn-block btn-primary btn-sm gap-2 shadow-lg"
                                href="/admin/upgrade"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                Upgrade
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="hidden md:block md:basis-2/5">
              <div className="relative border-[8px] lg:border-[14px] border-black rounded-3xl lg:rounded-[3.5rem] w-64 lg:w-80 xl:w-96 aspect-[9/19] overflow-hidden max-w-sm mx-auto transitionfix">
                  <div className="camera"></div>
                  <div className="absolute inset-0 z-10">
                    {result?.name && (
                      <iframe
                        src={`http://localhost:3000/${result?.name}?key=7&zoom=80&track=0`}
                        className="h-full w-full"
                        ref={iframeRef}
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`http://localhost:3000/${result?.name}?key=7&zoom=80&track=0`}
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
  
        {/* share component */}
        <Share check={check} setcheck={setcheck} result={result} />
      </main>
    );
  }
};

export default AppearancePage;

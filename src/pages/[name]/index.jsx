"use client";
import {
  extractDomainName,
  formatNumber,
  provideIcon
} from "@/provide";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Share from "../components/Share";
import { db } from "@/firebase/config";

const UserData = () => {
  const router = useRouter();
  const { name } = router.query;

  const [result, setResult] = useState(null);
  const [check, setcheck] = useState(false);

  useEffect(() => {
    const get = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      let found = false;
      querySnapshot.forEach((doc) => {
        if (doc.data().name === name) {
          setResult(doc.data());
          found = true;
        }
      });
      if (!found) {
        setResult("not found");
      }
    };

    get();
  }, [name, result?.name]);

  
  if (result === "not found") {
    router.push("/404")
  }

  let social = [];
  let s;
  if (result?.Email) {
    s = {
      url: result?.Email,
      icon: provideIcon(result?.Email)
    };
    social.push(s);
  }
  if (result?.Twitter) {
    s = {
      url: result?.Twitter,
      icon: provideIcon(result?.Twitter)
    };
    social.push(s);
  }
  if (result?.GitHub) {
    s = {
      url: result?.GitHub,
      icon: provideIcon(result?.GitHub)
    };
    social.push(s);
  }
  if (result?.YouTube) {
    s = {
      url: result?.YouTube,
      icon: provideIcon(result?.YouTube)
    };
    social.push(s);
  }
  if (result?.LinkedIn) {
    s = {
      url: result?.LinkedIn,
      icon: provideIcon(result?.LinkedIn)
    };
    social.push(s);
  }

  let array = [];
  for (let i = 0; i < result?.startUpURl?.length; i++) {
    let currentMRR = result?.startUpURl[i]?.currentMRR;
    currentMRR = Number(currentMRR);
    array.push(currentMRR);
  }
  // console.log(array);

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let percentage = 0;
  sum ? percentage = (sum / result?.MRRGoal) * 100 : percentage = 0
  percentage = Math.floor(percentage);
  

    function calculateGoal() {
      if (percentage >= 0 && percentage <= 19) {
        return (
          <>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
          </>
        );
      } else if (percentage <= 39) {
        return (
          <>
            <span>🟧</span>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
          </>
        );
      } else if (percentage <= 59) {
        return (
          <>
            <span>🟧</span>
            <span>🟧</span>
            <span>⬜️</span>
            <span>⬜️</span>
            <span>⬜️</span>
          </>
        );
      } else if (percentage <= 79) {
        return (
          <>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
            <span>⬜️</span>
            <span>⬜️</span>
          </>
        );
      } else if (percentage <= 99) {
        return (
          <>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
            <span>⬜️</span>
          </>
        );
      } else {
        return (
          <>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
            <span>🟧</span>
          </>
        );
      }
    }
    
  if(result){
    return (
      <>
        <main
          className="h-screen overflow-scroll overflow-x-hidden"
          data-theme={result?.theme || "light"}
        >
          <div
            className="relative p-6 md:p-8 min-h-screen pb-24"
            style={{ zoom: "100%" }}
          >
            <div className="max-w-xl mx-auto md:border-2 md:p-4 md:rounded-3xl md:shadow-lg">
              <section className="text-center">
                <div className="flex gap-4 mb-4">
                  <div className="w-full h-full flex flex-col items-center text-center">
                    {result?.photo && (
                      <img
                        src={result?.photo}
                        alt="hunter profile picture"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                        width="80"
                        height="80"
                      />
                    )}
                    <div className="space-y-1 flex-1">
                      <p className="font-bold">{result?.username}</p>
                      <p className="">
                        {result?.location && (
                          <span>
                            📍{" "}
                            <span className="text-base-content/80">
                              {result?.location}
                            </span>
                          </span>
                        )}
                      </p>
                      <div>
                        <div className="text-base flex gap-1 items-center">
                          {result?.showTotalMRR &&
                          result?.MRRGoal === undefined ? (
                            <p className="text-base-content/80 whitespace-nowrap">
                              💰 ${formatNumber(sum)} MRR
                            </p>
                          ) : (
                            ""
                          )}
  
                          {percentage <= 100 && result?.displayAsGoal &&
                          result?.MRRGoal !== undefined ? (
                            <span className="whitespace-nowrap">
                              {calculateGoal(sum, result?.MRRGoal)}
                            </span>
                          ) : (
                            ""
                          )}
                          {percentage <= 100 && result?.MRRGoal && (
                            <p className="text-base-content/80 whitespace-nowrap">
                              ${result?.MRRGoal}/mo
                            </p>
                          )}
                          {percentage > 100 && (
                            <p className="bg-neutral/80 p-4 whitespace-break-spaces rounded-xl text-success">
                              Congratulation!, Your income exceeds your goal.
                            </p>
                          )}
  
  
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setcheck(true)}
                    className="btn btn-square btn-primary btn-sm "
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
                  </button>
                </div>
                <p className="text-base-content/80">{result?.bio}</p>
              </section>
              <div className="divider"></div>
              <section>
                <ul className="space-y-4">
                  {result?.startUpURl?.map((item, index) => (
                    <li key={index}>
                      <a
                        className="card cursor-pointer bg-base-200 hover:bg-base-300 duration-200 space-y-1 p-4 group hover:scale-[1.02]"
                        href={item?.url}
                        target="_blank"
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${item?.url}`}
                            alt={extractDomainName(item?.url)}
                            className="w-5 h-5  duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100"
                            width="20"
                            height="20"
                          />
                          <p className="font-bold mr-auto">
                            {extractDomainName(item?.url)}
                          </p>
                          <div className=" flex gap-2">
                            {result?.startUpURl[index]?.currentMRRshow && (
                              <span className="badge badge-sm whitespace-nowrap duration-200">
                                {`$${formatNumber(
                                  result?.startUpURl[index]?.currentMRR
                                )}/mo`}
                              </span>
                            )}
                            {result?.startUpURl[index]?.statusShow && (
                              <span className="badge badge-sm whitespace-nowrap badge-success">
                                {result?.startUpURl[index]?.statusValue}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-base-content/80">
                          {result?.startUpURl[index]?.note}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <div className="divider"></div>
              <ul className="flex justify-center items-center gap-2 md:gap-4 flex-wrap ">
                {social.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="btn btn-square btn-ghost group rounded-lg"
                      href={item.url}
                      target="_blank"
                    >
                      <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                        {item.icon}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 select-none">
              <div className="px-3 py-1.5 bg-neutral text-neutral-content flex items-center gap-1 rounded-lg text-sm cursor-pointer shadow-lg group hover:scale-[1.02] hover:shadow-xl duration-200">
                {/* <Image
                  alt="Indie Page logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="h-5 w-5 group-hover:scale-110 group-hover:-rotate-6 group-hover:drop-shadow duration-150 delay-100"
                  style={{color:"transparent"}}
                  srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.da7805e6.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.da7805e6.png&amp;w=48&amp;q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.da7805e6.png&amp;w=48&amp;q=75"
                /> */}
                <div className="font-medium">
                  Built
                  <span className="inline md:hidden">w/</span>
                  <span className="hidden md:inline">with</span>
                  Indie Page
                </div>
              </div>
            </div>
          </div>
          {/* share component */}
          <Share check={check} setcheck={setcheck} result={result} />
        </main>
      </>
    );
  }
};

export default UserData;

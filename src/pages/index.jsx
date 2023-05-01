"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      localStorage.setItem("name", name);
      router.push("/login");
    }
  }
  return (
    <div id="__next">
      <main>
        <section className="min-h-screen max-w-6xl mx-auto p-6 pb-0">
          <header className="flex justify-between gap-4 mb-4 md:mb-6">
            <Link className="flex items-center gap-2" href="">
              <img
                alt="Up Page logo"
                width="500"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                srcSet=""
                src=""
              />
              <p className="font-semibold">Up Page</p>
            </Link>
            <div className="hidden md:inline-flex items-center gap-8 flex-1 px-16">
              <Link className="link link-hover" href="#pricing">
                Pricing
              </Link>
              <Link className="link link-hover" href="#signup">
                Signup
              </Link>
            </div>
            <Link href="/login">
              <button className="btn btn-sm">Log in</button>
            </Link>
          </header>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-8 max-w-xl">
              <h1 className="text-4xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight">
                All your startups, on a page
              </h1>
              <p className="text-lg text-base-content-secondary leading-7">
                Linktree for entrepreneurs. Everything you build, your apps,
                your MRR, in one simple link in bio.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 undefined">
                <div className="flex-1">
                  <div className="form-control border border-base-content/20 rounded-lg ">
                    <label className="input-group group w-full">
                      <span className='whitespace-nowrap bg-base-300 text-base-content/60 pr-0 select-none"'>
                        up-page.netlify.app/
                      </span>
                      <input
                        type="text"
                        placeholder="yourname"
                        className="input placeholder:text-base-content/60 pl-0.5 w-full min-w-[8rem] bg-base-300"
                        autoCapitalize="none"
                        autoComplete="off"
                        spellCheck="false"
                        minLength="2"
                        maxLength="20"
                        required=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-wide group "
                  type="submit"
                >
                  Claim your Up page{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 duration-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="relative border-[8px] lg:border-[14px] border-black rounded-3xl lg:rounded-[3.5rem] w-64 lg:w-80 xl:w-96 aspect-[9/19] overflow-hidden max-w-sm mx-auto transitionfix">
              <div className="camera"></div>
              <div className="absolute inset-0 z-10">
                <iframe className="w-full h-full" src="https://up-page.netlify.app/vijay" ></iframe>
              </div>
            </div>
            {/* <div className="border-t-[12px] border-l-[12px] border-r-[12px] lg:border-[14px]  border-black/75 bg-base-100 rounded-t-[3.5rem] lg:rounded-[4rem] overflow-hidden max-h-[28rem] md:max-h-none md:max-w-[24rem] md:aspect-[9/18] md:order-first">
              <img
                alt="Marc Lou Indie Page"
                width="850"
                height="1838"
                decoding="async"
                data-nimg="1"
                className="duration-200 animate-appearFromRight rounded-t-3xl lg:rounded-3xl"
                srcSet=""
                src=""
                style={{ color: "transparent" }}
              />
            </div> */}
          </div>
        </section>
        {/* <section className="bg-base-200 p-6 py-16 md:py-32">
          <div className="space-y-12 md:space-y-24">
            <h3 className="text-center text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
              Join 472 Indie Hackers!
            </h3>
            <div className="overflow-scroll -mx-6 px-6 space-y-4">
              <div className="flex gap-4 items-center -ml-2">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/nomadito"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="nomadito profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Nomadito
                      </p>
                      <span className="badge whitespace-nowrap">
                        3 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/nafetswirth"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="nafetswirth profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Stefan Wirth
                      </p>
                      <span className="badge whitespace-nowrap">
                        3 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/martin"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="martin profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        {" "}
                        🧞‍♂️ Martin Donadieu in romania 🇷🇴
                      </p>
                      <span className="badge whitespace-nowrap">
                        5 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/marclou"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="marclou profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Marc Lou
                      </p>
                      <span className="badge whitespace-nowrap">
                        17 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/justlilian"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="justlilian profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Lilian ッ
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/jhumanj"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="jhumanj profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        🚂 Julien Nahum
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/thuan"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      T
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        thuan
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/jakkrapat"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="jakkrapat profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        JakkrapatAmp
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/buinam"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="buinam profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Casey Bui
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/rasel"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      R
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Rasel Mahamud
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
              </div>
              <div className="flex gap-4 items-center  -ml-24">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/raj"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="raj profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Raj Padalia
                      </p>
                      <span className="badge whitespace-nowrap">
                        8 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/tee"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="tee profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Mr. Tee
                      </p>
                      <span className="badge whitespace-nowrap">
                        2 startup s
                      </span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/gergodfrey"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="gergodfrey profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Luis Gerardo Godfrey Castañeda
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/andres"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="andres profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Andrés
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/richmca"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="richmca profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Rich McAuley
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/surfinglife"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="surfinglife profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Slide.On
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/alexcarlier"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="alexcarlier profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Alex Carlier
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/csallen"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="csallen profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Bad Janet
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/jtn"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="jtn profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Jigme T Namgyal (2/10)
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/naz"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="naz profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Naz 🥑
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
              </div>
              <div className="flex gap-4 items-center ml-12">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/hunter"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      H
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        hunter
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/atharva"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      A
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        atharva
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/codeblooded47"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="codeblooded47 profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Md Hassan
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/alberduris"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="alberduris profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Alber
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/zuck"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="zuck profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Mattia Zucchini
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/yy"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="yy profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Yura Yazlovytskyy
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/omertaban"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="omertaban profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Ömer Taban
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/tobiastalltorp"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="tobiastalltorp profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Tobias Talltorp
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/ankityadav"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="ankityadav profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Ankit Yadav
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group"
                  href="/custusfox"
                  target="_blank"
                >
                  <div className="flex gap-4">
                    <span className="w-12 h-12 md:w-18 md:h-18 rounded-full bg-base-100 flex justify-center items-center group-hover:-rotate-3 duration-200">
                      <img
                        src=""
                        alt="custusfox profile picture"
                        className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100"
                        width="48"
                        height="48"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold truncate w-28 group-hover:underline duration-200">
                        Black Fox
                      </p>
                      <span className="badge whitespace-nowrap">1 startup</span>
                    </div>
                  </div>
                  <p className="text-base-content/80"></p>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-base-200 p-6 py-16 md:py-32">
          <div className=" text-center place-content-center max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
            {/* <video
              className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20"
              autoPlay=""
              muted=""
              loop=""
              playsInline=""
              controls=""
              width="500"
              height="500"
            >
              <source
                src="https://d3m8mk7e1mf7xn.cloudfront.net/app/create.mp4"
                type="video/mp4"
              />
            </video> */}
            <div className="space-y-6 md:space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
                Create your Indie Page in minutes
              </h2>
              <p className="text-base-content-secondary">
                List your apps, courses, revenue goal, failed and successful
                startups. No more forgotten projects, they all add-on to your
                collection!
              </p>
              <Link
                className="btn btn-block btn-primary md:btn-wide"
                href="#signup"
              >
                Start for free
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="bg-base-100 p-6 py-16 md:py-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
            <video
              className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20"
              autoPlay=""
              muted=""
              loop=""
              playsInline=""
              controls=""
              width="500"
              height="500"
            >
              <source
                src="https://d3m8mk7e1mf7xn.cloudfront.net/app/analytics.mp4"
                type="video/mp4"
              />
            </video>
            <div className="space-y-6 md:space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
                Analyze your audience, build what matters most
              </h2>
              <p className="text-base-content-secondary">
                Track traffic and clicks on your links. Find out what your
                followers enjoy the most, rinse and repeat.
              </p>
              <Link
                className="btn btn-block btn-primary md:btn-wide"
                href="#signup"
              >
                Get my Indie Page
              </Link>
            </div>
          </div>
        </section> */}
        <section className="bg-base-200 p-6 py-16 md:py-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
            <video
              className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20"
              autoPlay=""
              muted=""
              loop=""
              playsInline=""
              controls=""
              width="500"
              height="500"
            >
              <source
                src="https://d3m8mk7e1mf7xn.cloudfront.net/app/themes.mp4"
                type="video/mp4"
              />
            </video>
            <div className="space-y-6 md:space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
                Everything you are, on one page
              </h2>
              <ul className="text-base-content-secondary space-y-3">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary"
                  >
                    <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z"></path>
                  </svg>{" "}
                  29 themes
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary"
                  >
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z"></path>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  Revenue goal
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  All your startups
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  Digital nomad location
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary"
                  >
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                  </svg>{" "}
                  Twitter, Youtube, and more social links
                </li>
              </ul>
              <Link
                className="btn btn-block btn-primary md:btn-wide"
                href="#signup"
              >
                Claim my Indie Page
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="bg-base-200 p-6 py-16 md:py-32">
          <div className="space-y-12 md:space-y-24">
            <div className="text-center space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
                54 startups in building mode... 🏗️
              </h3>
              <p className="flex items-center gap-2 justify-center text-base-content-secondary">
                <span className="relative inline-flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                Updated hourly, sorted by newest
              </p>
            </div>
            <div className="overflow-scroll -mx-6 px-6 space-y-4">
              <div className="flex gap-4 -ml-3">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/nafetswirth"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Swiftbrief Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Swiftbrief
                      </p>
                      <p className="text-base-content/80 ">
                        Your content Strategy on Autopilot
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/nafetswirth"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Calm OS Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Calm OS
                      </p>
                      <p className="text-base-content/80 ">
                        Guides on building a profitable without going crazy
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/martin"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Landing-ai Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Landing-ai
                      </p>
                      <p className="text-base-content/80 ">
                        Create your landing with Ai
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/marclou"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Indie Page Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Indie Page
                      </p>
                      <p className="text-base-content/80 ">
                        All your startups in a link!
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/marclou"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Landing AI Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Landing AI
                      </p>
                      <p className="text-base-content/80 ">
                        Make beautiful websites in seconds with AI
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/custusfox"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="MileStone Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        MileStone
                      </p>
                      <p className="text-base-content/80 ">
                        You want to track your longterm life goals? Thats the
                        right app for that!
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/ak"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Sharestory Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Sharestory
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/zain"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Getchasm Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Getchasm
                      </p>
                      <p className="text-base-content/80 ">
                        Build Two-Factor and Passwordless Authentication flows
                        in minutes
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/dmoutouss"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Work in Progress Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Work in Progress
                      </p>
                      <p className="text-base-content/80 ">
                        Unnanounced. Follow my Twitter for Updates
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/dmoutouss"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Recapit Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Recapit
                      </p>
                      <p className="text-base-content/80 ">
                        AI-Curated &amp; Personalized Audio News Daily
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex gap-4 -ml-24">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/alex_"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Master Yourself Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Master Yourself
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/mdsahilak"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Timewave Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Timewave
                      </p>
                      <p className="text-base-content/80 ">
                        Flowing Timers on iPad, iPhone and Apple Watch.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/simon"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Hackercabin Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Hackercabin
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/fryingneurons"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Hairstyleai Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Hairstyleai
                      </p>
                      <p className="text-base-content/80 ">
                        Try new hairstyles with AI technology
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/sponno"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="GoodSign - Get documents signed, fast. Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        GoodSign - Get documents signed, fast.
                      </p>
                      <p className="text-base-content/80 ">
                        The easiest way to send documents and get this signed
                        quickly!
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/njgroene"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="everyme.ai Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        everyme.ai
                      </p>
                      <p className="text-base-content/80 ">
                        Turn your selfies into beautiful headshots ✨🤗
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/pwang_szn"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Tinder Glowup Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Tinder Glowup
                      </p>
                      <p className="text-base-content/80 ">
                        AI generated Abs pics
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/magiobus"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Amlopedia Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Amlopedia
                      </p>
                      <p className="text-base-content/80 ">
                        The ultimate tool for searching through AMLOs morning
                        press conferences (Mañane...
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/oliverservin"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Oliver Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Oliver
                      </p>
                      <p className="text-base-content/80 ">salads</p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/rados"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Motion.page Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Motion.page
                      </p>
                      <p className="text-base-content/80 ">
                        👾 No-code animation tool for WordPress sites
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex gap-4 ml-12">
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/encrypted"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Aurol Media Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Aurol Media
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/cyril"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="GP Calendar 🏁 Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        GP Calendar 🏁
                      </p>
                      <p className="text-base-content/80 ">
                        Stop missing a race start 🚥
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/timgedenk"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Divity Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Divity
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/todd"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Juicesauce Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Juicesauce
                      </p>
                      <p className="text-base-content/80 ">
                        AI e-liquid diy recipes
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/thejaymu"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Birdninja Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Birdninja
                      </p>
                      <p className="text-base-content/80 ">
                        Twitter Chrome Extenion that makes your life easier
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/thejaymu"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="DevTabs Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        DevTabs
                      </p>
                      <p className="text-base-content/80 ">
                        HTTP Cron Scheduler
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/arshad"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Github Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Github
                      </p>
                      <p className="text-base-content/80 ">Working</p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/maelus"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Whisperize Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Whisperize
                      </p>
                      <p className="text-base-content/80 ">
                        The Whatsapp bot to read your voice messages 🎧
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/andreiterteci"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="Notescribe Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        Notescribe
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="bg-base-300 p-6 rounded-2xl group w-80 md:w-96 shrink-0 "
                  href="/kyebedford"
                  target="_blank"
                >
                  <div className="flex gap-4 overflow-hidden">
                    <img
                      src=""
                      alt="TeachEase Logo"
                      className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover bg-base-100 group-hover:scale-[1.05] duration-200"
                      width="48"
                      height="48"
                    />
                    <div className="flex-1">
                      <p className="font-bold truncate group-hover:underline duration-200 mb-1">
                        TeachEase
                      </p>
                      <p className="text-base-content/80 ">
                        Helping teachers save hundreds of hours, lesson
                        planning, marking etc.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <section
          id="pricing"
          className="max-w-6xl mx-auto p-6 py-16 md:py-32 space-y-8 md:space-y-12"
        >
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
              Your Indie Page is free
            </h2>
            <p className="text-base-content-secondary">
              Unlock advanced features with the lifetime deal!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row gap-8 md:gap-12">
            <div className="p-8 md:p-12 bg-base-200 space-y-8 rounded-3xl w-full md:w-96">
              <p className="text-primary font-semibold md:text-lg">
                ☕️ Coffee Profitable
              </p>
              <div className="flex items-baseline gap-x-2">
                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  $0
                </span>
              </div>
              <ul className="space-y-4 text-base-content-secondary">
                <li className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  1 startup
                </li>
                <li className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline text-primary shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  2 themes
                </li>
              </ul>
              <Link
                className="btn btn-block btn-primary btn-outline"
                href="#signup"
              >
                Get my Indie Page
              </Link>
            </div>
            <div className="relative p-8 md:p-12 bg-base-200 text-base-content rounded-3xl w-full md:w-96 group">
              <div className="space-y-8 relative z-10">
                <p className="text-primary font-semibold md:text-lg">
                  🍜 Ramen Profitable
                </p>
                <div className="flex items-baseline gap-x-2">
                  <span className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                    $19
                  </span>
                  <span className="text-base-content-secondary">USD</span>
                  <span className="badge badge-accent whitespace-nowrap">
                    Lifetime deal on beta!
                  </span>
                </div>
                <div>
                  <ul className="space-y-3 text-base-content-secondary">
                    <li className="flex items-center gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline text-primary shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Unlimited startups
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline text-primary shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      29 themes
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline text-primary shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      No branding
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline text-primary shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Traffic &amp; click analytics
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="btn btn-block btn-primary" href="#signup">
                    Get my Indie Page
                  </Link>
                  <p className="text-base-content-secondary text-sm text-center mt-2">
                    One-time payment.{" "}
                    <span className="underline decoration-accent underline-offset-2 decoration-2">
                      No subscription
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute inset-2 blur-lg bg-accent/75 -z-10 group-hover:inset-1 group-hover:bg-accent/100 duration-200"></div>
            </div>
          </div>
        </section>
        {/* <section className="max-w-7xl mx-auto p-6 py-16 md:py-32 space-y-4 md:columns-2 lg:md:columns-3">
          <div>
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-0"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "274px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1644321687620444161&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1644321687620444161"
              ></iframe>
            </div>
          </div>
          <div>
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-1"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "274px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1644706944584929286&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1644706944584929286"
              ></iframe>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-2"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "517px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-2&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1646753173476978688&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1646753173476978688"
              ></iframe>
            </div>
          </div>
          <div>
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-3"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "1103px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-3&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1644527222160777217&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1644527222160777217"
              ></iframe>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-4"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "516px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-4&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1644664157566820352&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1644664157566820352"
              ></iframe>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-5"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "250px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-5&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1642844803959275522&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1642844803959275522"
              ></iframe>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <iframe
                id="twitter-widget-6"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "400px",
                  height: "400px",
                  display: "block",
                  flexGrow: "1"
                }}
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-6&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1642516635524136961&amp;lang=en&amp;origin=https%3A%2F%2Findiepa.ge%2F&amp;sessionId=a3970fe591f4f803db52dbc279a1f9a9b315db61&amp;theme=dark&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
                data-tweet-id="1642516635524136961"
              ></iframe>
            </div>
          </div>
        </section> */}
        <section className="relative overflow-hidden h-screen" id="signup">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[65%] md:translate-y-[75%] h-[50rem] md:h-[110rem] aspect-square bg-accent/20 blur-3xl md:blur-[150px] rounded-full -z-10"></span>
          <div className=" max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center space-y-12 md:space-y-24 p-6">
            <h2 className="text-5xl font-extrabold tracking-tight leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
              Show off your startups!
            </h2>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 w-full justify-center">
                <div className="flex-1">
                  <div className="form-control border border-base-content/20 rounded-lg ">
                    <label className="input-group group w-full">
                      <span className='whitespace-nowrap bg-base-200 text-base-content/60 pr-0 select-none"'>
                        up-page.netlify.app/
                      </span>
                      <input
                        type="text"
                        placeholder="yourname"
                        className="input placeholder:text-base-content/60 pl-0.5 w-full min-w-[8rem] bg-base-200"
                        autoCapitalize="none"
                        autoComplete="off"
                        spellCheck="false"
                        minLength="2"
                        maxLength="20"
                        required=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-primary group btn-block"
                  type="submit"
                >
                  Claim your indie page{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 duration-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="p-10 md:p-16 bg-base-300 text-base-content">
          <div className="max-w-6xl mx-auto">
            <footer className="footer">
              <div>
                <span className="footer-title">Up Page</span>
                <Link className="link link-hover" href="/login">
                  Login
                </Link>
                <Link className="link link-hover" href="#signup">
                  Signup
                </Link>
              </div>
              {/* <div>
                <span className="footer-title">Boring</span>
                <Link className="link link-hover" href="/privacy-policy">
                  Privacy policy
                </Link>
                <Link className="link link-hover" href="/tos">
                  Terms of service
                </Link>
              </div> */}
            </footer>
          </div>
        </div>
        {/* <Link
          className="fixed bottom-0 right-0 bg-base-100 py-2 px-4 z-10 cursor-pointer rounded-tl-xl border-t border-l border-base-content/20  border-dashed text-sm font-semibold hover:bg-base-200 duration-200 group"
          href="https://twitter.com/marc_louvion"
          target="_blank"
          rel="noreferrer"
        > */}
          {/* <div className="flex flex-row justify-center items-center text-center gap-1.5">
            <div>
              By <span className="link link-accent">Marc</span>
            </div>
            <div className="avatar -mt-1 -mb-1">
              <div className="relative w-7 rounded-full group-hover:rotate-12 group-hover:scale-110 duration-300">
                <img
                  alt="Marc Lou"
                  width="240"
                  height="240"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet=""
                  src=""
                />
              </div>
            </div>
          </div> */}
        {/* </Link> */}
      </main>
    </div>
  );
}

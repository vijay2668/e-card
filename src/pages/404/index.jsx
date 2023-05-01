import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [name, setname] = useState('');
  if(name){
    localStorage.setItem("name", name);
  }

  function handleSubmit (e){
    e.preventDefault();
    name && router.push("/login");
  }

  return (
    <div className="p-6">
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        This user does not exist, yet! 😉
      </h1>
      <p className="md:text-lg">
        Create your Indie Page to showcase your startups!
      </p>
      <form onSubmit={handleSubmit} className="flex justify-center flex-wrap gap-2">
        <input
          type="text"
          placeholder="@username"
          className="input input-bordered py-2 px-4 text-base-100 rounded-full"
          autoCapitalize="none"
          autoComplete="off"
          spellCheck="false"
          required=""
          value={name}
          onChange={(e)=> setname(e.target.value)}
        />
        <button type="submit" className="flex items-center py-2 px-6 btn btn-primary text-white rounded-full transition duration-200">
          Claim your indie page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
      <div className="text-center">
        <Link className="py-2 px-6 btn rounded-full" href="/">
          Go home instead
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default NotFound;

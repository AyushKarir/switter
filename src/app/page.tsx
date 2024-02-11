'use client';
import React, { useCallback } from "react";
import Head from "next/head";
import RootLayout from "./";
import Image from "next/image";
import { BiHash, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { RiQuillPenLine } from "react-icons/ri";
import FeedCard from "./components/FeedCard";
import { CgMoreO } from "react-icons/cg";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "../../clients/api";
import { verifyUserGoogleTokenQuery } from "../../graphql/query/user";
import { useCurrentUser } from "../../hooks/custom";
import { useQueryClient } from "@tanstack/react-query";


const sideBarMenuItems = [
  {
    icon: <GoHomeFill />
  },
  {
    icon: <BiHash />
  },
  {
    icon: <BsBell />
  },
  {
    icon: <BsEnvelope />
  },
  {
    icon: <BsBookmark />
  },
  {
    icon: <BiUser />
  },
  {
    icon: <CgMoreO />
  }
];

export default function Home() {

  const { user } = useCurrentUser();
  console.log(user);

  const queryClient = useQueryClient();


  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error(`Google login not found `)

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken });

    toast.success('verifies success');
    console.log(verifyGoogleToken);
    if (verifyGoogleToken) {
      window.localStorage.setItem("__stwitter_token", verifyGoogleToken);
    } 
    await queryClient.invalidateQueries(['current-user']);
  },
    [queryClient]
  );

  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add any other metadata or links here */}
      </Head>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-2  p-8 relative">
          <div className="text-5xl flex justify-center transition-all h-fit hover:bg-gray-600 rounded-full py-2 cursor-pointer ">
            <BsTwitterX />
          </div>
          <div className="mt-2">
            <ul>
              {sideBarMenuItems.map((item, index) => (
                <li
                  className="flex justify-center cursor-pointer hover:bg-gray-800 transition-all text-3xl rounded-full px-3 py-2"
                  key={index}
                >
                  <span className="">{item.icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 flex justify-center items-center  cursor-pointer bg-[#1d9bf0] transition-all  rounded-full px-4 py-2">
            {" "}
            <span className="text-4xl">+</span>{" "}
          </div>
          {user &&
            <div className="absolute bottom-5 flex items-center gap-3 bg-slate-800 px-3 py-2 rounded-full">
              {
                user
                &&
                user.profileImageURL
                &&
                <Image className="rounded-full" src={user?.profileImageURL} alt="user-image" height={50} width={50} />
              }
              <p className="text-xl">{user.firstName}</p>
            </div>
          }
        </div>
        <div className="col-span-8 border-r-[1px] border-l-[1px] border-slate-400 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-2">
          {!user && <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Switter?</h1>
            <GoogleLogin
              onSuccess={handleLoginWithGoogle}
            />
          </div>}
        </div>
      </div>
    </div>
  );
}

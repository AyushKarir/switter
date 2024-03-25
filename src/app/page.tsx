'use client';
import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { BiHash, BiImageAlt, BiUser } from "react-icons/bi";

import FeedCard from "./components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import { useCurrentUser } from "../../hooks/custom";

import { useCreateStweet, useGetAllStweets } from "../../hooks/stweet";
import StwitterLayout from "./components/Layout/stwitterLayout";
import { Stweet } from "../../gql/graphql";


interface HomeProps {
  stweets?: Stweet[];
}

export default function Home(props: HomeProps) {
  const { user } = useCurrentUser();

  const [content, setContent] = useState('');
  const { mutateAsync } = useCreateStweet();

  // const [_stweets, setSteweets] = useState<Stweet[]>();

  const { stweets = props.stweets as Stweet[] } = useGetAllStweets();


  const handleSelectImage = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute("type", "file");
    input.setAttribute("select", "image/*")
    input.click();
  }, []);

  const handleCreateStweet = useCallback(async () => {
    await mutateAsync({
      content,
    });
    setContent('')
  }, [mutateAsync, content]);



  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add any other metadata or links here */}
      </Head>
      <StwitterLayout >
        <div>
          <div className='border transition-all border-r-0 border-l-0 border-gray-600 p-4 hover:bg-slate-900 cursor-pointer'>
            <div className='grid grid-cols-12'>
              <div className='col-span-1'>
                {user?.profileImageURL &&
                  <Image
                    src={user?.profileImageURL}
                    className='rounded-full '
                    alt="user-image"
                    height={50} width={50}
                  />
                }
              </div>
              <div className="col-span-11">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What's Happening"
                  className="w-full bg-transparent text-xl p-3 border-b border-slate-800"
                  rows={3}>

                </textarea>
                <div className="mt-2 items-center flex justify-between">
                  <BiImageAlt onClick={handleSelectImage} className="text-xl" />
                  <button onClick={handleCreateStweet} className=" font-bold flex justify-center items-center  cursor-pointer bg-[#1d9bf0] transition-all  rounded-full px-4 py-2">
                    Tsweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {stweets?.map((stweet) =>
          stweet ? <FeedCard key={stweet?.id} data={stweet as Stweet} /> : null
        )}
      </StwitterLayout>
    </div>
  );
}

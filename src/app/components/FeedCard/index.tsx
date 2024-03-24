import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { Stweet } from "../../../../gql/graphql"

interface FeedCardProps {
    data: Stweet
}

const FeedCard: React.FC<FeedCardProps> = (props) => {

    const { data } = props; 

    return (
        <div className='border transition-all border-r-0 border-l-0 border-gray-600 p-4 hover:bg-slate-900 cursor-pointer'>
            <div className='grid grid-cols-12'>

                <div className='col-span-2 sm:col-span-1  p-1  sm:p-0'>
                    {data.author?.profileImageURL &&
                        <Image src={data.author?.profileImageURL} className='rounded-full ' alt="user-image" height={50} width={50} />
                    }

                </div>
                <div className='col-span-10 sm:col-span-11'>
                    <p className='text-xl sm:text-2xl'>{data.author?.firstName}{data.author?.lastName}</p>
                    <p >{data.content}</p>
                    <div className='flex justify-between mt-4 items-center text-xl w-[80%] '>
                        <div><BiMessageRounded /> </div>
                        <div><FaRetweet /> </div>
                        <div><AiOutlineHeart /> </div>
                        <div><BiUpload /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
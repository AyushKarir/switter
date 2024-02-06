import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
const FeedCard: React.FC = () => {
    return (
        <div className='border transition-all border-r-0 border-l-0 border-gray-600 p-4 hover:bg-slate-900 cursor-pointer'>
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <Image src="https://media.licdn.com/dms/image/D5603AQF43BqNdBWRmw/profile-displayphoto-shrink_400_400/0/1705426170011?e=1712793600&v=beta&t=NddwIX70oLrJt50HbT77EmaINGbJK4NoT9l2RBUkXCg" className='rounded-full ' alt="user-image" height={50} width={50} />
                </div>
                <div className='col-span-11'>
                    <p className='text-2xl'>Ayush Karir</p>
                    <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum laborum voluptatibus harum voluptatum? Quis, et alias. Omnis autem consequuntur incidunt aperiam porro at, accusamus obcaecati earum tempora eum cupiditate. </p>
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
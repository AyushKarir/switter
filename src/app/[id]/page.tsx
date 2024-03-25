import type { NextPage } from "next";
import { useRouter } from "next/router";
import StwitterLayout from "../components/Layout/stwitterLayout";
import { FaArrowLeft } from "react-icons/fa6";
import { useCurrentUser } from "../../../hooks/custom";
import Image from "next/image";

const UserProfilePage: NextPage = ({ params }: any) => {

    //const { user } = useCurrentUser();
    return (
        <>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <nav className="border flex items-center gap-3 py-3 px-3">
                        <FaArrowLeft className="text-4xl" />
                        <div>
                            <p className="text-2xl font-bold">Ayush Karir</p>
                            <p className="text-lg font-bold text-slate-500">69 Stweets</p>
                        </div>
                    </nav>

                    <div>
                        {/* <Image src={user?.profileImageURL} alt="user-image" width={100} height={100} /> */}
                    </div>

                </div>
            </div>

        </>

    );
}

export default UserProfilePage;
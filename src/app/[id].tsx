import type { NextPage } from "next";
import StwitterLayout from "./components/Layout/stwitterLayout";

const UserProfilePage: NextPage = () => {
    return (
        <div>
            <StwitterLayout>
                <p>profilepage</p>
            </StwitterLayout>
        </div>
    );
}

export default UserProfilePage;
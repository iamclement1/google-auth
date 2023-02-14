//define initial state of users
//initially user information is null

import { fetchUser } from "../utils/fetchUserData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
}
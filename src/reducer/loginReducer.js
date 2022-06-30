import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const loginAuth = createAsyncThunk(
    'login/auth',
    async (logindata) => {
        const result = await fetch("http://localhost:4444/auth/login", {
            method: "POST",
            body: JSON.stringify(logindata),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const loginStatus = result.status;
        const loginData = await result.json();
        const data = { loginStatus, loginData }
        return data;
    }
)

const updateUser = createAsyncThunk(
    'update/user',
    async ({ id, result }) => {
        const result1 = await fetch(`http://localhost:4444/user/${id}`, {
            method: "PUT",
            body: JSON.stringify(result),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const loginData = await result1.json();
        return loginData;
    }
)
const followUser = createAsyncThunk(
    'user/follow',
    async ({ id, result }) => {
        const result1 = await fetch(`http://localhost:4444/user/${id}/follow`, {
            method: "PUT",
            body: JSON.stringify(result),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const loginData = result1.ok
        return { loginData, id, result };
    }
)

const unfollowUser = createAsyncThunk(
    'user/unfollow',
    async ({ id, result }) => {
        const result1 = await fetch(`http://localhost:4444/user/${id}/unfollow`, {
            method: "PUT",
            body: JSON.stringify(result),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const loginData = result1.ok
        return { loginData, id, result };
    }
)


const useLogin = createSlice({
    name: "login",
    initialState: {
        data: null,
        loadind: false,
        message: "",
        updateuser: null,
        updateloading: false
    },
    reducers: {
        localUser: (state, action) => {
            state.data = JSON.parse(localStorage.getItem('user'))
        },
        logout: (state, action) => {
            localStorage.clear('user')
            state.data = null
        }
    },
    extraReducers: {
        [loginAuth.fulfilled]: (state, action) => {
            state.loading = false
            if (action.payload.loginStatus === 200) {
                state.data = action.payload.loginData
                localStorage.setItem('user', JSON.stringify(state.data));
                state.message = action.payload.loginData.message
            } else {
                state.message = action.payload.loginData.message
            }
        },
        [loginAuth.pending]: (state, action) => {
            state.loading = true
        },
        [loginAuth.rejected]: (state, action) => {
            state.message = "rejected"
            state.loading = false
        },
        [updateUser.fulfilled]: (state, action) => {
            state.updateloading = false
            state.data.result = action.payload
            localStorage.setItem('user', JSON.stringify(state.data));

        },
        [updateUser.pending]: (state, action) => {
            state.updateloading = true
        },
        [followUser.fulfilled]: (state, action) => {
            if (action.payload.loginData) {
                state.data = { ...state.data, result: { ...state.data.result, following: [...state.data.result.following, action.payload.id] } }
                localStorage.setItem('user', JSON.stringify(state.data));
            } else {
                state.data = { ...state.data }
            }

        },
        [followUser.pending]: (state, action) => {
            state.updateloading = true
        },
        [unfollowUser.fulfilled]: (state, action) => {
            state.updateloading = false
            if (action.payload.loginData) {
                state.data = { ...state.data, result: { ...state.data.result, following: [...state.data.result.following.filter((item) => item !== action.payload.id)] } }
                localStorage.setItem('user', JSON.stringify(state.data));
            }
        },
        [unfollowUser.pending]: (state, action) => {
            state.updateloading = true
        }
    }
})
export { loginAuth, updateUser, unfollowUser, followUser }
export default useLogin.reducer;
export const { localUser, logout } = useLogin.actions;

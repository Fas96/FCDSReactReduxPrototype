import {createSlice} from "@reduxjs/toolkit";

function storeIdPasswordListInLocalStorage() {
    const idPasswordList = [{id: "admin", password: "admin"}, {id: "user", password: "user"}, {id: "guest", password: "guest"}];
    localStorage.setItem("idPasswordList", JSON.stringify(idPasswordList));
}

function getIdPasswordList() {
    storeIdPasswordListInLocalStorage();
    const idPasswordList = localStorage.getItem("idPasswordList");
    return  JSON.parse(idPasswordList);
}

function storeIsAuthenticatedInCookie(payload, isAuthenticated) {
    document.cookie = `payload=${JSON.stringify(payload)};max-age=3600`;
    document.cookie = `isAuthenticated=${isAuthenticated};max-age=3600`;
}

function getPayloadFromCookie() {
    const payload = document.cookie.split(";").find((cookie) => cookie.includes("payload"));
    return payload === undefined ? null : JSON.parse(payload.split("=")[1]);

}

function getIsAuthenticatedFromCookie() {
    const isAuthenticated = document.cookie.split(";").find((cookie) => cookie.includes("isAuthenticated"));
    return isAuthenticated === undefined ? "false" : isAuthenticated.split("=")[1];

}

function ifIsAuthenticatedIsNullReturnFalse() {
    const isAuthenticated = getIsAuthenticatedFromCookie();
    return isAuthenticated === "true";
}

const authSlice = createSlice({
    name: "auth",
    initialState: {isAuthenticated: ifIsAuthenticatedIsNullReturnFalse(), payload: getPayloadFromCookie()},
    reducers: {
        login:  function (state, action) {
                let idPasswordList = false;
                getIdPasswordList().forEach((idPassword) => {
                    if (idPassword.id === action.payload.id && idPassword.password === action.payload.password) {
                        idPasswordList = true;
                    }
                });
                if (idPasswordList) {
                    state.isAuthenticated = true;
                    storeIsAuthenticatedInCookie(action.payload,state.isAuthenticated);
                }else {
                    alert("Invalid Id or Password");
                }


        },
        logout(state, action) {
            state.isAuthenticated = false;
        }

    }
});

export const authActions = authSlice.actions;
export default  authSlice;
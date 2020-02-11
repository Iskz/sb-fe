import axios from "axios";
import * as Constants from "./Constants";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJUZWFtMDEiLCJzY29wZSI6WyJheGlhdGEiLCJyZWFkIiwid3JpdGUiXSwib3JnYW5pemF0aW9uIjoiVGVhbTAxeFFFUCIsImV4cCI6MTU4MTIxMTM4OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjlmNTQ1NTNhLTE5YmEtNDQ4MS1hOWVjLWM4NzRmMmQ2ZmY2NCIsImNsaWVudF9pZCI6ImF4aWF0YUNsaWVudElkIn0.elLh5hRE5nnGhzE1o1ytYyNYMVlfIswM_QHOZmmLH9E";

function checkToken() {
    let config = { headers: { 'Content-Type': 'multipart/form-data' } };
    let formData = new FormData();
    formData.set("token", token);
    axios.post(Constants.CHK_TOKEN_API, formData, config)
}

function doLogin() {
    axios.post(Constants.LOGIN_API)
}

export {
    doLogin,
    checkToken
}
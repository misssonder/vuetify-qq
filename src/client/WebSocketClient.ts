import cookie from "js-cookie";

let wsUrl= encodeURI("ws://localhost:9999/ws?token=")+encodeURI(cookie.get("token")!) ;
export default wsUrl

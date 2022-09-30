import useStore from "@/store";
const store = useStore();
let connection = {};
WebSocket.prototype.emit = function (eventName, dataMessage) {
  this.send(JSON.stringify({ event: eventName, dataMessage }));
};
export default function useSocket() {
  const startConnect = (channel_id) => {
    connection = new WebSocket(
      `wss://demo.piesocket.com/v3/${channel_id}?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self`
    );
    connection.onopen = () => {
      const user = {
        name: store.getUserGoogle.name,
        email: store.getUserGoogle.email,
        avatar: store.getUserGoogle.avatar,
      };
      connection.emit("user", JSON.stringify(user));
    };
  };
  const getDataSocket = () => {
    connection.onmessage = (mess) => {
      const event = JSON.parse(mess.data).event
      const data = JSON.parse(JSON.parse(mess.data).dataMessage)
      switch (event) {
        case "user":
          if(checkNotMe(data)){
            console.log(mess.dataMessage);
          }
          break;
        default:
          return;
      }
    };
  };
  const checkNotMe = (user) =>{
    console.log(user.email, store.getUserGoogle.email);
    if(user.email !== store.getUserGoogle.email){
      return true
    }
    return false
  }
  return {
    startConnect,
    getDataSocket,
  };
}

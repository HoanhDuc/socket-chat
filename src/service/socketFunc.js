import useStore from "@/store";
import { Notify } from "quasar";
const store = useStore();

WebSocket.prototype.emit = function (eventName, dataMessage) {
  this.send(
    JSON.stringify({
      event: eventName,
      dataMessage: JSON.stringify(dataMessage),
    })
  );
};
export default function useSocket() {
  const startConnectPrivate = (channel_id) => {
    const connection = new WebSocket(
      `wss://demo.piesocket.com/v3/${channel_id}?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self`
    );
    connection.onmessage = (mess) => {
      const event = JSON.parse(mess.data).event;
      const data = JSON.parse(JSON.parse(mess.data).dataMessage);
      if (checkNotMe(data)) {
        switch (event) {
          case "message":
            acitonEventMessage(data);
            break;
          default:
            return;
        }
      }
    };
    return connection;
  };
  const startConnectGlobal = () => {
    const connectionGlobal = new WebSocket(
      `wss://demo.piesocket.com/v3/all?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self`
    );
    connectionGlobal.onopen = () => {
      const user = {
        id: store.getUserAuth.email.split("@")[0],
        name: store.getUserAuth.name,
        email: store.getUserAuth.email,
        avatar: store.getUserAuth.avatar,
      };
      connectionGlobal.emit("user", user);
    };
    connectionGlobal.onmessage = (mess) => {
      const data = JSON.parse(JSON.parse(mess.data).dataMessage);
      if (
        checkNotMe(data) &&
        !store.listOnline.map((item) => item.id).includes(data.id)
      ) {
        store.addUserOnline(data);
      }
    };
  };

  const acitonEventMessage = (message) => {
    store.setPrivateMessage(message)
  };
  const checkNotMe = (user) => {
    if (user.email !== store.getUserAuth.email) {
      return true;
    }
    return false;
  };
  return {
    startConnectGlobal,
    startConnectPrivate,
  };
}

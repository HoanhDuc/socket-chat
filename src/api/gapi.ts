import useStore from "@/store";
import useSocket from "@/service/socketFunc";
const store = useStore();

export const checkAuth = () => {
  gapi.load("client:auth2", async function () {
    gapi.auth2.init({
      client_id:
        "728519911608-0t6vvds5r80ecepqfhmjsr1tg0a2cqmn.apps.googleusercontent.com",
      scope: "email profile openid",
      plugin_name: "App Name that you used in google developer console API",
    });
    const authInstance = await gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      setAuth();
    } else {
      loadClient();
    }
  });
};
const setAuth = () => {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope: "https://www.googleapis.com/auth/youtube.readonly",
    })
    .then((e) => {
      loadClient();
    });
};
const loadClient = async () => {
  await gapi.client.setApiKey("AIzaSyCX4Mto57qU2oKZtqAMjaRxOklP_9qGLKw");
  await gapi.client.load(
    "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
  );
  const authInstance = await gapi.auth2.getAuthInstance();
  const user = {
    name: await authInstance.currentUser.get().getBasicProfile().getName(),
    email: await authInstance.currentUser.get().getBasicProfile().getEmail(),
    avatar: await authInstance.currentUser
      .get()
      .getBasicProfile()
      .getImageUrl(),
  };
  store.setUserGoogle(user);
  store.setLogedIn(true);
  const { startConnect, getDataSocket } = useSocket();
  startConnect('all');
  getDataSocket()
};

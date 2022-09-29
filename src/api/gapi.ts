import useStore from "@/store";
const store = useStore();

export const checkAuth = () => {
  gapi.load("client:auth2", async function () {
    gapi.auth2.init({
      client_id:
        "5354673368-eal9lani9uo2uqihp0vv971o428mhg1f.apps.googleusercontent.com",
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
  await gapi.client.setApiKey("AIzaSyDNfziLpL9tPvW8C-CAahC6ci73N8Hbv7o");
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
};

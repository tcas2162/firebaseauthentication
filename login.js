(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxVM5NzbG-2tsFmhrzpk06dOvyGU6hdeY",
    authDomain: "courso-d8c9b.firebaseapp.com",
    databaseURL: "https://courso-d8c9b-default-rtdb.firebaseio.com",
    projectId: "courso-d8c9b",
    storageBucket: "courso-d8c9b.appspot.com",
    messagingSenderId: "487484328235",
    appId: "1:487484328235:web:89ed405d1581a4587cdd6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // get elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");

  // login
  login.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener("click", (e) => {
    // TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  //Google Login
  googlelogin.addEventListener("click", (e) => {
    console.log("google clicked");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
        login.style.display = "none";
        signup.style.display = "none";
        email.style.display = "none";
        password.style.display = "none";
        googlelogin.style.display = "none";
        logout.style.display = "none";
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  });

  // logout
  logout.addEventListener("click", (e) => {
    firebase.auth().signOut();
  });

  // login state
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
      email.style.display = "none";
      password.style.display = "none";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      login.style.display = "inline";
      signup.style.display = "inline";
      email.style.display = "inline";
      googlelogin.style.display = "inline";
      password.style.display = "inline";
      logout.style.display = "enon";
    }
  });
})();

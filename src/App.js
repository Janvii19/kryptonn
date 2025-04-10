import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './Pages/main/Main'
import MainApp  from './Pages/dashboard/MainApp';
// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
import EWallet  from './Components/EWallet';
import { StockInsights } from './Components/StockInsights';
import News from './Components/News';
import  Blogs  from './Components/Blogs';
import { GlobalProvider } from './Hooks/GlobalState';


// firebase
import Login from './Pages/login/Login'
import SignUp from './Pages/SignUp/Signup'
import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD7jnEvRLlogpRiQCjzXodTAkMQY4FAXgM",
  authDomain: "dsn1023-7c683.firebaseapp.com",
  projectId: "dsn1023-7c683",
  storageBucket: "dsn1023-7c683.appspot.com",
  messagingSenderId: "545382973821",
  appId: "1:545382973821:web:ad3f364e310251fc754c14"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, user => {
  //     setUser(user)
  //   })

  // },[])

  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Main}></Route>
          <Route exact path = "/login" component = {Login}></Route>
          <Route exact path = "/signup" component = {SignUp}></Route>
          <Route exact path = "/dashboard" component = {MainApp}></Route>
          <Route exact path = "/dashboard/ewallet" component = {EWallet}></Route>
          <Route exact path = "/dashboard/stockinsight" component = {StockInsights}></Route>
          <Route exact path = "/dashboard/news" component = {News}></Route>
          <Route exact path = "/dashboard/blogs" component = {Blogs}></Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
    </>
  );
}

export default App;

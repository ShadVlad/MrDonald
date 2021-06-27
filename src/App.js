import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBFzwAyYvha_9ovkL_uaB8PZuq47k_9nWw",
  authDomain: "mrdonalds-ea2bf.firebaseapp.com",
  projectId: "mrdonalds-ea2bf",
  storageBucket: "mrdonalds-ea2bf.appspot.com",
  messagingSenderId: "164023295932",
  appId: "1:164023295932:web:33b384537aad87c18295b9",
};

firebase.initializeApp(firebaseConfig);
function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  //console.log("Item: ", openItem);
  const orders = useOrders();
  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

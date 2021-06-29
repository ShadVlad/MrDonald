import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";

const firebaseConfig = {
  apiKey: "AIzaSyD4NLCvLq4840D-EM97aJuXBMFaVR5HF-8",
  authDomain: "mrdonalds-9d6f8.firebaseapp.com",
  databaseURL:
    "https://mrdonalds-9d6f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-9d6f8",
  storageBucket: "mrdonalds-9d6f8.appspot.com",
  messagingSenderId: "1081368127518",
  appId: "1:1081368127518:web:0249d27252ed46b64b260f",
};

firebase.initializeApp(firebaseConfig);
function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  //console.log("Item: ", openItem);
  const orders = useOrders();
  useTitle(openItem.openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
      />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

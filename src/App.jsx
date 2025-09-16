import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import PizzaList from "./components/PizzaList.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <PizzaList /> {}
      </main>
      <Footer />
    </>
  );
}

export default App;



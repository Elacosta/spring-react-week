import Header from "./components/header/Header"
import SaleCard from "./components/saleCard/saleCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sale">
          <div className="sale-container">
            <SaleCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App

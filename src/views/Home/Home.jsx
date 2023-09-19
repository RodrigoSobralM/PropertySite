import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imgSobre from "../../assets/imgSobre.svg"
import "./index.scss";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__sobre">
        <h1 className="titleSobre">SOBRE</h1>
        <div className="home__descricaoSobre">
          <p className="textoSobre">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem
          </p>
          <img src={imgSobre} alt="" />
        </div>
      </section>
      <section className="home__imoveis">
        <h1 className="titleImoveis">IMOVEIS</h1>
        <div className="geralCards">
          <p className="descricaoImoveis">
            IMOVEIS DISPONIVEIS PARA VENDA E ALUGUEL:
          </p>
          <div className="home__cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

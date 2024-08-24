import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  
  const {
    onSent,
    onSentApi,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSentApi();
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Apple Assistente</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hey, você!</span>
          </p>
          <p>Como posso lhe ajudar hoje?</p>
        </div>
        {!showResult ? (
          <>
            <div className="cards"  >
              <div className="card" onClick={() => handleCardClick('Sobre a Apple')}>
                <p>Saber mais sobre a empresa</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Oportunidades')}>
                <p>Informações sobre oportunidades</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Localização')}>
                <p>Localização da empresa</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Produtos e Serviços')}>
                <p>Quais são os produtos e serviços?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
            {/* Fim dos Cards - mostra se nao tiver resultado */}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.dummy_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.user_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      {/* Fim mostra resultado */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} 
              value={input}
              type="text"
              placeholder="Entre com sua pergunta aqui"
            />
            <div>
              <img onClick={() => onSentApi()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Apple Assistente utiliza uma base de dados própria com
            pesquisa gerada através de embeddings do Gemini. Algumas informações
            podem ser incorretas, sempre verifique as fonte recomendadas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

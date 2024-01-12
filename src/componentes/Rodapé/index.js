import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="socialMedia">
        <ul>
          <li>
            <a href="facebook.com">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>

      <section className="Copyright">
        <p>©2024 - Todos os direitos reservados</p>
        <p>Desenvolvido por Hudson Santos</p>
      </section>
    </footer>
  );
};

export default Rodape;

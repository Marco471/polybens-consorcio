import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import predio from "./assets/predio.jpg";
import carro from "./assets/carro.jpg";
import celular from "./assets/celular.jpg";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0B1220",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "320px" }}>
          <img
            src={logo}
            alt="Polybens"
            style={{
              width: "180px",
              marginBottom: "30px",
            }}
          />

          <h1
            style={{
              fontSize: "3rem",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Conquiste seu imóvel ou veículo sem pagar juros abusivos.
          </h1>

          <p
  style={{
    fontSize: "1.2rem",
    color: "#d1d5db",
    marginBottom: "30px",
  }}
>
  Faça uma simulação gratuita e descubra como transformar seus planos
  em patrimônio com segurança e planejamento.
</p>


          <a
  href="https://wa.me/message/QZSN4LOSADR3A1"
  target="_blank"
  rel="noreferrer"
  style={{
    display: "inline-block",
    marginTop: "25px",
    color: "#ffffff",
    textDecoration: "underline",
    fontWeight: "bold",
  }}
>
  QUERO UMA SIMULAÇÃO GRATUITA
</a>

          <p
  style={{
    marginTop: "25px",
    color: "#d1d5db",
    fontSize: "1rem",
    lineHeight: "1.8",
  }}
>
  Atendimento personalizado • Sem juros bancários • Simulação gratuita
</p>

</div>

<div
  style={{
    flex: 1.2,
    minWidth: "280px",
  }}
>

          <img
  src={hero}
  alt=""
  style={{
    width: "100%",
    height: "500px",
    objectFit: "contain",
    borderRadius: "24px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
  }}
/>
        </div>
      </section>

      {/* IMÓVEIS */}
      <section
        style={{
          backgroundColor: "#111827",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <img
          src={predio}
          alt="Imóveis"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "20px",
          }}
        />

        <h2
  style={{
    marginTop: "30px",
    color: "#ffffff",
  }}
>
   Realize o sonho do seu imóvel.
</h2>

        <p>
          Casa própria • Apartamento • Terreno • Construção • Imóvel para renda
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#d1d5db",
          }}
        >
          Você não precisa juntar todo o dinheiro para começar.
        </p>
      </section>

      {/* VEÍCULOS */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <img
          src={carro}
          alt="Veículos"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px",
          }}
        />

        <h2
  style={{
    marginTop: "30px",
    color: "#ffffff",
  }}
>
  Conquiste seu próximo veículo.
</h2>

        <p>
          Descubra opções sem juros e encontre um plano ideal para o seu
          objetivo.
        </p>

        <a
          href="https://wa.me/message/QZSN4LOSADR3A1"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            backgroundColor: "#16a34a",
            color: "#fff",
            textDecoration: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Simular meu veículo
        </a>
      </section>

      {/* DIFERENCIAL */}
      <section
        style={{
          backgroundColor: "#111827",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <img
          src={celular}
          alt="Diferencial"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "20px",
          }}
        />

        <h2
  style={{
    marginTop: "30px",
    color: "#ffffff",
  }}
>
  Compare antes de decidir.
</h2>

        <p>
          Muitas pessoas pagam mais porque não conhecem alternativas melhores.
          Compare antes de decidir.
        </p>

        <a
          href="https://wa.me/message/QZSN4LOSADR3A1"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            backgroundColor: "#16a34a",
            color: "#fff",
            textDecoration: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          QUERO COMPARAR AGORA
        </a>
      </section>

      {/* CONTATO */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Polybens"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h2
  style={{
    color: "#ffffff",
    marginTop: "20px",
  }}
>
  Pronto para dar o primeiro passo?
</h2>

        <p style={{ color: "#d1d5db" }}>
          Clique no WhatsApp e receba uma simulação gratuita e sem compromisso.
        </p>

        <div
  style={{
    marginTop: "20px",
    color: "#d1d5db",
    lineHeight: "2",
  }}
>
  <p>
    📧{" "}
    <a
      href="mailto:donizete@polybens.com.br"
      style={{
        color: "#ffffff",
        textDecoration: "none",
      }}
    >
      donizete@polybens.com.br
    </a>
  </p>

  <p>
    📞{" "}
    <a
      href="tel:+5511980215252"
      style={{
        color: "#ffffff",
        textDecoration: "none",
      }}
    >
      (11) 98021-5252
    </a>
  </p>
</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <a
  href="https://wa.me/message/QZSN4LOSADR3A1"
  target="_blank"
  rel="noreferrer"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(37,211,102,0.35)",
  }}
>
  <FaWhatsapp />
</a>

          <a
  href="https://instagram.com/polybensconsorcios"
  target="_blank"
  rel="noreferrer"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background:
      "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(221,42,123,0.35)",
  }}
>
  <FaInstagram />
</a>

<a
  href="https://facebook.com/polybensconsorcios"
  target="_blank"
  rel="noreferrer"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#1877F2",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(24,119,242,0.35)",
  }}
>
  <FaFacebookF />
</a>
        </div>
      </section>
    </div>
  );
}

export default App;
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  {
    message:
      "“Excelente servicio internacional y respaldo tecnico, muy preparados para resolver cualquier problema con Soredex y Scanora, altamente recomendable”",
    name: "Roger León",
    proffesion: "CEDIMAX",
  },
  {
    message: "“Excelente atendimento. Rápido e eficiente!”",
    name: "Dra. Mariana Cordeiro",
    proffesion: "RADIOLOGIA ESPECIALIZADA",
  },
  {
    message: "“Tiago super capacitado , profissional e sempre disponível !!!”",
    name: "Dr. Luís Fernando Jardim",
    proffesion: "JARDIM RADIOLOGIA",
  },
  {
    message:
      "“Agradecimento especial ao Tiago pela assessoria prestada, claro e específico em suas explicações. E me chamou muito a atenção da pontualidade, me atendeu exatamente no horário combinado! Nota 10”",
    name: "Dr. José Eduardo Cantieri Costa",
    proffesion: "RADIOLOGIA LINS",
  },
  {
    message:
      "“Ótimo atendimento do Tiago Lemos! Respondeu prontamentente ao nosso pedido e foi ágil na resolução do problema!! Para quem quer agilidade e sucesso no atendimento, recomendo!”",
    name: "Dra. Luiza Bertazolli",
    proffesion: "ROS RADIOLOGIA",
  },
  {
    message:
      "“Excelente serviço prestado pelo Tiago, muito profissional, sempre que solicitado atende e resolve os problemas com rapidez, clareza e agilidade. Um serviço de qualidade. Recomendo”",
    name: "Dra. Isa Dolavalle",
    proffesion: "CENTRO ODONTOLÓGICO ANGELO DOLAVALE",
  },
  {
    message:
      "“Excelente serviço prestado a 3D Robrás! Agradecemos especialmente ao Tiago pelo bom atendimento, deixando os equipamentos em ótimo estado.”",
    name: "Cris Santos",
    proffesion: "3D ROBRÁS",
  },
  {
    message:
      "“Agradecemos o auxílio sempre que preciso a nossa equipe. Nós da CIOC recomendamos seus serviços!!!”",
    name: "S. Leite",
    proffesion: "CIOC",
  },
  {
    message:
      "“Radiologia odontológica UNIRADIO recomenda o trabalho de Thiago Lemos pela seriedade e resolução rápida do problema.",
    name: "Edna Silva",
    proffesion: "UNIRADIO",
  },
  {
    message: "“Podemos contar com o suporte. Programas e avaliação. Nota 10",
    name: "Dra. Solange Fortes",
    proffesion: "IDOC",
  },
  {
    message:
      "“Resolveu nosso problema de uma maneira rápida e eficaz. Parabéns pelo atendimento. Recomendo.",
    name: "Cíntia Neves",
    proffesion: "",
  },
  {
    message:
      "“Ótimo atendimento e equipe competente. Produtos/equipamentos de alta qualidade. Recomendo!",
    name: "Bruna Andreciolli",
    proffesion: "",
  },
  {
    message:
      "“Gosto muito do atendimento que é rápido e eficiente, o que pra nós é muito importante, recomendo!",
    name: "Sandra Regina",
    proffesion: "DIRO RADIOLOGIA",
  },
  {
    message: "“Atendimento rápid",
    name: "Stefano Carvalho",
    proffesion: "IMAGEM ORAL",
  },
  {
    message:
      "“Ontem tive um problema na Digora e o Tiago prontamente me atendeu, orientando a desmontar e lubrificar a digora, que voltou a funcionar. Parabéns e obrigado",
    name: "Darwin Braga",
    proffesion: "ORAL-X",
  },
  {
    message:
      "“Tiago é extremamente competente, agil, rapido e honesto!. Recomendo!!!!",
    name: "André Paoli",
    proffesion: "CROM RADIOLOGIAL",
  },
  {
    message:
      "“Excelente atendimiento, trabajo de primera calidad, una empresa de calidad y confianza. Gracias por el servicio. Bom trabalho excelente servicio obrigado.",
    name: "Dra. Vanessa Sahonero",
    proffesion: "CEDIMAX",
  },
  {
    message:
      "“Mais uma ótima e prática ferramenta de negócios. Parabéns pela iniciativa.",
    name: "Dr. William Brito",
    proffesion: "INDI RADIOLOGIA",
  },
  {
    message:
      "“Empresa muito prestativo e eficiente!Sempre fomos muito bem assessorados..Recomendo!",
    name: "Dra. Sonia Nishiyama",
    proffesion: "RADIORED-X",
  },
  {
    message:
      "“Muito bom o atendimento Tiago!! Disposto ao horário planejado!!!",
    name: "Dr. Osvair Szenczuk",
    proffesion: "Ecelente atendimento, é rápido e sempre resolve os problemas.",
  },
  {
    message:
      "“Excelente serviço! Thiago sempre disposto e prestativo. Demonstra muito conhecimento. Recomendo muito!!!",
    name: "Dr. Monaco de Carvalho André ",
    proffesion: "",
  },
  {
    message:
      "“Excelente serviço! Thiago sempre disposto e prestativo. Demonstra muito conhecimento. Recomendo muito!!!",
    name: "Dra. Amanda Emmerich",
    proffesion: "CRANIOFACIAL",
  },
  {
    message:
      "“Muito atencioso e prestativo , sempre q precisamos somos muito bem atendidos . Serviço excelente . Recomendo",
    name: "Dra. Márcia Donizete",
    proffesion: "RADIOLOGIA SÃO GERALDO",
  },
  {
    message:
      "“Ótimo serviço prestado pelo Thiago.. sempre disposto à sanar os problemas, independente do horário!",
    name: "Dr. Gustavo Zanatta",
    proffesion: "ODONTOIMAX",
  },
  {
    message:
      "“Excelente trabalho, rápido, muito prestativo, cumpre com o que oferece.",
    name: "Dra. Giovana Samuel",
    proffesion: "3D RADIOLOGIA",
  },
  {
    message:
      "“Otimo atendimento, COMPETENCIA EXTRA!! Aprovo e recomendo o serviço e suporte da equipe.",
    name: "RADIOOGIA ODONTOLÓGICA GOIANÉSIA",
    proffesion: "",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container-fluid bg-light text-center">
        <div className="row">
          <div className="col">
            <p className="mt-3">Client Feedback</p>
            <h1 style={{ fontWeight: "lighter" }}>
              What <b>People</b> Say
            </h1>
            <div
              style={{ width: "800px", margin: "0px auto", marginTop: "90px" }}
            >
              <Slider {...settings}>
                {data.map((comment) => {
                  return (
                    <div>
                      <p style={{fontSize:'60px',color
                    :'blue'}}>~</p>
                      <h4>{comment.message}</h4>
                      <div style={{ marginTop: "100px" }}>
                        <h5>{comment.name}</h5>
                        <p>{comment.proffesion}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

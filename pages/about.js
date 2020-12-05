import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Layout from '../components/layout/Layout'

const Aboutus = () => {
    return (
      <Layout>
        <div className="row">
          
         <div className="col-sm-2 col-md-2 col-lg-2">
         <div style={{backgroundColor:'gray',padding:'10px'}}>
          <h5>About Us</h5>
           <p>Bem Vindos à DENTAL04!</p>
           <p>Nossa Visão</p>
           <p>Nossa Qualidade</p>
           <p>Sobre a DENTAL04</p>
           <p>Nossa Missão</p>
           <p>Política de Privacidade</p>
           <p>Política de Entrega</p>
           <p>Restrições e Guias</p>
           <p>Política de Garantia</p>
           <p>Política de Garantia</p>
           <p>Política de Segurança</p>
          </div>
         </div>
         <div className="col-sm-10 col-md-10 col-lg-10">
           <h1>About US</h1>
           <div>
            <h2>Bem Vindos à DENTAL04!</h2>
            <p>
                A empresa foi fundada em Setembro de 2018 por técnicos com mais
                de 10 anos de experiência no ramo de assistência técnica, com o
                objetivo de fornecer um serviço aprimorado e diferenciado.
              </p>
           </div>
           <div className="col text-center">
                  <img
                    src="../../static/images/about/3.png"
                    width="343px"
                    height="229px"
                    alt="firstimage"
                  />
                  <h2>Quem Somos Nós</h2>
                  <p>
                    A DENTAL04 é uma empresa que presta serviços de assistência
                    técnica, anúncios de aparelhos de raios-x e programas
                    odontológicos – provenientes de clínicas de radiologia e
                    consultórios odontológicos. Contamos também com o suporte
                    aos produtos do programa ONDEMAND3D de diagnóstico para
                    tomografias usado mundialmente.
                  </p>
                </div>
                <div className="col text-center">
                  <img
                    src="../../static/images/about/1.jpg"
                    width="343px"
                    height="229px"
                    alt="firstimage"
                  />
                  <h2>Nossa Visão</h2>
                  <p>
                    Hoje atendemos diversas clínicas de radiologia em todo
                    território brasileiro. Fornecemos assistência rápida e de
                    qualidade, além de ajudarmos nas vendas de seus aparelhos de
                    raios-x usados. Mais satisfação e confiança em nossos
                    serviços.
                  </p>
                </div>    
                <div className="col text-center">
                  <img
                    src="../../static/images/about/2.jpeg"
                    width="343px"
                    height="229px"
                    alt="firstimage"
                  />
                  <h2>Nossa Qualidade</h2>
                  <p>
                    Fornecemos serviços íntegros e de qualidade. Experimente!
                  </p>
                </div>
         </div>

          
          <div className="col-12 mt-5">
            <div className="container">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Sobre a DENTAL04
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      A DENTAL04 é uma empresa que presta serviços de
                      assistência técnica, anúncio de aparelhos de raios-x e
                      programas odontológicos provenientes de clínicas de
                      radiologia e consultórios odontológicos além de suporte
                      aos produtos do famoso programa ONDEMAND3D (programa de
                      diagnóstico tomografias da marca CYBMERMED) usado
                      mundialmente. A empresa nasceu em Setembro de 2018 por
                      meio de técnicos com mais de 10 anos de experiência no
                      ramo de assistência técnica com o objetivo de fornecer uma
                      assistência aprimorada e diferenciada. Hoje atendemos
                      diversas clínicas de radiologia em todo território
                      brasileiro, fornecendo assistência rápida e de qualidade,
                      além de ajudarmos nas vendas de seus aparelhos de raios-x
                      usados gerando mais satisfação e confiança em nossos
                      serviços.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Nossa Missão
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      A missão da DENTAL04 é fornecer assistência rápida e
                      eficaz à seus clientes, bem como ajudar nos trâmites de
                      itens usados de suas clínicas.".
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Política de Privacidade
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Priorizamos a privacidade de nossos visitantes à este site
                      por isso, disponibilizamos abaixo os tipos de informações
                      que são coletadas e manuseadas. Para mais informações
                      contate-nos através do e-mail tiagohisun@gmail.com.
                      Arquivos de Log A DENTAL04 segue o procedimento padrão de
                      uso dos arquivos de log. Esses arquivos logam os
                      visitantes enquanto eles visitam o sites. As empresas
                      fazem isso e é parte do serviço analítico dos servidores.
                      As informações coletadas incluem endereços de IP, tipo de
                      página ISP, data, páginas de referência/saída e
                      possívelmente o número de cliques. Essas informações de
                      log não estão ligadas à nenhuma informação pessoal
                      indentificável. Seu propósito é somente analizar as
                      tendências, administrando o site, rastreando os movimentos
                      dos usuários. Cookies e Web Beacons Como qualquer outro
                      website, a DENTAL04 utiliza 'cookies'. Eles são usados
                      para armazenar informações que incluem, as preferências
                      dos visitantes e as páginas que eles acessam. São usados
                      para otimizar a experiência do usuário baseadas nessas
                      informações. Política de Privacidade de Terceiros A
                      política de privacidade da DENTAL04 não se aplica à nenhum
                      outro anunciante ou sites de terceiros. Sendo assim,
                      aconselhamos à consultar suas respectivas políticas de
                      privacidade Você poderá desabilitar a função de cookies
                      nas opções de sua página. Não colhemos informações alguma
                      de indivíduos abaixo de 18 anos. Caso ache algum equívoco
                      em algum cadastro, por favor, nos informe para removermos
                      o mais rápido tais informações de nossos registros. Esta
                      Política de Privacidade se aplica somente à nossas
                      atividades online e é válida aos visitantes de nosso site
                      concernente as informações que os mesmos compartilham ou
                      coletam da DENTAL04. Esta política não se aplica à nenhuma
                      informação coletada offline ou por outros meios à este
                      site. Acordo Usando este site, você declara estar ciente
                      de nossa Política de Privacidade e concorda com seus
                      Termos e Condições.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingfi">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#headingfive"
                        aria-expanded="true"
                        aria-controls="headingfive"
                      >
                        Política de Entrega, Prazos e Valores
                      </button>
                    </h5>
                  </div>

                  <div
                    id="headingfive"
                    class="collapse"
                    aria-labelledby="headingfi"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Quanto ao Transporte: Nas negociações de vendas dos
                      aparelhos de raios-x, a DENTAL04 não fornece transporte
                      aos mesmos em nenhum caso. Por isso, os preços e prazos de
                      transporte estão por conta das transportadoras escolhidas
                      por uma das partes (comprador ou vendedor). Quanto aos
                      Suportes Remotos e Presenciais: Os valores e prazos médios
                      de assistência remota e presencial poderão ser cotados
                      mediante a solicitação do cliente com a empresa.
                      Transportadoras: A empresa transportadora dos aparelhos no
                      caso das vendas deles, estão à cargo da escolha das partes
                      do negócio tratado, isto é; comprador ou vendedor do
                      produto negociado. Opções de Pagamento: Quanto Ao
                      Transporte: A DENTAL04 não recebe pagamento algum relativo
                      à transporte das máquinas negociadas. O mesmo deverá ser
                      tratado diretamente com a transportadora. Quanto À
                      Assistência Presencial Ou Remota: A DENTAL04 não recebe
                      pagamento antecipado relativo ao seus suportes presenciais
                      e remotos. Sempre é solicitado ao comprador do serviço
                      (cliente) à realizar o pagamento após o serviço ser
                      concluído com sucesso ou o problema diagnosticado.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingsi">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#headingsix"
                        aria-expanded="true"
                        aria-controls="headingsix"
                      >
                        Restrições e Guias
                      </button>
                    </h5>
                  </div>

                  <div
                    id="headingsix"
                    class="collapse"
                    aria-labelledby="headingsi"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Quanto À Assistência Presencial Ou Remota: A DENTAL04
                      atende a todas regiões incluindo exterior nos idiomas
                      Português e Inglês. Quanto Ao Meio de Transporte ou
                      Acesso: Política de Troca e Devoluções No Caso de
                      Transporte: Nas vendas realizadas ou intermediadas pela
                      DENTAL04, fica a cargo do dono do aparelho (vendedor)
                      decidir mediante a contrato o prazo ou política de
                      devolução do aparelho caso o mesmo apresente defeitos. Tal
                      política é informada ao comprador antes do ato
                      (fechamento) da venda. No Caso de Acesso Remoto: O Meio
                      principal utilizado para acesso é o programa de acesso
                      teamviewer, com o título da empresa no acesso. Por motivos
                      necessários, poderá ser usado outros programas de
                      acesso,SEMPRE com o consentimento prévio do cliente.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingse">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#headingseven"
                        aria-expanded="true"
                        aria-controls="headingseven"
                      >
                        Política de Garantia
                      </button>
                    </h5>
                  </div>

                  <div
                    id="headingseven"
                    class="collapse"
                    aria-labelledby="headingse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      A DENTAL04 não fornece garantia nas intermediações feitas
                      pela mesma nas vendas dos aparelhos. Porém é lei federal
                      conforme Código de Defesa do Consumidor – Lei 8.078/90 o
                      mínimo de 3 meses em qualquer venda realizada contra
                      defeitos do aparelho, sendo tal defeito oriundo da
                      máquina, não provocado por falhas de terceiros.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingei">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#headingeight"
                        aria-expanded="true"
                        aria-controls="headingeight"
                      >
                        Política de Segurança
                      </button>
                    </h5>
                  </div>

                  <div
                    id="headingeight"
                    class="collapse"
                    aria-labelledby="headingei"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Embora a DENTAL04 aplique certos filtros de segurança no
                      tratamento de vendas das máquinas em que ela está
                      envolvida, ainda sim é recomendado observar as precauções
                      padrão e adcionais na venda das máquinas realizadas
                      cliente-à-cliente para mais segurança das partes do
                      negócio tratado, tais como: 1. Conheça ao máximo o
                      comprador, observe se o mesmo possui local de trabalho
                      físico (clínica, consultório,etc), característico de
                      potencial comprador de aparelhosde raios-x. 2. Não forneça
                      nenhum dado pessoal de documentos sem averiguar quem é o
                      possível comprador/vendedor. 3. Jamais compre ou venda se
                      fazer um contrato em que ambas as partes registrem suas
                      assinaturas em cartório. 4. Jamais baseie a compra ou
                      venda somente por textos ou mensagens de aplicativos, se
                      ambas as partes não se conhecem. Mesmo assim, perceba
                      quaisquer tramas sutis. 5. Jamais se encontre pessoalmente
                      sem ter conhecimento do comprador ou vendedor previamente.
                      6. Fique atento à possíveis mensagens enganosas de
                      solicitação de pagamentos, ou dados pessoais
                      principalmente antecipados. 7. Grave todas as mensagens e
                      ligações ou vídeo chamadas das conversas nas negociações.
                      8. Obtenha o número de série do aparelho ou produto e
                      rastreie-o.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    );
}
export default Aboutus;
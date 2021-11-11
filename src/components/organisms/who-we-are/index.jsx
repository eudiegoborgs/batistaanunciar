import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
  display: flex;
  justify-content: space-between;
  @media(max-width: 560px) {
    display: block;
  }
  >div {
    padding: 0 20px;
    @media(max-width: 560px) {
      padding: 20px 0;
    }
  }
  .title {
    width: 40%;
    font-style: italic;
    @media(max-width: 560px) {
      width: 100%;
    }
  }
  .content {
    width: 60%;
    @media(max-width: 560px) {
      width: 100%;
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 300;
  }
  h5 {
    margin: 0.5rem 0;
  }
`

const WhoWeAre = () => (
  <section className={`primary_light`}>
    <a className="anchor" id="quem-somos"/>
    <Content>
      <div className={style}>
        <div className="title">
          <h2 className="section_title">
            Igreja Batista <strong>Anunciar</strong>.
          </h2>
          <h5>Visão:</h5>
          <p className="body__secondary">
            Ser um sinal histórico do reino de Deus, edificando uma igreja de discipulos.
          </p>
          <h5>Missão:</h5>
          <p className="body__secondary">
            Capacitação e treinamento dos membros como discipulos do evangelho de Cristo na visão celular.
          </p>
        </div>
        <div className="content">
          <p>
            Somos uma instituição religiosa que oferece diferentes maneiras de anunciar a palavra de Deus e de exercer seu papel social. Isso se dá por meio de cultos, reuniões de células, encontros, mídias sociais, missões, escola bíblica e cursos de capacitação;eventos para homens, mulheres, crianças e idosos, zelando pelo atendimento e manutenção da família como princípio basilar da sociedade; prestação de assistência alimentar e à saúde da comunidade na distribuição de cestas básicas e nas parcerias com órgãos governamentais.Uma igreja apaixonada e apaixonante! Comprometida em gerar vidas para o Reino e discipulá-las segundo o caráter de Cristo!
          </p>
        </div>
      </div>
    </Content>
  </section>
)

export default WhoWeAre;
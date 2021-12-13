import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const meetings = [
  {
    name: 'Juventude Anunciar',
    period: 'Todo sábado',
    hour: '20:00',
    target: 'Jovens'
  },
  {
    name: 'Anunciar TEEN',
    period: 'Toda terça-feira',
    hour: '20:00',
    target: 'Adolescentes'
  },
  {
    name: 'Culto de celebração',
    period: 'Todo domingo',
    hour: '09:30 | 17:00 | 19:30',
    target: 'Todos os membros'
  },
  {
    name: 'Escola Bíblica',
    period: 'Toda segunda',
    hour: '20:00',
    target: 'Todos os membros'
  },
  {
    name: 'Culto Diamante',
    period: '2º sábado do mês',
    hour: '16:30',
    target: 'Idosos'
  }
];

const style = css`
  .section_title {
    text-align: center;
    &::after {
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  .content {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 560px) {
      display: block;
    }
    >div {
      width: 25%;
      @media(max-width: 560px) {
        width: 100%;
      }
      padding: 15px;
      text-align: center;

      &::before {
        margin: 0 auto;
        margin-bottom: 35px;
        content: "";
        display: block;
        width: 120px;
        background: var(--black);
        height: 1px;
        opacity: .2;
      }
      &:first-child {
        &::before {
          background: transparent;
        }
      }
      @media(min-width: 560px) {
        &::before {
          margin-top: 30px;
          margin-left: -15px;
          margin-bottom: 20px;
          position: absolute;
          width: 1px;
          height: 120px;
        }
      }
      p {
        font-style: italic;
        font-size: 0.8rem;
      }
    }
    h4 {
      max-width: 90%;
      margin: 0 auto;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }
`

const Meetings = () => (
  <section className={`${style}`}>
    <a className="anchor" id="cultos"/>
    <Content>
      <h2 className="section_title gradient__text">Cultos</h2>
      <div className="content">
        {meetings.map(meeting => (
          <div>
            <h4>{meeting.name}</h4>
            <p>
              {meeting.period} às<br/>{meeting.hour}
            </p>
            <p><strong>Públic Alvo:</strong> <br/>
            {meeting.target}.</p>
          </div>
        ))}
      </div>
    </Content>
  </section>
)

export default Meetings;
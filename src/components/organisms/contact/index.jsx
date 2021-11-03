import React from 'react';
import { css } from 'emotion';
import Content from '../content';
import Button from '../../atoms/button'

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
    width: 45%;
    font-style: italic;
    @media(max-width: 560px) {
      width: 100%;
    }
  }
  .content {
    width: 55%;
    @media(max-width: 560px) {
      width: 100%;
    }
  }
  h2 {
    font-family: "Playfair Display", sans-serif;
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 1.24em;
  }
  form {
    padding-top: 30px;
    width: 100%;
    display: block;
    input, textarea {
      display: block;
      width: 100%;
      ${'' /* box-shadow: 0 10px 16px 0 var(--white); */}
      border-radius: 5px;
      border: solid 1px var(--primary);
      padding: 5px 10px;
      background-color: var(--white);
      color: var(--black);
    }
    .submit {
      text-align: right;
    }
  }
`

const Contact = () => { 
  const [sended, setSended] = React.useState(false);
  const [exception, setException] = React.useState(false);

  const onSubmit = event => {
    event.preventDefault()
    let myForm = document.getElementById('contact');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setSended("Mensagem enviada com sucesso"))
      .catch((error) =>setException("Erro ao enviar mensagem. Tente novamente."))
  }

  return (
    <section className={`primary_light`}>
      <a className="anchor" id="contato"/>
      <Content>
        <div className={style}>
          <div className="title">
            <h2 className="section_title">
              Se preferir, você também pode nos enviar uma mensagem. <br/> <strong>É um grande prazer te ouvir ;)</strong>
            </h2>
            <p className="body__secondary">
              Você pode usar esse canal para enviar mensagens aos nossos pastores, fazer pedidos de oração, registrar testemunhos, pedir conselhos, conhecer mais sobre Cristo, entregar sua vida para Jesus, ou qualquer outro assunto que você ache necessário.
            </p>
          </div>
          <div className="content">
            <form name="contact" id="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className={style} onSubmit={onSubmit}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div style={{
                marginBottom: 30
              }}>
                <label>Nome: <input type="text" name="name" /></label>
                <label>E-mail: <input type="email" name="email" /></label>
                <label>Mensagem: <textarea name="message"></textarea></label>
                <p className="body__secondary"><em>{sended || exception}</em></p>
              </div>
              {!sended && (<div className="submit">
                <Button type="submit" disabled={sended}>Enviar uma mensagem</Button>
              </div>)}
              
            </form>
          </div>
        </div>
      </Content>
    </section>
  )
}
export default Contact;
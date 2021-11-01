import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
`

const Contact = () => (
  <section id="contato" className={`${style} primary_light`}>
    <Content>
      <h2 className="section_title">Fale conosco</h2>
    </Content>
  </section>
)

export default Contact;
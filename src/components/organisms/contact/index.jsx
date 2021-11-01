import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
`

const Contact = () => (
  <section className={`${style} primary_light`}>
    <a className="anchor" id="contato"/>
    <Content>
      <h2 className="section_title">Fale conosco</h2>
    </Content>
  </section>
)

export default Contact;
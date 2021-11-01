import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
`

const HelpUs = () => (
  <section className={`${style} dark`}>
    <a className="anchor" id="contribua"/>
    <Content>
      <h2 className="section_title">Contribua</h2>
    </Content>
  </section>
)

export default HelpUs;
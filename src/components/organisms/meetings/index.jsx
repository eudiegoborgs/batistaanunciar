import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
`

const Meetings = () => (
  <section className={`${style}`}>
    <a className="anchor" id="cultos"/>
    <Content>
      <h2 className="section_title">Cultos</h2>
    </Content>
  </section>
)

export default Meetings;
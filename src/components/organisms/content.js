import React from 'react';

const Content = ({ children }) => {
  return (
      <div
        style={{
          maxWidth: 960,
          margin: `3rem auto`,
          padding: '0 30px'
        }}
      >
        <main>{children}</main>
      </div>
  )
}

export default Content;
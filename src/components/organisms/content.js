import React from 'react';

const Content = ({ children }) => {
  return (
      <div
        style={{
          maxWidth: 960,
          margin: `0 auto`,
          padding: '3rem 30px'
        }}
      >
        {children}
      </div>
  )
}

export default Content;
import React from 'react'

const Footer = () => {
  const author = 'P. R. McNie'

  return (
    <div className='footer'>
      <div className='footericons'>
        <i className="fab fa-github"></i>
      </div>
      <div>{author}</div>
    </div>
  )
}

export default Footer

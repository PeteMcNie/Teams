import React from 'react'

const Footer = () => {
  const author = 'P. R. McNie'

  return (
    <div className='footer'>
      <div className='footericons'>
        <a href='https://github.com/PeteMcNie'>
          <i id='github' className="fab fa-github"></i>
        </a>
      </div>
      <div>{author}</div>
    </div>
  )
}

export default Footer

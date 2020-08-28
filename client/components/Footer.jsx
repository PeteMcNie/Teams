import React from 'react'

const Footer = () => {
  const author = 'P. R. McNie'

  return (
    <div className='footer'>
      <div className='footericons' aria-hidden='false'>
        <a href='https://github.com/PeteMcNie' alt='Link to Pete McNie github' aria-label='Link to Pete McNie github'>
          <i id='github' className="fab fa-github"></i>
        </a>
      </div>
      <div>{author}</div>
    </div>
  )
}

export default Footer

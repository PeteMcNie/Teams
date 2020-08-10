import React from 'react'

const Footer = () => {
  const copyright = '2020 McNie Brothers'
  const author = 'P. R. McNie'

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
      <div>{author}</div>
    </div>
  )
}

export default Footer

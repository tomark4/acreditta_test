import React from 'react'

/**
 * Footer shared component
 * @author [jose quintero](https://jottasistemas.com)
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
      <div className="footer">
        <div>
          <h4>Created by Jose Quintero &copy; {currentYear}</h4>
          <p>Data provided by <a href="https://marvel.com" rel="norefer">Marvel</a> &trade;. 2014</p>
        </div>
      </div>
  )
}

export default Footer
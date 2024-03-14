import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faSpotify,
  faApple
} from '@fortawesome/free-brands-svg-icons';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const iconStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '24px',
  margin: '0 10px',
};

export default function Footer() {
  return (
    <footer>
      <div 
      style={{
        justifyContent: 'center', 
        width: '100%', 
        display: 'flex', 
        padding: 20,
        fontSize: 40,
        fontFamily: 'Merriweather, serif'
      }}>
        <h1> MAKEOUT PARTY </h1>
      </div>
      <div className="py-12 md:py-16" style={{paddingTop: 0}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-evenly' }}>
          <li>
            <a href="https://www.instagram.com/makeoutparty_makeoutparty/" style={iconStyle}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/us/artist/makeout-party/1711329073" style={iconStyle}>
              <FontAwesomeIcon icon={faApple} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCHG-wYr9sqh30tIHhrd7WXg" style={iconStyle}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/4SQ8PFyLtHfQoWGHmfSVC7" style={iconStyle}>
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
          <li>
            <a href="https://thatsthefinger.com/" style={iconStyle}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>



          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

          {/* Copyrights note */}
          <div className="text-gray-400 text-sm mr-4" style={{marginTop: 40, justifyContent: 'center', width: '100%', display: 'flex'}}>&copy; Shed Records - All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import './scss/Footer.scss'
import tezTile from '../../img/tezTile.png'
import discord from '../../img/Discord.png';
import telegram from '../../img/Telegram.png';
import twitter from '../../img/Twitter.png';
import github from '../../img/Github.png';

function Footer() {
  return (
    <div className='footer'>
        <div className="wrapper">
            <img className='logo' src={tezTile} alt="" />
            <div className="socials">
                <a href="https://github.com/TarunWebdev/teztris/tree/main/contracts"  target="_blank"><img src={github} alt="" /></a>
                <a href="https://twitter.com/teztile" target="_blank"><img src={twitter} alt="" /></a>
                <a href="#" target="_blank"><img src={telegram} alt="" /></a>
                <a href="#" target="_blank"><img src={discord} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
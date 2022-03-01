import React from 'react'
import {FaLinkedin, FaGithub, FaGitlab, FaDiscord} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/uyohoini-blankson-a827b1117/" target='_blank' rel="noreferrer"> <FaLinkedin /> </a>
        <a href="https://github.com/Usblankson" target='_blank' rel="noreferrer"> <FaGithub /></a>
        <a href="https://gitlab.com/uyohoiniblankson" target='_blank' rel="noreferrer"> <FaGitlab /></a>
        <a href="https://discordapp.com/users/873440907389702144" target='_blank' rel="noreferrer"> <FaDiscord /></a>
    </div>
  )
}

export default HeaderSocials
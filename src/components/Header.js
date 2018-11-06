import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Lawson Tile and Stone</h1>
                <p><a href="tel:719-428-1165">Call Now: (719)428-1165</a></p>
                <p>We are the premiere hard surface flooring specialists in Colorado Springs.</p>
                <p><a href="https://calendly.com/lawsontileandstone/personalized-estimate-meeting">Click here to schedule an estimate.</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Welcome</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

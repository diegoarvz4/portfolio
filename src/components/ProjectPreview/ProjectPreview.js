/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './ProjectPreview.scss';
import githubIcon from '../../assets/icons/github.svg';
import liveDemoIcon from '../../assets/icons/external-link.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';

export default (props) => {

  return (
    <div className={`ProjectPreviewContainer`}>
      <h2 className="ProjectPreviewContainer-title">> {props.name}</h2>
      <div className="ProjectPreviewContainer-content ">
        <p className="ProjectPreviewContainer-content-desc">
          {props.desc}
        </p>
        <div className="ProjectPreviewContainer-content-skills">
          {
            props.skillsIcons !== undefined && props.skillsIcons !== null
            ? props.skillsIcons.map(icon => (
              <span key={icon}><img src={require(`../../assets/icons/${icon}.svg`)} /></span>
            ))
            : null
          }
        </div>
        <div className="ProjectPreviewContainer-content-links">
          <span>
            <a href="https://google.com" target="_blank"  rel="noopener noreferrer">
              <img src={githubIcon} />
              Source Code
            </a>
          </span>
          <span>
            <a href="https://google.com" target="_blank"  rel="noopener noreferrer">
              <img src={liveDemoIcon} />Live Demo
            </a>
          </span>
          <span>
            <a href="https://google.com" target="_blank"  rel="noopener noreferrer">
              <img src={youtubeIcon}/> Walkthrough
            </a>
          </span>
        </div>
      </div>
      <div className="ProjectPreviewContainer-imgContainer">
        <img src={props.img} style={props.imgStyle}/>
      </div>
    </div>
  )
}
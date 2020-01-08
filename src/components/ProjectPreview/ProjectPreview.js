import React from 'react';
import './ProjectPreview.scss';

export default (props) => (
  <div className={`ProjectPreviewContainer ${props.backGroundColor}`}>
    <span>{props.name}</span>
  </div>
)
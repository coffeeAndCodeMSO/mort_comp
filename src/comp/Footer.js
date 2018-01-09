import React from 'react'

import '../css/Footer.css'

const linkStyle = { textDecoration: "none" }

export default () =>
<div className='footer'>
  <div className="footer-header">
    <h3>About this website</h3>
  </div>
  <p>This Website was made by the <a href="https://www.meetup.com/Montana-Programmers/events/244514169/">Coffee & Code club</a> from beautiful Missoula, Montana, USA.</p>
  <p>The source code for this website is available on <a style={linkStyle} href="https://github.com/coffeeAndCodeMSO/mort_comp/"><i className="fa fa-github-alt" aria-hidden="true" /> GitHub</a></p>
</div>

import React from 'react'

const About = props => {
  return (
    <div>
      <h2 className="display-4 mb-3">{props.match.params.name.toUpperCase()}</h2>
      <p>Simple page about contacts</p>
    </div>
  )
}
export default About;

/* eslint no-magic-numbers: 0 */
/* eslint react/prop-types: 0 */
import React from 'react'
import {
  // withKnobs,
  // select,
  // boolean,
  number,
  // text,
  // date,
  // color,
} from '@storybook/addon-knobs'

export default function AjustableFrame (props) {
  const width = number('frame width', Number(props.default_width) || 1250, {range: true, min: 350, max: 1650, step: 50})
  return (
    <div style={{
      width: `${width}px`,
      position: 'relative',
    }}
    >
      <div style={{
        fontSize: '1rem',
        'lineHeight': '1em',
        'position': 'absolute',
        'top': '-1em',
      }}
      >width is: {width}
      </div>
      <div style={props.style}>
        {props.children}
      </div>
    </div>
  )
}

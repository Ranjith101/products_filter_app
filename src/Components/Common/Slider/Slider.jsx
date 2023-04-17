import React from 'react'
import { Slider, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
})
const Slider_comp = ({ values, changePrice}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}> 
      <Slider
        value={values}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={1000}
        max={5000}
        classes={
          {
            thumb:classes.thumb,
            rail:classes.rail,
            track:classes.track
          }
        }
      >

      </Slider>
    </div>
  )
}

export default Slider_comp;
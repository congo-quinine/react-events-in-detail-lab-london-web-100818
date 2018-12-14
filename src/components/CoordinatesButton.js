// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    const mouseX = event.pageX
    const mouseY = event.pageY
    const coordinatesArray = [mouseX, mouseY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render () {
    return (
      <button type='button' onClick={this.handleClick}></button>
    )
  }

}

export default CoordinatesButton





// #### `CoordinatesButton`
//
// 1. In the `components/CoordinatesButton.js` file, create a `CoordinatesButton` React component.
//
// 2. This component takes in one prop: `onReceiveCoordinates`. This prop is a
// _function_ passed down from `index.js`. This function is currently just logging
// whatever is passed into it.
//
// 3. Within `CoordinatesButton`, render a button. On click of the button,
// create an array with two elements: the X and Y coordinates of the mouse. Find
// these using the event data.
//
// 4. Pass this event data in as the argument for the `onReceiveCoordinates` prop.
//
// 5. If successful, the current x,y position of your mouse should be logged.

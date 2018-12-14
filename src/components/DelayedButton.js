// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render () {
    return (
        <button type='button' onClick={this.handleClick}></button>
    )
  }

}

export default DelayedButton



// #### `DelayedButton`
//
// 1. In the `components/DelayedButton.js` file, create a `DelayedButton` React component
//
// 2. This component takes two props: `onDelayedClick` (a function), and `delay` (a
// number).
//
// 3. Create a button that, when clicked, will pass the click event to the
// `onDelayedClick` prop _within_ a `setTimeout()`. The `setTimeout()`
// should be set to `this.props.delay`.
//
// 4. If successful, the event will be logged to the console once the timeout has finished.

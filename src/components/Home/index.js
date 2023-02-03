// Write your JS code here
import './index.css'

import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air Thinking about what to wear to get
          noticed kind of goes against everything we believe in: Clothes are for
          you to enjoy—screw everyone opinions, right? Right. However, we have
          noticed that certain items always seem to get people talking. We also
          particularly enjoy paying other people compliments, and We have
          started to realise a handful of common threads coming up time and
          again.
        </p>
        <button type="button">Shop Now</button>
      </>
    )
  }
}

export default Home

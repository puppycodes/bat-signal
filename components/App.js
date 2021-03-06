/** @jsx h */
const { Component, h } = require('preact')
const Footer = require('./Footer')
const Header = require('./Header')
const Main = require('./Main')

class App extends Component {
  render (props) {
    const state = props.state
    return (
      <div>
        <Header userName={state.userName} />
        <Main state={state} />
        <Footer />
      </div>
    )
  }
}

module.exports = App

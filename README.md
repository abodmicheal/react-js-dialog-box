# react-js-dialog-box

> simple react.js modal box library 

[![NPM](https://img.shields.io/npm/v/react-js-dialog-box.svg)](https://www.npmjs.com/package/react-js-dialog-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro
<p align="center">
  <img src="https://media.giphy.com/media/9AhXVa4v9eef7avcWl/giphy.gif">
</p>

## Install

```bash
npm install --save react-js-dialog-box
```

## Usage

```jsx
import React from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.openBox}>Open ReactDialogBox </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
              headerBackgroundColor='red'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Title'
            >
              <div>
                <h1>Dialog Content</h1>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default App
```

  <img src="https://raw.githubusercontent.com/abodmicheal/react-js-dialog-box/main/dialog-library.PNG">
  
## License

MIT © [abodmicheal](https://github.com/abodmicheal/react-js-dialog-box)

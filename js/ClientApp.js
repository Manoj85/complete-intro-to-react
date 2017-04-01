import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var myFirstComponent = React.createClass({
  render: function () {
    return (
        <div>
            <MyTitle title='props - 1' color='peru' />
            <MyTitle title='props - 2' color='orange' />
            <MyTitle title='props - 3' color='red' />
            <MyTitle title='props - 4' color='green' />
        </div>
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

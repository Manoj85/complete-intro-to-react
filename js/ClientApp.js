import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
        div(null,
            MyTitleFactory({title: 'props - 1', color: 'peru'}),
            MyTitleFactory({title: 'props - 2', color: 'mediumaquamarine'}),
            MyTitleFactory({title: 'props - 3', color: 'pink'}),
            MyTitleFactory({title: 'props - 4', color: 'darkvioletred'})
        )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

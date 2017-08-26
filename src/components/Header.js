import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Header extends Component{
    render(){
        return(
            <div>
                <h1>React 小数</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
)

export default Header;

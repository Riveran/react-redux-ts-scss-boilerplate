import * as React from "react";
import './../css/app.scss'
import { AppProps }  from '../types/types'
import { connect } from 'react-redux'
import { RootState } from './../reducers/index'

interface Test {
    app: AppProps;
}

class App extends React.Component<Test> {

    render() {
        const {compiler, framework} = this.props.app;
        return (
            <div>
                <h1 className="main-wrapper">Hello from {compiler} and {framework} !</h1>
            </div>
        )
    }
}

const mapStateToProps = (store: RootState) => {
    return {
        app: store.app
    }
}

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
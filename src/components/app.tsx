import * as React from "react";
import './../css/app.scss'
<<<<<<< HEAD
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
=======


export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => <h1 className="main-wrapper">Hello from {props.compiler} and {props.framework}!</h1>;
>>>>>>> bfce3b7c37136ec2b4ab3a89cadc997aaa003edc

import * as React from "react";
import './../css/app.scss'


export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => <h1 className="main-wrapper">Hello from {props.compiler} and {props.framework}!</h1>;
import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

export default class Detail extends React.Component<IDetailProps, IDetailState>{

    constructor(props: IDetailProps) {
        super(props)
        this.state = {
         name: this.props.match.params.name
    };
}
render() {
    return <h1>{this.state.name}</h1>
}
}

interface IDetailProps extends RouteComponentProps<{name: string}> {

}

interface IDetailState {
    name: string;
}
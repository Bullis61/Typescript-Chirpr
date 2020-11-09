import react from 'react'
import { Link } from 'react-router-dom'
export default class list extends react.Component<IListProps, IListState>{

    constructor(props: IListProps){
        super(props)

        this.state ={
            names:['Hunter', 'Woods', 'Mason', 'Ronald MF Reagan']
        }
    }
    render(){
        return <ul className="list-group"></ul>
        {this.state.names.map(name => {
            return <li className="list-group-item">
              <Link to={`/${name}`}>{name}</Link> 
                </li>
                
        })}
    }
}

interface IListProps {

}

interface IListState {
    names: Array<string>
}
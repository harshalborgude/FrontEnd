import React ,{Component} from 'react';
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component{
    constructor(){
        super();
       this.state={
        // robots: robots,
        robots: [],
        searchField: ''
       }
       console.log('constructor');
    }

    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=> this.setState({ robots: users }))

        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(Response =>{
        //     return Response.json();
        // })
        // .then(users=>{
        //     this.setState({ robots: users });
        // })

        console.log('robots :',this.state.robots);
        // this.setState({ robots: robots });
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        // console.log(filteredRobots);
    }

    render (){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.robots.length === 0){

            return <h1>Loading...</h1>

        }else{
            console.log('render');
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <hr></hr>
                    {/* sending elements as a props to card method. State have converted to props */}
                    {/* <CardList robots={ this.state.robots } /> */}
                    <Scroll>
                        {/* Scroll componet will be used to scoll only cards and upper part will stay sticked. */}
                        <CardList robots={ filteredRobots } />
                    </Scroll>
                </div>
            );
        }
       
    }


   
}

export default App;
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

// the state is a big object which will contain all state variables
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
        //console.log(this.props.name+"Child Constructor")
    }


    async componentDidMount() {
        //console.log(this.props.name+"Child Component Did Mount")
        //api call

        const data = await fetch ("  https://api.github.com/users/DivyanshGupta0205");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    render() {

        //const {name, location} = this.props;


        //console.log(this.props.name+"Child Render")

        const {name,location,avatar_url} = this.state.userInfo;

        return (
        <div className="user-card">
        <img src= {avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
    </div> 
    )
    }
}

export default UserClass;
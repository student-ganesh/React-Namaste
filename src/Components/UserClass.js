import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("Parent Constructor of functional");
  }

  async componentDidMount() {
    // console.log("ComponentDidMount of functional!");

    const data = await fetch("https://api.github.com/users/student-ganesh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log("Render functional");

    return (
      <div className="flex flex-col items-start p-4 min-h-screen user-card">
        <img
          className="w-32 h-32 mb-4 object-cover rounded-full"
          src={avatar_url}
        />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : ganukadam1978@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

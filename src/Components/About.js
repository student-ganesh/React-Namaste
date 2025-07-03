import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Class based Component");
  }

  componentDidMount() {
    // console.log("componentDidMount Class Based");
  }

  render() {
    // console.log("render class based");
    return (
      <div className="flext-col">
        <h2 className="font-extrabold text-lg p-4 ">About Us</h2>

        {/* We Can Access Hooks like this, where in class based component we're not used a hooks */}
        {/* <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>LoggeddIn</h1>}
          </UserContext.Consumer>
        </div> */}

        <h3 className="p-4">
          Hii,This Is My React Project Whatever I learnt it is!
        </h3>

        <h4>
          <UserClass
            name={"Ganesh Kadam (class based component)"}
            location={"Satara Class Based"}
          />
        </h4>
      </div>
    );
  }
}

export default About;

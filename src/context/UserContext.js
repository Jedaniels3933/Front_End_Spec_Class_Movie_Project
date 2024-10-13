import { createContext } from "react";

// Context - React's built in way to keep track of state globally (Global State Management)
// our first context which we can access from anywhere in our application
// we create our context by setting it up with default values
const UserContext = createContext({
    // default values, our User context expects to be setup with a user object and a setUser function
    user: { name: '', isLoggedIn: false},
    setUser: () => {} //function to modify the user object
})

export default UserContext;

import { useState } from "react";
import UserContext from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import WatchList from "./components/WatchList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState({ name: "", isLoggedIn: false });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* Our Context.Provider is going to take in a set of values and then
      provide them to all of the components inside the Context.Provider tag
      UserContext.Provider takes in the user state that we set up above as a
      value */}
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watch-list" element={<WatchList />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

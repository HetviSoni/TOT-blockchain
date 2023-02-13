import "./App.css";
// import Header from "./components/header/header";
import HomePage from "./components/body/homepage";
import SignupForm from "./components/signUp/SignupForm";
import LoginForm from "./components/signIn/login";
import Profile from "./components/profile/profile";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	const username='';
	return (
		<Fragment>
			<body className="mainbody">
			<Router>
        		<Routes>
					<Route path="/login" caseSensitive={false} element={<LoginForm/>} />
					<Route path="/register" caseSensitive={false} 
					element={<SignupForm />} />
					<Route path="/profile" caseSensitive={false} element={<Profile/>} />
					<Route exact path="/" caseSensitive={false} element={<HomePage/>} />
				</Routes>
			</Router>
			</body>
		</Fragment>
	);
}
export default App;

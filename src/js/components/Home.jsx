import React, {useState} from "react";
import Counter  from "./Counter";

var seconds=0
const Home = () => {
	seconds++



	return (
		<div className="counter text-center">
			<Counter seconds={seconds}/>
		</div>
	);
};

export default Home;
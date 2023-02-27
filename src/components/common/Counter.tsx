import React, { useState, useEffect, useRef } from "react";

const Counter: React.FC<CounterProps> = ({ finalNum }) => {
	const [num, setNum] = useState(0);
	const [inProgress, setInProgress] = useState(true);
	const interval = useRef(null);

	useEffect(() => {
		if (!inProgress) {
			clearInterval(interval.current)
		}
		else {
			interval.current = setInterval(() => {
				setNum(num => num + 1)
			}, 5);
		}
		if (num === finalNum || num > finalNum) {
			setInProgress(false);
		}
		return () => clearInterval(interval.current);
	}, [inProgress, num, finalNum]);

	return (
		<span>{num}</span>
	)
};

type CounterProps = {
	finalNum: number;
};

export default Counter;
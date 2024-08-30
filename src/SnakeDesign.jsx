import React, { useEffect, useRef, useState } from 'react';

function SnakeDesign() {
	const canvasRef = useRef(null);
	const [ intialx, setIntialx ] = useState(10);
	const [ intialy, setIntialy ] = useState(10);
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'red';
		ctx.fillRect(10, 10, 20, 20);
	}, []);
	const addRight = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'red';
		ctx.fillRect(intialx, intialy, 20, 20);
		setIntialx(intialx + 20);
	};
	const addleft = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'green';
		ctx.fillRect(intialx, intialy, 20, 20);
		setIntialx(intialx - 20);
	};
	const addUp = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'blue';
		ctx.fillRect(intialx, intialy, 20, 20);
		setIntialy(intialy - 20);
	};
	const addDown = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'yellow';
		ctx.fillRect(intialx, intialy, 20, 20);
		setIntialy(intialy + 20);
	};
	return (
		<div >
			<canvas ref={canvasRef} width={800} height={500} className='snakeDiv'/>
			<button onClick={addRight}>Add right</button>
			<button onClick={addleft}>Add left</button>
			<button onClick={addUp}>Add up</button>
			<button onClick={addDown}>Add down</button>
		</div>
	);
}

export default SnakeDesign;

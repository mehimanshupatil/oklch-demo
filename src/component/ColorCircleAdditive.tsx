const ColorCircleAdditive = () => {
	return (
		<div className="flex gap-1">
			<div className="relative size-[31rem] bg-black">
				<div className="bg-[#FF0000] mix-blend-screen absolute size-80 rounded-full left-20" />
				<div className="bg-[#00FF00] mix-blend-screen absolute size-80 rounded-full top-36 left-44" />
				<div className="bg-[#0000FF] mix-blend-screen absolute size-80 rounded-full top-36" />
				<span className="absolute top-[20%] left-[45%]">Red</span>
				<span className="absolute top-[68%] right-[18%] text-[black]">
					Green
				</span>
				<span className="absolute top-[68%] left-[18%] text-[aliceblue]">
					Blue
				</span>
				<span className="absolute bottom-[26%] left-[40%] text-[black]">
					G+B=Cyan
				</span>
				<span className="absolute top-[39%] left-[21%] text-[black]">
					R+B=Magenta
				</span>
				<span className="absolute top-[39%] right-[21%] text-[rebeccapurple]">
					R+G=Yellow
				</span>
			</div>
			<div className="relative size-[31rem] bg-black">
				<div className="bg-[#0ff] mix-blend-screen absolute size-80 rounded-full left-20" />
				<div className="bg-[#f0f] mix-blend-screen absolute size-80 rounded-full top-36 left-44" />
				<div className="bg-[#ff0] mix-blend-screen absolute size-80 rounded-full top-36" />
				<span className="absolute top-[20%] left-[45%] text-[black]">Cyan</span>
				<span className="absolute top-[68%] right-[18%] text-[black]">
					Magenta
				</span>
				<span className="absolute top-[68%] left-[18%] text-[black]">
					Yellow
				</span>
			</div>
		</div>
	);
};

export default ColorCircleAdditive;

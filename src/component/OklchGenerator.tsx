import { useImmer } from "use-immer";

const items = [
	{
		key: "l",
		label: "Lightness",
		postfix: "%",
		min: 0,
		max: 100,
		step: 1,
		backgroundImg:
			"linear-gradient(to right, oklch(0% var(--c) var(--h)), oklch(100% var(--c) var(--h)))",
	},
	{
		key: "c",
		label: "Chroma",
		postfix: "",
		min: 0,
		max: 0.37,
		step: 0.01,
		backgroundImg:
			"linear-gradient(to right, oklch(var(--l) 0 var(--h)), oklch(var(--l) 0.37 var(--h)))",
	},
	{
		key: "h",
		label: "Hue",
		postfix: "deg",
		min: 0,
		max: 360,
		step: 1,
		backgroundImg:
			"linear-gradient(to right, oklch(var(--l) var(--c) 0), oklch(var(--l) var(--c) 60), oklch(var(--l) var(--c) 120), oklch(var(--l) var(--c) 180), oklch(var(--l) var(--c) 240), oklch(var(--l) var(--c) 300), oklch(var(--l) var(--c) 360))",
	},
] as const;
const OklchGenerator = () => {
	const [color, setColor] = useImmer({
		l: 100,
		c: 0.37,
		h: 90,
	});
	return (
		<div
			style={{
				// @ts-ignore
				"--l": `${color.l}%`,
				"--c": color.c,
				"--h": color.h,
			}}
		>
			<div className="w-full h-16 mb-1 bg-[oklch(var(--l)_var(--c)_var(--h))]" />
			<div className="flex gap-4">
				{items.map((x) => (
					<div key={x.key} className="flex flex-col flex-1">
						<label htmlFor={x.key}>
							{x.label}: {color[x.key]}
							{x.postfix}
						</label>
						<input
							id={x.key}
							type="range"
							min={x.min}
							max={x.max}
							step={x.step}
							className="appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:border-1 "
							style={{ backgroundImage: x.backgroundImg }}
							value={color[x.key]}
							onChange={(e) => {
								setColor((s) => {
									s[x.key] = +e.target.value;
								});
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OklchGenerator;

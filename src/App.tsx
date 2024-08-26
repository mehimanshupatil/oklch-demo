import "./App.css";
import ColorCircleAdditive from "./component/ColorCircleAdditive";
import ColorCircleSubtractive from "./component/ColorCircleSubtractive";
import OklchGenerator from "./component/OklchGenerator";

function App() {
	return (
		<>
			<h1>OKLCH</h1>
			<div className="card flex flex-col items-center">
				Colors Additive
				<ColorCircleAdditive />
			</div>
			<div className="card flex flex-col items-center">
				Colors Subtractive
				<ColorCircleSubtractive />
			</div>
			<div className="card flex flex-col items-center">
				color spectrom visible for human eye
				<a
					href="https://upload.wikimedia.org/wikipedia/commons/b/ba/PlanckianLocus.png"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/ba/PlanckianLocus.png"
						alt="CIE 1931 chromaticity diagram"
						className="bg-white w-96"
					/>
				</a>
				<a
					href="https://upload.wikimedia.org/wikipedia/commons/b/b3/CIE1931xy_gamut_comparison_of_sRGB_P3_Rec2020.svg"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/b3/CIE1931xy_gamut_comparison_of_sRGB_P3_Rec2020.svg"
						alt="CIE 1931 chromaticity diagram"
						className="bg-white w-96"
					/>
				</a>
			</div>

			<div className="card">
				OKLCH generator
				<OklchGenerator />
			</div>
			<div className="card">
				Compare hex and OKLCH:
				<div className="flex gap-4">
					<code>
						<span className="w-full relative block">
							<span className="bg-[#6da3da] absolute top-0 bottom-0 w-full -z-10" />
							{`
              .button {
                /* Blue */
                background: #6da3da;
              } 
              `}
						</span>
						<span className="w-full relative block">
							<span className="bg-[#7cb3eb] absolute top-0 bottom-0 w-full -z-10" />
							{` 
               .button:hover {
                 /* More bright blue */
                 background: #7cb3eb;
               }
              `}
						</span>
						<span className="w-full relative block">
							<span className="bg-[#d68585] absolute top-0 bottom-0 w-full -z-10" />
							{` 
                .button.is-delete {
                  /* Red with the same saturation */
                  background: #d68585;
                }
               `}
						</span>
						<span className="w-full relative block">
							<span className="bg-[#e69494] absolute top-0 bottom-0 w-full -z-10" />
							{` 
                .button.is-delete:hover {
                  /* Red with the same saturation */
                  background: #e69494;
                }
               `}
						</span>
					</code>
					<code>
						<span className=" w-full relative block">
							<span className="bg-[oklch(0.7_0.1_250)] absolute top-0 bottom-0 w-full -z-10" />
							{`
              .button {
                /* Blue */
                background: oklch(0.7 0.1 250);
              } 
              `}
						</span>
						<span className="w-full relative block">
							<span className="bg-[oklch(0.75_0.1_250)] absolute top-0 bottom-0 w-full -z-10" />
							{` 
               .button:hover {
                 /* A brighter blue */
                 background: oklch(0.75 0.1 250);
               }
              `}
						</span>
						<span className=" w-full relative block">
							<span className="bg-[oklch(0.7_0.1_20)] absolute top-0 bottom-0 w-full -z-10" />
							{` 
              .button.is-delete {
                /* Red with the same saturation */
                background: oklch(0.7 0.1 20);
              }
              `}
						</span>
						<span className="w-full relative block">
							<span className="bg-[oklch(0.75_0.1_20)] absolute top-0 bottom-0 w-full -z-10" />
							{` 
              .button.is-delete:hover {
                /* Red with the same saturation */
                background: oklch(0.75 0.1 20);
              }
              `}
						</span>
					</code>
				</div>
			</div>
			<div className="card">
				Compare hsl and OKLCH: lightness and contrast issue
				<div className="flex gap-4">
					<code>
						<span className="text-black w-full relative block">
							<span className="bg-[hsl(110deg_100%_50%)] absolute top-0 bottom-0 w-full -z-10" />

							{`
              .button {
                /* Green */
                background: hsl(110deg 100% 50%);
              } 
              `}
						</span>
						<span className=" w-full relative block">
							<span className="bg-[hsl(240deg_100%_50%)] absolute top-0 bottom-0 w-full -z-10" />

							{` 
               .button:hover {
                 /* Blue */
                 background: hsl(240deg 100% 50%);
               }
              `}
						</span>
					</code>
					<code>
						<span className="w-full relative block">
							<span className="bg-[oklch(50%_0.37_141deg)] absolute top-0 bottom-0 w-full -z-10" />
							{`
              .button {
                /* Green */
                background: oklch(50% 0.37 141deg);
              } 
              `}
						</span>
						<span className="  w-full relative block">
							<span className="bg-[oklch(50%_0.37_264)] absolute top-0 bottom-0 w-full -z-10" />
							{` 
               .button:hover {
                 /* Blue */
                 background: oklch(50% .37 264);
               }
              `}
						</span>
					</code>
				</div>
			</div>

			<div className="card">
				easy predictable relative colors
				<div className="flex gap-4">
					<code>
						<span className=" w-full relative block">
							<span className="  absolute top-0 bottom-0 w-full -z-10" />
							{`
              :root {
                  --error:   oklch(0.6 0.16 30);
                }
                .message.is-error {
                  /* The same color but with different opacity */
                  background:   oklch(from var(--error) l c h / 60%);
                  /* 10% darker */
                  border-color:   oklch(from var(--error) calc(l - 0.1) c h)
                }
                .message.is-success {
                  /* Another hue (green) with the same lightness and saturation */
                  background:   oklch(from var(--error) l c 140);
                }
              `}
						</span>
					</code>
				</div>
			</div>
			<div className="card">
				easy predictable issues in color
				<div className="flex gap-4">
					<code>
						<span className=" w-full relative block">
							<span className="  absolute top-0 bottom-0 w-full -z-10" />
							{`
               .text {
                    /* ERROR: a 20% lightness difference is not sufficient for good contrast and a11y */
                    background:   oklch(0.8 0.02 300);
                    color:   oklch(1 0 0);
                  }

                  .error {
                    /* ERROR: colors have a slightly different hue */
                    background:   oklch(0.9 0.04 30);
                    color:   oklch(0.5 0.19 27);
                  }
              `}
						</span>
					</code>
				</div>
			</div>
			<footer>
				credits:{" "}
				<a
					href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl"
					target="_blank"
					rel="noreferrer"
				>
					evil martians
				</a>{" "}
				|{" "}
				<a
					href="https://keithjgrant.com/posts/2023/04/its-time-to-learn-oklch-color/"
					target="_blank"
					rel="noreferrer"
				>
					keith j grant
				</a>
			</footer>
		</>
	);
}

export default App;

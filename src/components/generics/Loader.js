export default function Loader() {
	return (
		<div className="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
			<style jsx>
				{`
					.lds-facebook {
						display: inline-block;
						position: relative;
                        width: 1.5em;
                        height: 1.5em;
					}
					.lds-facebook div {
						display: inline-block;
						position: absolute;
						left: 10%;
						width: 20%;
						background: #fff;
						animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
					}
					.lds-facebook div:nth-child(1) {
						left: 10%;
						animation-delay: -0.24s;
					}
					.lds-facebook div:nth-child(2) {
						left: 40%;
						animation-delay: -0.12s;
					}
					.lds-facebook div:nth-child(3) {
						left: 70%;
						animation-delay: 0;
					}
					@keyframes lds-facebook {
						0% {
							top: 10%;
							height: 80%;
						}
						50%,
						100% {
							top: 30%;
							height: 40%;
						}
					}
				`}
			</style>
		</div>
	);
}

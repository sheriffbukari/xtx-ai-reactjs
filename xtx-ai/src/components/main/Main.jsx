import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>xtxAI</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Sheriff. </span>
							</p>
							<p>how can i help you today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Ghana.")
								}
							>
								<p>Suggest Some Place To Visit In Ghana.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Explain the process of photosynthesis in simple terms"
									)
								}
							>
								<p>Explain the process of photosynthesis in simple terms </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")
								}
							>
								<p>How do you create a responsive navbar using CSS and JavaScript?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What are some essential skills for becoming a front-end developer?"
									);
								}}
							>
								<p>What are some essential skills for becoming a front-end developer?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
						xtxAI can make mistakes. Double-check information given by xtxAI. We protect your information and privacy.xTx
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

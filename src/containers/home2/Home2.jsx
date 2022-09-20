import img from "../../images/img1.jpg";
import "./Home2.css";

const Home2 = () => {
	return (
		<div className="Home2" id="Home2">
			<div className="Home2Left">
				<img src={img} alt="" />
			</div>
			<div className="Home2Right">
				<h1 className="Home2RightH1">Who we are</h1>
				<p className="Home2RightP">
					We are a tech community that offers a lot more than what is usually
					expected. We connect you with industry experts and organize sessions
					with amazing surprises. We are here to bring a change in your campus
					as well as the overall community.
				</p>
			</div>
		</div>
	);
};

export default Home2;

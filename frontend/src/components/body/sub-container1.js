import "./subcontainer.css";
import {useNavigate} from "react-router-dom";

const Subcontainer1 = (props) => {
	const history = useNavigate();
	return (
		<div className="subcontainer">
			<h3 className="heading">For Companies</h3>
			<p>
				Get the best fragger for your <br />
				company with minimal <br />
				effort
			</p>
			<button className="primary-btn" onClick={()=>history("/company-login")}>Start Recruiting</button>
		</div>
	);
};
export default Subcontainer1;

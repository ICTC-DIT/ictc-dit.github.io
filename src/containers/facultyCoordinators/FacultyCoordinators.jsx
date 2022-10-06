import UserCard from "../../components/userCard/UserCard";
import user from "../../images/user.png";
import "./FacultyCoordinators.css";

const FacultyCoordinators = () => {
	return (
		<div className="FacultyCoordinators">
			<h1 className="FacultyCoordinatorsH1">Faculty Coordinators</h1>
			<div className="FacultyCoordinatorsChild">
				<UserCard
					image={user}
					name="Dr. Sudhani Surname"
					designation="HOD IT"
				/>
				<UserCard image={user} 
				name="Prof. Kapil Dev Sharma" 
				designation="Network Security Specialist" />
			</div>
		</div>
	);
};

export default FacultyCoordinators;

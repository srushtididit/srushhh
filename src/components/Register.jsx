import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const RegistrationPage = () => {
    return (
        <div className="body-register">
            <div className="container-register">
                <h2 className="heading">Registration</h2>
                <form action="RegistrationServlet" method="post" className="form">
                    <input type="text" name="name" placeholder="Name" className="input" required />
                    <input type="email" name="email" placeholder="Email Address" className="input" required />
                    <input type="password" name="password" placeholder="Password" className="input" required />
                    <input type="number" name="age" placeholder="Age" className="input" min="1" required />
                    <select name="gender" className="input" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" name="location" placeholder="Location" className="input" required />
                    <select name="educationLevel" className="input" required>
                        <option value="High School">High School</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" name="fieldOfStudy" placeholder="Field of Study/Interest" className="input" required />
                    <input type="submit" value="Register" className="button" />
                    <input type="reset" value="Reset" className="button" />
                </form>
                <p className="text">
                    Already have an account?{" "}
                    <Link to="/login" className="link">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;

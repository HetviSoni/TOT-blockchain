import React, {  useState } from "react";
import Logo from '../../assets/logohorizontal.png'
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Boy from "../body/boy";
import Container from "../body/container";
const SignupForm = () => {

    const initialValues = { fullName: "", userName: "", address: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        // setIsSubmit(true);
    }

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    //     if (!values.fullName) {
    //         errors.fullName = "Name is required!"
    //     }
    //     if (!values.userName) {
    //         errors.userName = "Username is required!"
    //     }
    //     if (!values.email) {
    //         errors.email = "Email is required!"
    //     } else if (!regex.test(values.email)) {
    //         errors.email = "Please enter a valid email format!"
    //     }
    //     if (!values.password) {
    //         errors.password = "Password is required!"
    //     } else if (values.password.length < 4) {
    //         errors.password = "Password must be more than 4 characters!"
    //     } else if (values.password.length > 10) {
    //         errors.password = "Password cannot exceed more than 10 characters!"
    //     }
    //     if (!values.address) {
    //         errors.address = "Address is required!"
    //     }
    //     return errors;
    // }
    const history = useNavigate();

    return (
        <>
            <div className="home">
                <Boy classname="img" fade={false} />
                <Container className="home--content" />
            </div>

            <section className="signupcontainer">
                <h1 className="logoimg lgimg">
                    <img src={Logo} className="log" alt='Code fraggers logo' onClick={() => history("/code-fraggers/")} ></img>
                </h1>
                <form onSubmit={handleSubmit}>

                    <div className="signupcover">
                        <h1 className="signupheading">Sign up</h1>

                        {/* {(Object.keys(formErrors).length === 0 && isSubmit) ? history("/login")
                            : <div></div>} */}

                        {/* {(Object.keys(formErrors).length !== 0 && isSubmit) ? <div className="row"> */}
                            {/* <div className="col-xs-12 col-sm-6 col-sm-offset-3"> */}
                            {/* <div>
                                <div className="signup-new-message-box">
                                    <div className="signup-new-message-box-danger">
                                        <div className="signup-info-tab signup-tip-icon-danger" title="error"><i></i></div>
                                        <div className="signup-tip-box-danger">
                                            <p>Sign up failed, please try again!</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div>
                            : <div></div>} */}
                        <div className="subcon">
                            {/* <div className="fullname">
                                <p>Fullname</p>
                                <input type="text" placeholder="Fullname" name="fullName" value={formValues.fullName} onChange={handleChange} />
                            </div> */}
                            <p className="signup-error-text"></p>
                            <div className="fullname">
                                <p>Leetcode Username</p>
                                <input type="text" placeholder="Username" name="userName" value={formValues.userName} onChange={handleChange} />
                            </div>
                            <p className="signup-error-text">{}</p>
                            <div className="fullname">
                                <p>Metamask Public Address</p>
                                <input type="text" placeholder="Public Address" name="address" value={formValues.address} onChange={handleChange} />
                            </div>
                            <p className="signup-error-text">{}</p>
                            <div className="fullname">
                                <p>Email</p>
                                <input type="text" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
                            </div>
                            <p className="signup-error-text">{}</p>
                            <div className="fullname">
                                <p>Password</p>
                                <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
                            </div>
                            {/* <p className="signup-error-text">{formErrors.password}</p>
                            <button className="signup-btn">
                                Sign up
                            </button>
                            <div className="signUp"  >
                                <p className="signIn-text">You already have an account?</p>
                                <a onClick={() => history("/login")}>Sign in</a>
                            </div> */}
                        </div>


                    </div>
                </form>
            </section>

        </>

    )
}

export default SignupForm
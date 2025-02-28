import React, { useEffect, useState, useContext } from "react";
import History from "../../assets/history.png"
import Bell from "../../assets/bell.png"
import {ColorRing} from 'react-loader-spinner';
import "./profile.css";
import Logo from "../../assets/logohorizontal.png";
import Edit from "../../assets/arrow-left-thin.png";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import CalendarHeatmap from "react-calendar-heatmap";
import "./streak.css";
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Heatmap({ submissionCalendar }) {
    const today = new Date();
    let submissionCalendarObject = JSON.parse(submissionCalendar);

    const ordered = Object.keys(submissionCalendarObject)
        .sort()
        .reduce((obj, key) => {
            obj[key] = submissionCalendarObject[key];
            return obj;
        }, {});

    function convert(date) {
        var datearray = date.split("/");
        var newdate = datearray[2] + "/" + datearray[0] + "/" + datearray[1];
        return newdate;
    }

    const orderedFormattedDates = Object.keys(ordered).reduce((obj, key) => {
        let dateObject = new Date(key * 1000);
        let humanDateFormat = dateObject.toLocaleDateString();
        obj[key] = convert(humanDateFormat);
        return obj;
    }, {});

    let arr = [];
    arr.push(ordered);

    let dateValues = Object.values(orderedFormattedDates);
    let countValues = Object.values(arr[0]);

    let count = Object.values(orderedFormattedDates).length;

    const data = Array.from(Array(count).keys()).map((index) => {
        return {
            date: dateValues[index],
            count: countValues[index],
        };
    });
    return (
        <div>
            <CalendarHeatmap
                startDate={shiftDate(today, -365)}
                endDate={today}
                values={data}
                classForValue={(values) => {
                    if (!values) {
                        return "color-empty";
                    }
                    return `${values.count}` < 7
                        ? `color-github-${values.count}`
                        : `color-github-7`;
                }}
                tooltipDataAttrs={(data) => {
                    let readableDate = new Date(data.date).toDateString();

                    if (data.count === null) {
                        return null;
                    } else {
                        return {
                            "data-tip": `${data.count} submissions on ${readableDate}`,
                        };
                    }
                }}
                showWeekdayLabels={false}
            />
            <ReactTooltip />
        </div>
    );
}

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

const Profile = () => {
    const history = useNavigate();
    const { email, account, leetcodeName, updateUserProfile } = useContext(AppContext);
    const [loading,setloading] = useState(true);
    const [profile, updateProfile] = useState({
        dp: '',
        easy: 0,
        medium: 0,
        hard: 0,
        submissionCalendar:''
    });

    const API_BASE_URL = "https://b150j.sse.codesandbox.io/"; // Replace with actual API base URL
    const USER_NAME = leetcodeName; // Replace with actual username

    const requestBody = {
        operationName: "getUserProfile",
        username: USER_NAME
    };

    const headers = {
        "Content-Type": "application/json"
    };

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(API_BASE_URL + "user-profile", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user profile");
            }

            const userProfile = await response.json();
            console.log(userProfile)
            updateProfile({
                dp: userProfile.data.matchedUser.profile.userAvatar,
                easy: userProfile.data.matchedUser.submitStats.totalSubmissionNum[1].count,
                medium: userProfile.data.matchedUser.submitStats.totalSubmissionNum[2].count,
                hard: userProfile.data.matchedUser.submitStats.totalSubmissionNum[3].count,
                submissionCalendar : userProfile.data.matchedUser.submissionCalendar,
            })
            
            updateUserProfile({
                dp: profile.dp,
                easy: profile.easy,
                medium: profile.medium,
                hard: profile.hard,
            })

            setloading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, )
    return (
        
        <div className="profile" >
            <div className="navbar" >
                <div className="navbar-logo">
                    <img src={Logo} className="logo" alt='Code fraggers logo' onClick={() => history("/")} ></img>
                </div>
                <div className="navbar-li" >
                    <ul className="list" >
                        <li>
                            <img src={History} alt="'history"  onClick={() => history("/transactions")} />
                        </li>
                        <li>
                            <img src={Bell} alt="bell" />
                        </li>
                        <li>
                            <img src={profile.dp} alt="dp" className="navbar-dp" width={30} height={30} />
                        </li>
                    </ul>
                </div>

            </div>

            <div className="profile-container">
                <div className="container-left" >
                    {
                        loading?(<div className="dp" >
                        <ColorRing visible={true}/>
                    </div>):<img className="dp" src={profile.dp} alt="dp"></img>
                    }
                    
                    <div className="info">
                        <div className="name" >
                            {leetcodeName}
                        </div>
                        <div className="description">
                            I am a sophomore studying at Indian Institute of Information Technology, Vadodara
                        </div>
                        <button className="edit" >
                            <div className="edit-content">
                                <img src={Edit} width={25} height={25} alt="edit" />
                                <small className="edit-btn-text"> Edit Profile</small> 
                            </div>
                        </button>
                    </div>
                </div>
                <div className="container-right">
                    <div className="heading-container"><h2>Profile</h2></div>
                    <div className="container-right-bottom" >
                        <div className="streak-container">
                            <h3>Streak</h3>
                            {
                                loading?(<div className="streak-map" >
                                <ColorRing visible={true}/>
                            </div>):<div>
                                <div className="streak-map">
                                    <Heatmap submissionCalendar={profile.submissionCalendar}/>
                                </div>

                            </div>
                            }
                            
                        </div>
                        <div className="email-container">
                            <h3>Email</h3>
                            <div>{email} 202051178@iiitvadodara.ac.in</div>
                        </div>
                        <div className="address-container">
                            <h3>Metamask public Address</h3>
                            <div>{account}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;


// Profile.jsx
import './Profile.css'
import profilePic from '../../assets/profile.jpg'

const Profile = () => {

    return (
        <>
            <div className="container">
                <div className="profile-card">

                    <div className="profile-header">
                        <div className="avatar-container">
                            <img src={profilePic} alt="Avatar" />
                        </div>

                        <div className="title-group">
                            <div className="name-row">
                                <h1>ABDULLOH | Personal Blog</h1>
                                <span className="verified-icon">✓</span>
                            </div>
                            <p className="username">@Phenomenny</p>
                        </div>
                    </div>

                    {/* Numerical Stats */}
                    <div className="stats-row">
                        <div className="stat-item"><b>300</b><span>Subscribers</span></div>
                        <div className="stat-item"><b>12</b><span>Posts</span></div>
                        <div className="stat-item"><b>3</b><span>Videos</span></div>
                        <div className="stat-item"><b>5</b><span>Links</span></div>
                    </div>

                    {/* Bio and Links */}
                    <div className="profile-bio">
                        <i>ℹ️ This is a personal blog of ABDULLOH. His reports and articles will be pulished first there.</i>
                        <br /><br />

                        <div className="contact-info">
                            <p>🙍🏻 <b>Contact:</b></p>
                            <p>☎️ <i>+998 77 777 77 77</i></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
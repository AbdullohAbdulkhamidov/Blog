// Profile.jsx
import { useEffect, useState } from 'react'
import './Profile.css'
import profilePic from '../../assets/profile.jpg'

const Profile = ({ posts, latestPost }) => {
    const [nowTs, setNowTs] = useState(() => Date.now())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNowTs(Date.now())
        }, 60000)

        return () => clearInterval(intervalId)
    }, [])

    const todayKey = new Date(nowTs).toDateString()
    const thisWeekStart = nowTs - (7 * 24 * 60 * 60 * 1000)
    const postsToday = posts.filter((post) => new Date(post.createdAt).toDateString() === todayKey).length
    const postsThisWeek = posts.filter((post) => new Date(post.createdAt).getTime() >= thisWeekStart).length

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
                        <div className="stat-item"><b>{posts.length}</b><span>Posts</span></div>
                        <div className="stat-item"><b>{postsToday}</b><span>Today</span></div>
                        <div className="stat-item"><b>{postsThisWeek}</b><span>7 Days</span></div>
                    </div>

                    {/* Bio and Links */}
                    <div className="profile-bio">
                        <i>This is a personal blog of ABDULLOH. Reports and articles are published here first.</i>
                        <br /><br />

                        <div className="latest-profile-post">
                            <p><b>Latest update:</b></p>
                            <p>{latestPost ? latestPost.text : 'No posts yet.'}</p>
                        </div>

                        <div className="contact-info">
                            <p><b>Contact:</b></p>
                            <p><i>+998 77 777 77 77</i></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
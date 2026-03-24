// Home.jsx
import './Home.css'

const Home = ({ posts, latestPost }) => {
    const postsCount = posts.length
    const todayKey = new Date().toDateString()
    const todayPosts = posts.filter((post) => new Date(post.createdAt).toDateString() === todayKey).length

    return (
        <>
            <div className="container">
                <div className="home-card">
                    <h1>Welcome back, Abdulloh</h1>
                    <p className="home-subtitle">Your personal channel dashboard updates in real time.</p>

                    <div className="home-stats">
                        <div className="home-stat-item">
                            <b>{postsCount}</b>
                            <span>Total Posts</span>
                        </div>
                        <div className="home-stat-item">
                            <b>{todayPosts}</b>
                            <span>Posted Today</span>
                        </div>
                    </div>

                    <div className="latest-post-box">
                        <h2>Latest post</h2>
                        {latestPost ? (
                            <p>{latestPost.text}</p>
                        ) : (
                            <p>No posts yet. Go to Posts and publish your first one.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
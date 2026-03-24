// PostList.jsx
import { useState } from 'react'
import PostItem from '../post-item/PostItem'
import './PostList.css'

const PostList = ({ posts, onAddPost, onUpdatePost, onDeletePost }) => {
    const [newPostText, setNewPostText] = useState('')
    const [activePostId, setActivePostId] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const trimmedText = newPostText.trim()

        if (!trimmedText) {
            return
        }

        onAddPost(trimmedText)
        setNewPostText('')
    }

    return (
        <>
            <div className="container">
                <div className="postbox">
                    <form className="post-creator" onSubmit={handleSubmit}>
                        <textarea
                            className="post-creator-input"
                            placeholder="Write your new post..."
                            value={newPostText}
                            onChange={(event) => setNewPostText(event.target.value)}
                        />
                        <button className="post-creator-btn" type="submit">Publish</button>
                    </form>

                    {posts.length === 0 ? (
                        <p className="empty-posts">No posts yet. Create your first post above.</p>
                    ) : (
                        posts.map((post) => (
                            <PostItem
                                key={post.id}
                                post={post}
                                isOpen={activePostId === post.id}
                                onToggleOpen={() =>
                                    setActivePostId((prev) => (prev === post.id ? null : post.id))
                                }
                                onEdit={onUpdatePost}
                                onDelete={onDeletePost}
                                onClose={() => setActivePostId(null)}
                            />
                        ))
                    )}

                </div>
            </div>
        </>
    )
}

export default PostList
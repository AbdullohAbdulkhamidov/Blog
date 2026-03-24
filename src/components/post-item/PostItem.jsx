// PostItem.jsx
import { useState } from 'react';
import './PostItem.css';

const PostItem = ({ post, isOpen, onToggleOpen, onEdit, onDelete, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [draftText, setDraftText] = useState(post.text);

    const toggleActions = () => {
        if (isEditing) return;
        onToggleOpen()
    }

    const handleEditStart = (event) => {
        event.stopPropagation();
        setDraftText(post.text);
        setIsEditing(true);
    }

    const handleEditCancel = (event) => {
        event.stopPropagation();
        setDraftText(post.text);
        setIsEditing(false);
    }

    const handleEditSave = (event) => {
        event.stopPropagation();

        const trimmedText = draftText.trim();
        if (!trimmedText) return;

        onEdit(post.id, trimmedText);
        setIsEditing(false);
        onClose();
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        onDelete(post.id);
    }

    return (
        <div className="post-card" onClick={toggleActions}>

            <div className="post-header">
                <span>Phenomenny | Personal Blog</span>
            </div>

            {isEditing ? (
                <textarea
                    className="post-edit-input"
                    value={draftText}
                    onChange={(event) => setDraftText(event.target.value)}
                    onClick={(event) => event.stopPropagation()}
                />
            ) : (
                <p className="post-text">{post.text}</p>
            )}

            <div className="post-meta">
                <span>{isOpen ? '(Click again to hide actions)' : new Date(post.createdAt).toLocaleString()}</span>
                {!isOpen && <span className="interact-hint">...</span>}
            </div>

            {isOpen && (
                <div className="card-actions">

                    {isEditing ? (
                        <>
                            <button className="action-btn edit" onClick={handleEditSave}>
                                <span className="btn-label">Save</span>
                            </button>
                            <button className="action-btn cancel" onClick={handleEditCancel}>
                                <span className="btn-label">Cancel</span>
                            </button>
                        </>
                    ) : (
                        <button className="action-btn edit" onClick={handleEditStart}>
                            <span className="btn-label">Edit</span>
                        </button>
                    )}

                    <button className="action-btn delete" onClick={handleDelete}>
                        <span className="btn-label">Delete</span>
                    </button>
                </div>
            )}

        </div>
    )
}

export default PostItem;
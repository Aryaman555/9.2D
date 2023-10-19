import React, { useState } from 'react';

// Importing components
import PostSelector from '../Components/PostSelector';
import QuestionForm from '../Components/Question';
import ArticleForm from '../Components/ArticleForm';
import FindQuestion from '../Components/SearchQuestion';

// Importing Firebase Firestore (not used in this code snippet)
import 'firebase/firestore';

// Importing CSS styles
import "../CSS/PostPage.css"

function PostPage() {
  // State to manage the selected post type
  const [postType, setPostType] = useState('question');

  return (
    <div className="Post">
      <h1>New Post</h1> {/* Header */}
      
      {/* PostSelector component to select the post type */}
      <PostSelector postType={postType} setPostType={setPostType} />

      {/* Display QuestionForm if postType is 'question' */}
      {postType === 'question' ? <QuestionForm /> : null}

      {/* Display ArticleForm if postType is 'article' */}
      {postType === 'article' ? <ArticleForm /> : null}

      <div className="Find">
        {/* Display FindQuestion component if postType is 'FindQuestion' */}
        {postType === 'FindQuestion' ? <FindQuestion /> : null}
      </div>
    </div>
  );
}

export default PostPage;

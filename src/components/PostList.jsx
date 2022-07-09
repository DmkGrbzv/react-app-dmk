import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({postsList,remove})=>{
  if(!postsList.length){
    return (
      <div>Posts list is empty</div>
    )
  }
  return (
    <div className="post-list">
      <h1>Список постов{postsList.id}</h1>
      <TransitionGroup>
        {postsList.map((post,index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post} number = {index+1}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList;
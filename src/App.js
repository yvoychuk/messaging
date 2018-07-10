import React from 'react';
import { observer, inject } from 'mobx-react';
import PostsView from './components/PostsView';
import Filter from './components/Filter';
import PostForm from './forms/PostForm';

const App = inject("postsStore")(
  observer(
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          term: undefined
        }
      }

      updateFilterTerms = term => {this.setState({term})}

      updatePosts = (term, posts) => (
        posts.filter(p => p.categories.findIndex(c => c === term.id) !== -1)
      )

      render() {
        const {term} = this.state;
        const {postsStore} = this.props;
        let {posts} = postsStore;
        posts = term ? this.updatePosts(term, posts) : posts;
        return <div className="container">
          <div className="row">
            <div className="col-md-6 center-block">
              <h1>messaging</h1>
              {
                postsStore.posts.length > 0
                  ? <div>
                      <Filter handleFilter={this.updateFilterTerms} />
                      <hr />
                    </div>
                  : null
              }
              <div>
                {
                  posts.length > 0
                    ? <PostsView posts={posts} />
                    : <b>no posts</b>
                }
                <hr />
              </div>
              <div>
                <h3>create new post</h3>
                <PostForm
                  onAdd={postsStore.addPost}
                />
              </div>
            </div>
          </div>
        </div>
      }
    }
  )
)

export default App;

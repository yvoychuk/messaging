import { observable, action } from "mobx";
import { v1 as uuidv1 } from "uuid";

export class PostsStore {

  posts = observable([])

  filterTerms = observable({})

  addPost = action(
    ({author, content}) => {
      this.posts.push({
        id: uuidv1(),
        author: author,
        content: content,
        createdAt: Date.now(),
        comments: [],
        categories: []
      });
    }
  )

  editPost = action(
    post => (
      this.posts.map(p => (
        post.id === p.id
          ? Object.assign(p, post)
          : p
      ))
    )
  )

  deletePost = action(
    id => () => (
      this.posts.remove(
        this.posts.find(post => post.id === id)
      )
    )
  )

  updateCategories = action(
    postId => categoryId => (
      this.posts.map(p => (
        postId === p.id
          ? Object.assign(p, {categories: [].concat(p.categories, categoryId)})
          : p
      ))
    )
  )

  updateComments = action(
    postId => commentId => (
      this.posts.map(p => (
        postId === p.id
          ? Object.assign(p, {comments: [].concat(p.comments, commentId)})
          : p
      ))
    )
  )

}

export default new PostsStore()
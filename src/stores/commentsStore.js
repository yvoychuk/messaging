import { observable, action } from "mobx";
import { v1 as uuidv1 } from "uuid";

export class CommentsStore {

  comments = observable([])

  add = action(
    ({content}, onDone) => {
      var data = {
        id: uuidv1(),
        content: content,
        createdAt: Date.now(),
      }
      this.comments.push(data);
      typeof onDone === "function" && onDone(data.id)
    }
  )

  edit = action(
    comment => (
      this.comments.map(c => (
        comment.id === c.id
          ? Object.assign(c, comment)
          : c
      ))
    )
  )

  remove = action(
    id => () => (
      this.comments.remove(
        this.comments.find(comment => comment.id === id)
      )
    )
  )

}

export default new CommentsStore()
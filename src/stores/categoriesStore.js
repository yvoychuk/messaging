import { observable, action } from "mobx";
import { v1 as uuidv1 } from "uuid";

export class CategoriesStore {

  categories = observable([])

  add = action(
    ({name}, onDone) => {
      var data = this.categories.find(cat => cat.name === name);
      if (! data) {
        data = {
          id: uuidv1(),
          name: name,
          createdAt: Date.now(),
        }
        this.categories.push(data);
      }
      typeof onDone === "function" && onDone(data.id)
    }
  )

  edit = action(
    category => (
      this.categories.map(c => (
        category.id === c.id
          ? Object.assign(c, category)
          : c
      ))
    )
  )

  remove = action(
    id => () => (
      this.categories.remove(
        this.categories.find(category => category.id === id)
      )
    )
  )

}

export default new CategoriesStore()
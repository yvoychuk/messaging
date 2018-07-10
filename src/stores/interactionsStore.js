import { observable, action } from "mobx";

export class InteractionsStore {

  interactions = observable([1,2,3])

  addInteraction = action(
    () => {console.log("addInteraction")}
  )

  deleteInteraction = action(
    () => {console.log("deleteInteraction")}
  )

}

export default new InteractionsStore()
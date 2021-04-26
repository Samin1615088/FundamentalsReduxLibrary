import { createBug, removeBug, resolveBug, updateBug } from "./actions";
import store from "./store";

const unSubscribed = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(
	createBug('BUG 1')
)
store.dispatch(
	createBug('BUG 2')
)


store.dispatch(
	resolveBug(1)
)


store.dispatch(
	updateBug(1, "UPDATED")
)

store.dispatch(
	removeBug(1)
)


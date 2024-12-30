import { stackMiddlewares } from "./middleware/stackMiddlewares"
import { withAuth } from "./middleware/withAuth"

const middlewares = stackMiddlewares([withAuth])

export default middlewares;
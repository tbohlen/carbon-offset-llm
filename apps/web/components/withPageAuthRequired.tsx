import type { ComponentType } from "react"
import { redirect } from "next/navigation"
import { auth0 } from '../../lib/auth0'

export function withPageAuthRequired(Component: ComponentType) {
  return async () => {

    const session = await auth0.getSession()

    if (!session) {
      redirect("/error-page")
    }

    return <Component />
  }
}

export default withPageAuthRequired
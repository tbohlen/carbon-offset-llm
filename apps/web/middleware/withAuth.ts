import type { NextFetchEvent, NextRequest } from "next/server"
import { MiddlewareFactory } from "./types"

import { auth0 } from "../lib/auth0"

export const withAuth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // Skip middleware for these paths
    const isStaticFile = request.nextUrl.pathname.startsWith('/_next/static')
    const isImageFile = request.nextUrl.pathname.startsWith('/_next/image')
    const isMetadataFile = [
      '/favicon.ico',
      '/sitemap.xml',
      '/robots.txt'
    ].includes(request.nextUrl.pathname)

    if (!isStaticFile && !isImageFile && !isMetadataFile) {
      return await auth0.middleware(request)
    }

    return next(request, _next)
  }
}
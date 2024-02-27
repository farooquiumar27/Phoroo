import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
  // Protects all routes, including api/trpc.
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
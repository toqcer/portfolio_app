## Tech Stack

1. Bun
2. Next JS app router
3. SwiperJS
4. animate.css

## Supabase middleware notes

IMPORTANT: You _must_ return the supabaseResponse object as it is.
If you're creating a new response object with NextResponse.next() make sure to:

1. Pass the request in it, like so:
   const myNewResponse = NextResponse.next({ request })
2. Copy over the cookies, like so:
   myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
3. Change the myNewResponse object to fit your needs, but avoid changing
   the cookies!
4. Finally:
   return myNewResponse
   If this is not done, you may be causing the browser and server to go out
   of sync and terminate the user's session prematurely!

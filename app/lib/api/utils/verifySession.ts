import { createClient } from "@farcaster/quick-auth"

const { NEXT_PUBLIC_HOST } = process.env

const client = createClient()

export default async function verifySession(session: string): Promise<number> {
  const payload = await client.verifyJwt({
    token: session,
    domain: NEXT_PUBLIC_HOST!,
  })

  return payload.sub
}

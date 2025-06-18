import { createClient } from '@/utils/supabase/server'
import AuthButton from '../components/AuthButton'

export default async function Index() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full h-16 border-b border-b-foreground/10 flex justify-center">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          My Anonymous App
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 py-16">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Welcome</h2>
          { user ? (
            <p>You are logged in. The audio feed will go here.</p>
          ) : (
            <p>Please log in to see content.</p>
          )}
        </main>
      </div>
    </div>
  )
}

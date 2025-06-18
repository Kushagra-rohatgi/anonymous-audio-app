'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export const signIn = async (formData: FormData) => {
  const username = formData.get('username') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const email = `${username}@yourapp.com`

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/login?message=Could not authenticate user')
  }

  return redirect('/')
}

export const signUp = async (formData: FormData) => {
  const username = formData.get('username') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const { error } = await supabase.auth.signUp({
    email: `${username}@yourapp.com`,
    password,
    options: {
      data: {
        username: username,
      },
    },
  })

  if (error) {
    return redirect('/login?message=Could not sign up user')
  }

  return redirect('/login?message=Check email for verification link')
}
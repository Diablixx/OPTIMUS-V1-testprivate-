import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export const getSupabaseClient = () => {
  if (!_supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase environment variables are not configured')
    }

    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }

  return _supabase
}

// Create a proxy object that initializes supabase only when accessed
export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    const client = getSupabaseClient()
    return client[prop as keyof SupabaseClient]
  }
})

export type Article = {
  id: number
  title: string
  content: string
  slug: string
  author: string
  category: string
  excerpt: string
  meta_description?: string
  read_time: string
  published: boolean
  created_at: string
  updated_at: string
  keyword?: string
}
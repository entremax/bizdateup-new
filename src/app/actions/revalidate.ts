'use server'
import { revalidatePath } from 'next/cache'

export async function revalidate(originalPath = '', type?: 'layout' | 'page') {
  revalidatePath(originalPath, type)
}

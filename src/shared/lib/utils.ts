import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import cuid from 'cuid'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createId = () => cuid()

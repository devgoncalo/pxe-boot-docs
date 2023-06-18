import { Warning } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export default function Warnings({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-2.5 rounded-2xl border border-red-500 bg-red-50/50 p-4 leading-5 text-red-900 dark:border-red-500/30 dark:bg-red-500/5 dark:text-red-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.red.300)]">
      <Warning className="mt-0.5 h-5 w-5 flex-none fill-red-500 stroke-white dark:fill-red-500 dark:stroke-red-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        <p>{children}</p>
      </div>
    </div>
  )
}

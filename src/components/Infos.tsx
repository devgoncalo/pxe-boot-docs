import { Info } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export default function Infos({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-2.5 rounded-2xl border border-blue-500 bg-blue-50/50 p-4 leading-5 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.blue.300)]">
      <Info className="mt-0.5 h-5 w-5 flex-none fill-blue-500 stroke-white dark:fill-blue-500 dark:stroke-blue-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        <p>{children}</p>
      </div>
    </div>
  )
}

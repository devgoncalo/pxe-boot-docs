import { Question } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export default function Questions({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-2.5 rounded-2xl border border-yellow-500 bg-yellow-50/50 p-4 leading-5 text-yellow-900 dark:border-yellow-500/30 dark:bg-yellow-500/5 dark:text-yellow-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.yellow.300)]">
      <Question className="mt-0.5 h-5 w-5 flex-none fill-yellow-500 stroke-white dark:fill-yellow-500 dark:stroke-yellow-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        <p>{children}</p>
      </div>
    </div>
  )
}

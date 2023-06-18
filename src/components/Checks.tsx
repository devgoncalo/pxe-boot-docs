import { Check } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export default function Checks({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-2.5 rounded-2xl border border-emerald-500 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.emerald.300)]">
      <Check className="mt-0.5 h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-500 dark:stroke-emerald-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        <p>{children}</p>
      </div>
    </div>
  )
}

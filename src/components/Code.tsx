import { ReactNode } from 'react'

export default function Code({ children }: { children: ReactNode }) {
  return (
    <code className="inline-flex items-center space-x-4 rounded-lg bg-gray-800 p-2 pl-4 text-left text-sm text-white sm:text-sm">
      <span className="flex gap-4">
        <span className="shrink-0 text-green-600">$</span>

        <span className="flex-1">
          <span>{children}</span>
        </span>
      </span>
    </code>
  )
}

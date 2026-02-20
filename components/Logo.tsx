export default function Logo() {
  return (
    <div className="mr-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-2 dark:text-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/static/images/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="mt-1 h-20 w-20 max-w-none object-cover object-center"
      />
    </div>
  )
}

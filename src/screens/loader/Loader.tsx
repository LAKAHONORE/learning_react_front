import '../../index.css'
export default function Loader() {
  return (
    <div className="h-[100dvh] w-full top-0 overflow-hidden z-50 flex justify-center items-center bg-grayColor">
    <div className="flex flex-col items-center mb-10">
      <div className="w-28 animate-pulse">
        <img src="/assets/img/logo-estuaire.png" alt="logo" />
      </div>
      <div className="loader my-8"></div>
    </div>
  </div>
  )
}

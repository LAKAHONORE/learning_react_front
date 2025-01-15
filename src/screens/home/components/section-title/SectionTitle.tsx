import './index.css'

type Props = {
  title : string
}
export default function SectionTitle({title} : Props) {
  return (
    <div className="flex w-full justify-start items-center px-6 md:px-12 mt-24">
      <div className="flex flex-col ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="h-2 bg-purpleColor w-[80%]">
          <div className="h-2 w-4 bg-white spin"></div>
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  image: string;
}

export default function FormationItem({ title, description, image }: Props) {
  return (
    <Link to={''} className="flex flex-col bg-grayColor rounded-sm hover:shadow-lg shadow-black hover:scale-105 duration-300">
      <div className="w-full">
        <img
          src={image}
          className="img-fluid rounded-top"
          alt=""
        />

        <div className="flex flex-col">
          <Link to={''} className="font-semibold text-sm text-center my-6 hover:underline">
            {title}
          </Link>

          <p className="text-sm text-center mb-2 ">
            {description.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
    </Link>

  )
}

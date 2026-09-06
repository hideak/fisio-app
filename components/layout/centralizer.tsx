import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export default function Centralizer(props: Props) {
  return (
    <div className="flex grow justify-center items-center">
      {props.children}
    </div>
  )
}
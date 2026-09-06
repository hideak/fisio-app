import Navigation from "@/components/custom/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Home(props: Props) {
  return (
    <div className="flex grow">
      {props.children}
      <Navigation />
    </div>
  )
}

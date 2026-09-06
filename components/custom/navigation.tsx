import { CalendarClock, CircleDollarSign, House, Menu, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function Navigation() {
  return (
    <div className="flex fixed justify-center left-0 right-0 bottom-0 p-2">
      <div className="grow max-w-[480px]">
        <Tabs className="flex flex-col" defaultValue="account">
          <TabsList className="!h-auto w-auto">
            <TabsTrigger className="flex flex-col" value="home">
              <House />
              <small>Início</small>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col" value="patients">
              <User />
              <small>Pacientes</small>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col" value="schedule">
              <CalendarClock />
              <small>Agenda</small>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col" value="finances">
              <CircleDollarSign />
              <small>Finanças</small>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col" value="menu">
              <Menu />
              <small>Menu</small>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

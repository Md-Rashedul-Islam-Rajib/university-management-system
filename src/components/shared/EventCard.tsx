import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
import { Event } from "@/types/interfaces";

  interface CardProps {
    event : Event;
  }

const EventCard:React.FC<CardProps> = ({event}) => {
  return (
    <Card className="flex w-80 md:w-72 lg:w-80 mx-auto bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{event?.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{event?.date.toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  {event?.description}
                </CardContent>
              </Card>
  )
}

export default EventCard

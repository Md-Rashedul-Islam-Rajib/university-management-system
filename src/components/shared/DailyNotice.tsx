import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const DailyNotice = () => {
  return (
    <>
   
    <Card className="max-w-sm mx-auto bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="md:text-lg lg:text-xl text-black dark:text-white">Daily Notice</CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400"></CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-5">
        <div>
            <h1 className="text-sm md:text-base lg:text-lg font-medium">Payment Due</h1>
            <p className="text-xs md:text-sm">You have a due payment for this semester. Please clear your due payment</p>
        </div>
        <div>
            <h1 className="text-sm md:text-base lg:text-lg font-medium">Mid Term Schedule</h1>
            <p className="text-xs md:text-sm">Mid term exam has been scheduled from this saturday, 13 october, 2024</p>
        </div>
      </CardContent>
    </Card>
    </>
  );
};

export default DailyNotice;

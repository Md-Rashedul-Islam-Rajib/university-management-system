import StudentPortalBanner from "@/components/shared/StudentPortalBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Courses = () => {
  return (
    <div>
      <div className="m-6">
        <StudentPortalBanner />
      </div>
      <div>
        <Tabs defaultValue="current-courses" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="current-courses">Current Courses</TabsTrigger>
            <TabsTrigger value="finished-courses">Finished Courses</TabsTrigger>
            <TabsTrigger value="dropped-courses">Dropped Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="current-courses">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="finished-courses">Change your password here.</TabsContent>
          <TabsContent value="dropped-courses">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;

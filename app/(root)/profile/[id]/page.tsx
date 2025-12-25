import ProfileAvailability from "@/components/profile/ProfileAvailability";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="flex justify-start">
     <ProfileAvailability status={true} offers={true} fullTIme={true} />
    </div>
  );
};

export default page;

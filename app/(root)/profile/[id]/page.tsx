import AboutProfile from "@/components/profile/AboutProfile";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="flex justify-start">
<AboutProfile/>
    </div>
  );
};

export default page;

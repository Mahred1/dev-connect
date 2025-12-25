import SkillsCard from "@/components/profile/SkillsCard";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="flex justify-start">
      <SkillsCard />
    </div>
  );
};

export default page;

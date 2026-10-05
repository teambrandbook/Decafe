interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-[280px] mx-auto group">
      <div className="mb-6 text-black transition-transform duration-500 group-hover:scale-110 group-hover:text-[#c99f5e]">
        {icon}
      </div>
      <h3 className="font-bold text-black text-lg mb-4 group-hover:text-[#c99f5e] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 flex h-[90px] w-[170px] items-center justify-center rounded-2xl bg-white">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[170px] w-[170px] rotate-[25deg] items-center justify-center rounded-2xl bg-white bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

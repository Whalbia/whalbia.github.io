import { PortfolioData } from "@/types";
import NavLink from "./NavLink";
import SocialIcons from "./SocialIcons";

export default function Sidebar({ data }: { data: PortfolioData }) {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[480px] lg:flex-shrink-0 flex flex-col justify-between px-6 py-12 lg:px-16 lg:py-24">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-text-bright leading-tight">{data.name}</h1>
        <p className="mt-3 text-xl lg:text-2xl font-medium text-text-bright">{data.title}</p>
        <nav aria-label="Primary" className="mt-14 hidden lg:block">
          <NavLink section="about" label="About" />
          <NavLink section="experience" label="Experience" />
          <NavLink section="projects" label="Projects" />
        </nav>
      </div>
      <div className="mt-12 lg:mt-0">
        <SocialIcons links={data.links} />
      </div>
    </aside>
  );
}

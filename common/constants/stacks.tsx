import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm } from "react-icons/fa6";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiNodedotjs,
  SiVuedotjs,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-violet-600" />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-400" />,
  "React.js": <SiReact size={iconSize} className="text-cyan-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-500" />,
  PHP: <SiPhp size={iconSize} className="text-indigo-400" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  MySql: <SiMysql size={iconSize} className="text-blue-400" />,
  MongoDb: <SiMongodb size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
};

import dynamic from "next/dynamic";

const Projects = dynamic(import("./Projects"), {ssr: false});
export default Projects;

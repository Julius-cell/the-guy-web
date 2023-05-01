import './Timeline.css';

export default interface TimelineProps {
  projects: Project[];
}

interface Project {
  projectName: string;
  description: string;
  stack: string[];
}

export const Timeline = ({ projects }: TimelineProps) => {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col">
            <div className="h-20 border-l-2 border-black" />
            <div id="circle" />
            <div className="h-20 border-l-2 border-black" />
          </div>
          <div>
            <h2 className="font-semibold">{project.projectName}</h2>
            <ul className="list-disc list-inside">
              {project.stack.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

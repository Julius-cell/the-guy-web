import type { CardProps } from '../../types/components-type-props';

export const Card = ({ cardTitle, description, ...props }: CardProps) => {
  return (
    <div className="p-20">
      <h2>{cardTitle}</h2>
      <p className="mt-20">{description}</p>
      <div className="mt-20 grid gap-20 grid-cols-2 border rounded p-20">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-slate-500 text-xs">Name</p>
            <p>{props.personDetails?.name}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs">Phone:</p>
            <p>+56 {props.personDetails?.phone}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs">Experience:</p>
            <p>{props.personDetails?.experience}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="text-slate-500 text-xs">Age:</p>
            <p>{props.personDetails?.age}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs">Address:</p>
            <p>{props.personDetails?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

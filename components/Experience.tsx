import { workexperiences } from "@/utils/type";

const Experience = () => {
  return (
    <div>
      <h1 className="text-white text-center  text-2xl my-8">
        Work Experiences
      </h1>
      <div>
        {workexperiences.map((item) => (
          <div
            className="grid text-white  sm: gap-3 grid-cols-2 place-content-center place-items-center p-4"
            key={item.id}
          >
            <div>
              <p className="text-xs my-1">{item.company}</p>
              <p className="text-xs my-1">{item.role}</p>
            </div>
            <div>
              <p className="text-xs my-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

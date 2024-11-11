import { descs } from "@/utils/type";
import DescriptionGrid from "./DescriptionGrid";

const Description = () => {
  return (
    <div className="py-4 px-4 my-10">
      <div className="grid grid-cols-4 gap-8 place-content-center place-items-center">
        {descs.map((item) => (
          <p className="text-sm" key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 my-3 sm:grid-cols-2 gap-5 place-content-center place-items-center">
        <DescriptionGrid />
      </div>
    </div>
  );
};

export default Description;

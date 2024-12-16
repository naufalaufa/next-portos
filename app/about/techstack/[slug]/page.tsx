interface Params {
  slug: string;
}

const Page = ({ params }: { params: Params }) => {
  return (
    <div className="bg-slate-900 px-4 min-h-screen w-full grid place-content-center place-items-center">
      <p className="text-white text-2xl font-bold">{params.slug}</p>
      <div className="max-w-sm m-auto">
        <p className="text-white my-4 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta
          illum eius, error neque consequatur repellat ex vero nostrum. Iusto
          nam quisquam, commodi ex tempore accusamus ducimus voluptatem aliquid
          enim! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptas animi sunt nisi alias dolorem quibusdam, expedita provident
          at cumque unde doloremque vitae itaque reprehenderit! Ipsum
          reprehenderit quis recusandae natus incidunt?
        </p>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import newsLatterMessage from "../../public/images/news_latter.png";

const Page = () => {
  return (
    <div className="grid grid-cols-1 bg-slate-900 px-8 sm:grid-cols-2 gap-8 w-full min-h-screen place-content-center place-items-center">
      <div>
        <Image
          layout="intrinsic"
          src={newsLatterMessage}
          alt={"error"}
          className="rounded-lg"
        />
        <p className="text-xs text-white my-2">Jakarta Indonesia 11610</p>
        <p className="text-xs text-white">Phone Number : 0851-5680-2452</p>
      </div>
      <div>
        <form className="grid p-4 rounded-lg gap-3">
          <label className="text-white">Name</label>
          <input
            placeholder="Name"
            className="rounded-lg p-2 text-xs w-44"
            type="text"
            name="user_name"
          />
          <label className="text-white">Email</label>
          <input
            placeholder="Email"
            className="text-xs p-2 rounded-lg"
            type="email"
            name="user_email"
          />
          <label className="text-white">Message</label>
          <textarea
            placeholder="Message"
            className="text-xs w-64 h-32 p-2 rounded-lg"
            name="message"
          />
          <input
            className="text-blue-200 bg-blue-800 p-2 rounded-lg"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;

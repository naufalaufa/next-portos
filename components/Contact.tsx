import Link from "next/link";

const Contact = () => {
  return (
    <Link href={"/contact"} className="fixed bottom-4 left-4">
      <button className="bg-blue-200 rounded-lg px-2 py-3 text-xs">
        Contact Me
      </button>
    </Link>
  );
};

export default Contact;

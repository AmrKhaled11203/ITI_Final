export default function Header1({ header, para, button }) {
  return (
    <div className="mt-30 rounded border border-[#88888833] p-6">
      <h1 className="text-3xl font-bold">{header}</h1>
      <p className="text-md mt-2">{para}</p>
      <div className="bg-[#262626] h-8 w-fit rounded-md text-lg text-white mt-10 items-center justify-center pl-2 px-6">
        {button}
      </div>
    </div>
  );
}

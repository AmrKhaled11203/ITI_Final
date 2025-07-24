export default function HeaderSpan() {
  return (
    <div className="flex flex-wrap justify-center bg-[#191919] gap-2 border border-[#88888833] p-4 sm:p-6 rounded-md text-base sm:text-xl text-center">
      <p>For</p>
      <span className="bg-[#262626] px-2 py-1 rounded-md">Startups</span>
      <p>,</p>
      <span className="bg-[#262626] px-2 py-1 rounded-md">
        Enterprise leaders
      </span>
      <p>,</p>
      <span className="bg-[#262626] px-2 py-1 rounded-md">
        Media & Publishers
      </span>
      <p>and</p>
      <span className="bg-[#262626] px-2 py-1 rounded-md">Social Good</span>
    </div>
  );
}

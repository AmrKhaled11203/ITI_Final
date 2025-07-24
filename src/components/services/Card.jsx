export default function Card({ icon, desc }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded border border-[#88888833] h-45">
      <img src={icon} alt="icon" className="w-20 h-20" />
      <p className="text-md whitespace-pre-line text-white">{desc}</p>
    </div>
  );
}

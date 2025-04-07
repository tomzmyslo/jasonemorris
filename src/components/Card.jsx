export default function Card({ source, title, caption }) {
  return (
    <div className="rounded border border-gray-200">
      <img src={source} className="w-full rounded-t" alt={title} />
      <div className="p-4">
        <h5 className="text-capitalize mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-base" dangerouslySetInnerHTML={{ __html: caption }} />
      </div>
    </div>
  );
}

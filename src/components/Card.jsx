export default function Card({ title, content }) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  }
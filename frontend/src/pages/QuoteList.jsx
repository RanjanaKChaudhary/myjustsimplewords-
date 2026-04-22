function QuoteList({ data = [] }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mt-6">
      {data.map((item, index) => (
        <div key={index} className="mb-4 bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg">{item.author}</h3>
          <p className="text-gray-600">{item.quoteText}</p>
          <span className="text-sm text-gray-400">
            {item.category}
          </span>
        </div>
      ))}
    </div>
  );
}

export default QuoteList;
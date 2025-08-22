export default function History({ history }) {
  return (
    <div className="space-y-4">
      {history.length === 0 ? (
        <p className="text-gray-500 text-center">No hay mensajes todavía</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-xl max-w-[80%] self-end">
              <strong>Tú:</strong> {item.prompt}
            </div>
            <div className="bg-gray-200 text-gray-900 p-3 rounded-xl max-w-[80%]">
              <strong>Ollama:</strong> {item.response}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

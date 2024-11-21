export default function WarningMessage({ warnings }) {
    return (
      <div className="mt-4">
        {warnings.map((warning, index) => (
          <div key={index} className="text-red-500">
            Warning: Mould Number {warning.mould_number} exceeded limit!
          </div>
        ))}
      </div>
    );
  }
  
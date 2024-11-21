export default function ReportTable({ reports }) {
    return (
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Mould Number</th>
            <th className="border border-gray-300 p-2">Tyre Size</th>
            <th className="border border-gray-300 p-2">Count</th>
            <th className="border border-gray-300 p-2">Warnings</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{report.mould_number}</td>
              <td className="border border-gray-300 p-2">{report.tyre_size}</td>
              <td className="border border-gray-300 p-2">{report.count}</td>
              <td className="border border-gray-300 p-2">
                {report.count > report.threshold ? "Over limit!" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
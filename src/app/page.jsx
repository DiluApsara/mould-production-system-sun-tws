import UploadReport from "./components/UploadReport";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Production Report System</h1>
      <UploadReport />
    </main>
  );
}

import pool from "@/db/db";

export async function POST(req) {
  const { reportData } = await req.json();

  try {
    const query = `
      INSERT INTO ProductionDetails (mould_number, count)
      VALUES ($1, $2)
      ON CONFLICT (mould_number)
      DO UPDATE SET count = ProductionDetails.count + EXCLUDED.count;
    `;

    for (let record of reportData) {
      await pool.query(query, [record.mould_number, record.count]);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

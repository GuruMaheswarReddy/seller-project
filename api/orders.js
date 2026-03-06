import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  // Allow your website to access API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // POST → Save Shopify Order
  if (req.method === "POST") {

    try {

      const order = req.body;

      const orderData = {
        orderId: order?.id?.toString(),
        customerName: `${order?.customer?.first_name || ""} ${order?.customer?.last_name || ""}`,
        price: order?.total_price || "0",
        address: order?.shipping_address?.address1 || "No address"
      };

      const { data, error } = await supabase
        .from("orders")
        .insert([orderData]);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({
        success: true,
        data
      });

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // GET → Fetch Orders
  if (req.method === "GET") {

    try {

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json(data);

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  if (req.method === "POST") {

    try {

      const order = req.body;

      const orderData = {
        orderId: order.id,
        customerName: order.customer?.first_name + " " + order.customer?.last_name,
        price: order.total_price,
        address: order.shipping_address?.address1,
        city: order.shipping_address?.city,
        date: order.created_at
      };

      const { error } = await supabase
        .from("orders")
        .insert([orderData]);

      if (error) {
        return res.status(500).json({ error });
      }

      return res.status(200).json({ success: true });

    } catch (err) {

      return res.status(500).json({ error: err.message });

    }
  }

  if (req.method === "GET") {

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json(data);
  }

  res.status(405).json({ message: "Method not allowed" });
}

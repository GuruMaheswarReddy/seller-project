import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {

  // SAVE ORDER
  if (req.method === "POST") {

    try {

      const order = req.body

      const orderData = {
        orderId: order?.id?.toString(),
        customerName: `${order?.customer?.first_name || ""} ${order?.customer?.last_name || ""}`,
        price: order?.total_price || "0",
        address: order?.shipping_address?.address1 || "No address"
      }

      const { data, error } = await supabase
        .from("orders")
        .insert([orderData])

      if (error) {
        return res.status(500).json({ error: error.message })
      }

      return res.status(200).json({ success: true })

    } catch (err) {
      return res.status(500).json({ error: err.message })
    }

  }

  // GET ORDERS
  if (req.method === "GET") {

    try {

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        return res.status(500).json({ error: error.message })
      }

      return res.status(200).json(data)

    } catch (err) {
      return res.status(500).json({ error: err.message })
    }

  }

  return res.status(405).json({ message: "Method not allowed" })
}

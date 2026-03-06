import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables are missing")
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {

  try {

    // =========================
    // POST → Save Shopify Order
    // =========================
    if (req.method === "POST") {

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
        console.error("Insert error:", error)
        return res.status(500).json({ error: error.message })
      }

      return res.status(200).json({
        success: true,
        message: "Order saved",
        data
      })
    }

    // =========================
    // GET → Fetch Orders
    // =========================
    if (req.method === "GET") {

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Fetch error:", error)
        return res.status(500).json({ error: error.message })
      }

      return res.status(200).json(data)
    }

    return res.status(405).json({ message: "Method not allowed" })

  } catch (err) {

    console.error("Server error:", err)

    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

export default async function handler(req, res) {

  if (req.method === "POST") {

    const order = req.body;

    const orderData = {
      orderId: order.id,
      customerName: order.customer?.first_name + " " + order.customer?.last_name,
      price: order.total_price,
      address: order.shipping_address?.address1,
      city: order.shipping_address?.city,
      date: order.created_at
    };

    console.log("Shopify Order:", orderData);

    res.status(200).json({ success: true });

  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

}

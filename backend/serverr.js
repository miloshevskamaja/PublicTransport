//sk_test_51NkuHdA5pUD1hk3FZwiw6JFLeX4vdCy0As1630UkC9WG6bX1bnSTrH5K7bVb2UYFPorQynyi4db1o0WYbQHH4FoN00PviRKDUt
//Daily Ticket: price_1NkuSIA5pUD1hk3Fw2L7auE5
//Monthly Ticket:price_1NkuW6A5pUD1hk3FSxqZa7aF
//Annual Ticket: price_1NkuXrA5pUD1hk3FQFU39x17

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51NkuHdA5pUD1hk3FZwiw6JFLeX4vdCy0As1630UkC9WG6bX1bnSTrH5K7bVb2UYFPorQynyi4db1o0WYbQHH4FoN00PviRKDUt');

const app=express();
app.use(cors({
    origin:"http://localhost:3001/shop",
}));
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req, res)=>{
    console.log(req.body);
    const items =req.body.items;
    let lineItems=[];
    items.forEach((item)=>{
        lineItems.push(
            {
                price:item.id,
                quantity: item.quantity
            }
        )
    });


    
    const session=await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3001/success",
        cancel_url: "http://localhost:3001/cancel"
    });

    res.send(JSON.stringify({
        url:session.url
    }))

});

app.listen(4242, ()=> console.log("Listening on port 4242"));










// require("dotenv").config()

// const express = require("express")
// const app = express()
// const cors = require("cors")
// app.use(express.json())
// app.use(
//   cors({
//     origin: "http://localhost:3003",
//   })
// )

// const stripe = require("stripe")(process.env.sk_test_51NkuHdA5pUD1hk3FZwiw6JFLeX4vdCy0As1630UkC9WG6bX1bnSTrH5K7bVb2UYFPorQynyi4db1o0WYbQHH4FoN00PviRKDUt);
// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Learn React Today" }],
//   [2, { priceInCents: 20000, name: "Learn CSS Today" }],
// ])

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map(item => {
//         const storeItem = storeItems.get(item.id)
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         }
//       }),
//       success_url: `${process.env.CLIENT_URL}/success.html`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     })
//     res.json({ url: session.url })
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }
// })

// app.listen(4000)

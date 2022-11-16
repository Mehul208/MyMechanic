import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

export default function Review() {
    const cartList = useSelector((state) => state.cart.cartItemsList);
    const total = useSelector((state) => state.cart.totalPrice);
    const user = useSelector((state) => state.auth.user);
    const cash = localStorage.getItem("cash");
    const payments = [
        { name: "Card type", detail: "Visa" },
        { name: "Card holder", detail: user.name },
        { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
        { name: "Expiry date", detail: "04/2024" },
    ];
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {cartList.map((product, i) => (
                    <ListItem key={i} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                            primary={product.title}
                            secondary={product.workshop_name}
                        />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ₹ {total}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Address
                    </Typography>
                    <Typography gutterBottom>{user.name}</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {cash && cash === "true" ? (
                            <>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>Cash</Typography>
                                </Grid>
                            </>
                        ) : (
                            payments.map((payment) => (
                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>
                                            {payment.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>
                                            {payment.detail}
                                        </Typography>
                                    </Grid>
                                </React.Fragment>
                            ))
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

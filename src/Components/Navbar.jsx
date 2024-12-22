import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            position="static"
            className="Navbar"
            sx={{ backgroundColor: "#800020" }}
        >
            <Toolbar>
            <Typography
                        href="/"
                        component="a"
                        variant="h6"
                        sx={{
                            mr: 20,
                            ml: 0,
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Radicrafts
                    </Typography>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        gap: "5px",
                        margin: 0,
                        paddingLeft: 20,
                        paddingRight: 0,
                        justifyContent: "space-between",
                    }}
                >
                    <div display="flex" justify-content="space-between">
                        <Button color="inherit" href="/">
                            Home
                        </Button>
                        <Button color="inherit" href="/about">
                            About
                        </Button>
                        <Button color="inherit" href="/services">
                            Services
                        </Button>
                        <Button color="inherit" href="/contact">
                            Contact
                        </Button>
                    </div>

                    <div>
                        <Button color="inherit" href="/login">
                            Login
                        </Button>
                        <Button color="inherit" href="/signup">
                            Sign Up
                        </Button>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

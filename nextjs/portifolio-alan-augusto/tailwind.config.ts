import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'hsl(var(--foreground))',
                        h1: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '800',
                            marginBottom: '1rem',
                            marginTop: '1rem',
                            padding: '0',
                        },
                        h2: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '700',
                            marginBottom: '.4rem',
                            marginTop: '1rem',
                            padding: '0',
                        },
                        h3: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '600',
                            marginBottom: '.4rem',
                            marginTop: '1rem',
                            padding: '0',
                        },
                        p: {
                            marginTop: '0',
                            marginBottom: '1rem',
                            margin: '0',
                            padding: '0',
                            textAlign: 'justify',
                        },
                        strong:{
                            color: 'hsl(var(--primary))',
                            fontWeith: '600',
                        },
                        a: {
                            color: 'hsl(var(--accent))',
                            textDecoration: 'underline',
                            '&:hover': {
                                color: 'hsl(var(--accent-foreground))',
                            },
                            marginBottom: '0',
                            marginTop: '0',
                            padding: '0',
                        },
                        'ul > li::before': {
                            backgroundColor: 'hsl(var(--primary))',
                            marginBottom: '0',
                            marginTop: '0',
                            padding: '0',
                        },
                        blockquote: {
                            borderLeftColor: 'hsl(var(--muted))',
                            color: 'hsl(var(--foreground))',
                            fontStyle: 'italic',
                            marginBottom: '0',
                            marginTop: '0',
                            padding: '0',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
};

export default config;

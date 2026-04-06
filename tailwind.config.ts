import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#3f6a24',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				onyx: '#0A0A0A',
				'grid-line': '#333333',
				'text-dim': '#888888',
			},
			fontFamily: {
				display: ['Inter', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				'noto-sans': ['Noto Sans', 'sans-serif'],
			},
			boxShadow: {
				'gloss-green': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 0 15px rgba(63, 106, 36, 0.4)',
				'glow-card': '0 0 30px rgba(63, 106, 36, 0.15)',
			},
			letterSpacing: {
				tightest: '-0.05em',
				'widest-2': '0.2em',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				grow: {
					from: { transform: 'scaleX(0)' },
					to: { transform: 'scaleX(1)' }
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
						transform: 'rotate(0deg) scale(1)',
					},
					'33%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
						transform: 'rotate(60deg) scale(1.05)',
					},
					'66%': {
						borderRadius: '50% 30% 50% 50% / 40% 50% 60% 50%',
						transform: 'rotate(120deg) scale(0.95)',
					},
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5', transform: 'scaleX(1) scaleY(1)' },
					'50%': { opacity: '0.8', transform: 'scaleX(1.05) scaleY(1.1)' },
				},
				'bar-grow': {
					'0%': { height: '0%', opacity: '0' },
					'100%': { height: 'var(--bar-height)', opacity: '1' },
				},
				'shine': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.5' },
					'25%': { transform: 'translateY(-15px) translateX(5px)', opacity: '0.7' },
					'50%': { transform: 'translateY(-5px) translateX(-5px)', opacity: '0.4' },
					'75%': { transform: 'translateY(-20px) translateX(3px)', opacity: '0.6' },
				},
				'pulse-dot': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' },
				},
				'glow-line': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(200%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'morph': 'morph 12s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'bar-grow': 'bar-grow 1.5s ease-out forwards',
				'shine': 'shine 2s ease-in-out infinite',
				'float-slow': 'float-slow 20s ease-in-out infinite',
				'pulse-dot': 'pulse-dot 3s ease-out infinite',
				'glow-line': 'glow-line 3s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
# Musician Portfolio - Flyer Site

A modern, dark-themed promotional website (flyer-style) for showcasing musical work with vibrant green accent colors. A simple, static, single-page site perfect for quick promotion and easy sharing.

## Features

- 🎨 **Dark theme** with vibrant green accents (#00ff88)
- 📱 **Fully responsive** design for all devices
- 🎵 **Work showcase** section displaying albums, singles, and EPs
- 🎧 **Visual music portfolio** - clean and professional presentation
- 📧 **Contact section** with social media links
- ✨ **Smooth animations** and transitions
- 🚀 **Lightweight & fast** - no backend, pure static site
- 🎯 **Modern, clean UI/UX** - flyer-style design

## Technologies Used

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **No dependencies** - Simple and lightweight

## Project Structure

```
paniq/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation bar
│   │   ├── Navigation.css      # Navigation styling
│   │   ├── Hero.jsx            # Landing section
│   │   ├── Hero.css            # Hero section styling
│   │   ├── About.jsx           # About section with stats
│   │   ├── About.css           # About section styling
│   │   ├── WorkShowcase.jsx    # Music work showcase
│   │   ├── WorkShowcase.css    # Work showcase styling
│   │   ├── Contact.jsx         # Contact information
│   │   └── Contact.css         # Contact section styling
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global CSS variables and styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can deploy this to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Usage

### Main Sections

The site consists of four main sections:

1. **Hero Section** - Eye-catching landing page with call-to-action
2. **About Section** - Artist information and statistics
3. **Work Showcase** - Grid display of music projects (albums, singles, EPs)
4. **Contact Section** - Social media links and contact information

### Customization

#### Content Customization

Edit component files in `src/components/`:

- **Hero.jsx** - Landing section text and buttons
- **About.jsx** - Artist bio and statistics
- **WorkShowcase.jsx** - Music projects (edit the `works` array)
- **Contact.jsx** - Contact information and social links
- **Navigation.jsx** - Navigation menu items

#### Styling Customization

All colors are defined in `src/index.css` using CSS variables:
```css
:root {
  --bg-dark: #0a0a0a;
  --bg-darker: #050505;
  --bg-card: #151515;
  --green-primary: #00ff88;
  --green-secondary: #00cc6a;
  --green-dark: #00994d;
  --text-light: #e0e0e0;
  --text-muted: #888888;
}
```

Change these variables to customize the color scheme.

#### Adding Your Music Projects

Edit `src/components/WorkShowcase.jsx` and update the `works` array:

```javascript
const works = [
  {
    id: 1,
    title: 'Your Song Title',
    type: 'Single',  // or 'EP' or 'Album'
    year: '2024',
    description: 'Your song description',
    audioUrl: 'https://your-audio-url.com/song.mp3',  // Optional
    coverUrl: 'https://your-image-url.com/cover.jpg'  // Optional
  },
  // Add more songs...
]
```

## Color Scheme

- **Background:** Dark (#0a0a0a, #050505)
- **Cards:** Dark gray (#151515)
- **Primary Green:** #00ff88
- **Secondary Green:** #00cc6a
- **Dark Green:** #00994d
- **Text:** Light gray (#e0e0e0)
- **Muted Text:** Gray (#888888)

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

Since this is a static site, you can deploy it anywhere:

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push to GitHub
2. Import project on Vercel
3. Build settings auto-detected

### GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Tips for Flyer-Style Sites

- Keep content concise and impactful
- Use high-quality images
- Make call-to-action buttons prominent
- Ensure fast loading times
- Optimize for mobile viewing
- Keep navigation simple

## License

This project is open source and available for personal and commercial use.

Enjoy showcasing your music! 🎶

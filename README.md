# RRM Speedway 🚦

A minimal, modern web template built with [Astro](https://astro.build/) and enhanced with essential integrations for rapid, scalable development.

## Features

- **Astro**: Lightning-fast static site generator.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Sitemap**: Automatic sitemap generation for SEO.
- **Partytown**: Offload third-party scripts to Web Workers for performance.
- **React**: Use React components seamlessly within Astro.
- **Prettier Astro**: Consistent code formatting for Astro files.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/rrm-speedway.git
cd rrm-speedway
```

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Start the local development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:4321](http://localhost:4321) to view your site.

### Building for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

## Project Structure

```
/
├── public/         # Static assets
├── src/            # Source files
│   ├── components/ # UI components
│   ├── layouts/    # Layouts
│   └── pages/      # Pages (routes)
├── astro.config.mjs
└── tailwind.config.js
```

## Integrations

- **Tailwind CSS**: Utility classes for styling.
- **Sitemap**: Generates `sitemap.xml` automatically.
- **Partytown**: Moves third-party scripts off the main thread.
- **React**: Use React components inside Astro.
- **Prettier Astro**: Formats `.astro` files.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)

---

Made with ❤️ using [Astro](https://astro.build/)

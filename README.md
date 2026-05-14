# Pyonair Analytics

**Your AI Team. Trained on You.**

Privacy-focused web analytics platform. A Google Analytics alternative with no cookies, GDPR compliant out of the box. Track website performance for every client. Part of the Pyonair AI Team platform.

---

## Features

- **No cookies** - No tracking cookies, fully GDPR/CCPA/PECR compliant
- **Privacy-focused** - All data is anonymized, no personal information collected
- **Self-hosted** - Full control over your data, deploy on your own infrastructure
- **Lightweight** - Small script (~2KB), minimal impact on page load
- **Real-time dashboards** - Live visitor counts, pageviews, referrers, devices
- **Multi-site support** - Track unlimited websites from a single installation
- **Custom events** - Track button clicks, form submissions, and custom actions
- **API access** - Full REST API for programmatic data retrieval
- **Team accounts** - Role-based access for your organization
- **Dark mode** - Beautiful interface with light and dark themes

## Brand

| Element | Value |
|---------|-------|
| Primary Color (Red) | `#E63946` |
| Secondary Color (Navy) | `#0F172A` |
| Font | Inter |

## Tech Stack

- **Framework**: Next.js
- **Database**: PostgreSQL (or MySQL)
- **Language**: TypeScript
- **ORM**: Prisma

## Getting Started

### Requirements

- Node.js 18.18 or newer
- PostgreSQL or MySQL database

### Installation

```bash
# Install dependencies
yarn install

# Configure environment
cp .env.example .env
# Edit .env with your database connection string

# Build the application
yarn build

# Start the server
yarn start
```

The application will be available at `http://localhost:3000`.

### Docker

```bash
docker compose up -d
```

See `docker-compose.yml` for configuration options.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Database connection string (PostgreSQL or MySQL) |
| `DATABASE_TYPE` | `postgresql` or `mysql` |
| `HASH_SALT` | Random string for generating unique visitor hashes |

## License

MIT License (preserved from original)

## Credits

Built on [Umami](https://github.com/umami-software/umami) (MIT License).

---

[pyonair.com](https://pyonair.com)

# PC Fusion — Ultimate PC Builder

A beginner-friendly web platform that helps people build a custom PC without needing to be hardware experts. Pick parts by purpose and budget, check that components work together, explore ready-made builds, and share your own setup with the community.

<!-- TODO: add 3–4 screenshots (home, build simulator, pre-builds, community). Save them in /photos and link them here -->
<!-- ![Home page](photos/home.png) -->

## Why this project?

Building a PC can feel overwhelming. There are endless parts, confusing specs, and compatibility traps (for example, a CPU that doesn't fit the motherboard socket). PC Fusion simplifies the process with curated builds and compatibility checks, so beginners can build with confidence.

## Features

- **Account system:** sign up and log in with client-side and server-side validation
- **Build by purpose:** choose Gaming, Video Editing, Office, or Streaming
- **Pre-built suggestions:** ready-made builds for each purpose that you can customize
- **Build simulation tool:** assemble CPU, GPU, motherboard, RAM, storage, PSU, cooler, and case, and see the total price, estimated power consumption, and a compatibility check
- **Community builds:** upload your own setup and browse builds shared by others
- **Guides and support:** beginner guides and a support page
- **Cart and order confirmation:** add parts to a cart and finish with a success page

<!-- TODO: remove any feature that isn't working in the final version, and add any I missed -->

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |
| Local server | XAMPP / WAMP |

<!-- TODO: confirm MySQL (connect.php) and any libraries you used -->

## Project Structure

```text
pc-fusion-project/
├── index.html / index.css          # Home page
├── login.html, signup.html         # Authentication pages
├── login-validation.js             # Login form validation
├── signup-validation.js            # Sign-up form validation
├── login-val.php, code.php         # Server-side auth handling
├── buildPC.html                    # Build selection and simulation
├── buildsuggest.html               # Build suggestions
├── Pre-build-*.html                # Pre-builds: gaming, office, editing, streaming
├── comunity.html                   # Community builds page
├── upload_build.php                # Upload a community build
├── fetch_builds.php                # Load community builds
├── getProducts.php                 # Load components from the database
├── cart.html, success.html         # Cart and confirmation
├── guides.php, support.html        # Guides and support
├── connect.php                     # Database connection
└── photos/                         # Images
```

## Getting Started

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) (or WAMP/MAMP) with Apache, PHP, and MySQL

### Setup

```bash
# 1. Clone into your server's web root (for XAMPP: C:/xampp/htdocs)
git clone https://github.com/Azhayon/pc-fusion-project.git
```

1. Start **Apache** and **MySQL** in the XAMPP control panel.
2. Open **phpMyAdmin** and create a database (for example, `pc_fusion`).
3. Import the database file: `database.sql`
   <!-- TODO: export your database as database.sql and add it to the repo. It isn't in the repository yet. -->
4. Open `connect.php` and set your database name, username, and password.
5. Visit `http://localhost/pc-fusion-project/` in your browser.

## Known Limitations

- The component library does not include every latest part on the market.
- Recommendations are rule-based, so they may not suit every advanced or ultra-high-end build.
- No live prices or stock from online shops.
- No FPS or thermal performance testing yet.

## Roadmap

- [ ] AI assistant for compatibility, pricing, and performance questions
- [ ] Performance simulation (expected FPS, CPU/GPU load, temperature)
- [ ] Real-time price and stock updates from online shops
- [ ] Mobile app version
- [ ] Larger, automatically updated component library

## Team

This project was built as a mini lab project for **CSE416: Web Engineering Lab** at **Daffodil International University**, Dhaka, Bangladesh (December 2025), under the supervision of Ashraful Islam Talukder.

| Name | GitHub |
|---|---|
| MD Azizul Hakim Ayon | [@Azhayon](https://github.com/Azhayon) |
| Avijit Halder Joy | <!-- TODO: add GitHub link --> |
| Himel Ahamed Niloy | <!-- TODO: add GitHub link --> |
| Marjan Hosen Oni | <!-- TODO: add GitHub link --> |

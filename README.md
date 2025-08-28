MonCompagnon App

A cross-platform desktop application built with Tauri, React, and Vite.

Table of Contents

About

Tech Stack

Getting Started

Prerequisites

Installation

Running Locally

Building for Production

Environment Variables

Troubleshooting

Contributing

License

About

MonCompagnon App is a modern desktop app combining the speed and simplicity of React and Vite with the power and security of Tauri. It aims to provide a seamless, lightweight experience across platforms.

Tech Stack

Frontend: React, Vite

Backend: Rust (via Tauri)

Build Tools: Cargo, npm/yarn

Platform: Cross-platform desktop apps via Tauri

Getting Started
Prerequisites

Make sure you have the following installed:

Node.js (v16+ recommended)

Rust and Cargo

Git

Visual Studio Build Tools (Windows)
 (for Rust native dependencies)

Webview2 Runtime (Windows)

Installation

Clone the repository:

git clone https://github.com/yourusername/moncompagnon.git
cd moncompagnon


Install frontend dependencies:

npm install
# or
yarn install


Install Rust dependencies (this is usually handled by Tauri automatically):

rustup update

Running Locally

Run the app in development mode:

npx tauri dev


This command will:

Start the Vite dev server (usually on http://localhost:5173
)

Build and run the Tauri backend and frontend together

Watch for code changes and reload automatically

Building for Production

To build a distributable version of your app:

npx tauri build


This creates optimized binaries for your target OS inside the src-tauri/target/release folder.

Environment Variables

If you use environment variables (e.g., API keys, configuration), create a .env file in the root directory:

VITE_API_KEY=your_api_key_here


Make sure to add .env to .gitignore if it contains sensitive info.

Access env variables in your React code using import.meta.env.VITE_API_KEY.

Troubleshooting
Common Issues

Port conflicts:
If ports 5173, 5174, or 5175 are busy, Vite will try next available ports. Stop other processes or specify a port manually.

Permission denied / Access is denied (os error 5):
Run your terminal or IDE as Administrator or check antivirus software that may block file writes.

Rust build errors:
Make sure you have Visual Studio Build Tools installed on Windows and your Rust toolchain is up to date.

Webview2 runtime missing (Windows):
Download and install the Webview2 runtime from Microsoft’s website.

Cleaning build cache

If you encounter strange build issues, clean caches:

cd src-tauri
cargo clean
cd ..
npm run clean # if you have a custom script or remove node_modules manually

Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes!

License

MIT License

Happy coding! 🚀
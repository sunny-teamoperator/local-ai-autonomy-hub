# Local AI Autonomy Hub

A macOS desktop hub for coordinating local models, cloud providers, MCP servers, and personal automations.

The first iteration is a deliberately small **Tauri 2 + React + TypeScript + Rust** shell. It provides a dashboard and clear boundaries for future integrations without embedding API keys or making assumptions about the eventual orchestration model.

## Prerequisites

- Node.js 20+
- Rust stable and Cargo
- Tauri 2 system prerequisites for macOS

## Development

```bash
npm install
npm run dev
```

To run the desktop application:

```bash
npm run tauri dev
```

The frontend can be built independently with `npm run build`.

## Architecture

- `src/` contains the React dashboard and frontend integration types.
- `src-tauri/` contains the native desktop shell and future privileged commands.
- `docs/architecture.md` describes the planned Python automation layer and OpenAI adapter.

Python is intentionally documented as a future service/automation boundary rather than added as an unused dependency. OpenAI credentials will be supplied through environment-managed configuration when that adapter is implemented; secrets must never be committed to this repository.

## Status

This is an initial project scaffold. Provider connections, model routing, MCP discovery, automations, and persistence are intentionally represented as extension points until their behavior is specified.

# Architecture direction

## Current boundary

The Tauri shell owns the native window and narrowly scoped commands. The React frontend owns presentation and user interaction. The first command, `runtime_status`, is intentionally small: it proves the frontend-to-Rust boundary without coupling the application to a provider.

## Planned Python layer

Python is a future sidecar/service boundary for long-running automations, scheduled jobs, data processing, and integrations that benefit from Python's ecosystem. It should communicate with the desktop shell through a local, authenticated protocol rather than importing UI code.

When that layer is introduced:

- Keep the Python service in its own package with a locked dependency set.
- Define typed request/response contracts at the boundary.
- Start it explicitly from the desktop shell or a user-managed process; do not silently spawn arbitrary processes.
- Store state in an explicit local data directory and keep credentials outside the repository.

## Planned OpenAI adapter

OpenAI should be one provider adapter behind a common model interface, alongside local runtimes and other hosted providers. The adapter should accept an injected client/configuration and expose normalized responses to the orchestration layer.

The eventual adapter must:

- Read the API key from environment-managed configuration or the macOS keychain.
- Never expose the key to the React bundle or commit it to source control.
- Make model, timeout, retry, and usage metadata explicit.
- Report provider errors to the UI instead of returning successful-looking fallback data.

No provider SDK is included yet because model routing, privacy controls, persistence, and approval behavior still need product decisions.

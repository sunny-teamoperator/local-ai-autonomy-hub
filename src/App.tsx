import {
  Bot,
  BrainCircuit,
  Boxes,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Command,
  Cpu,
  LayoutDashboard,
  Network,
  Plus,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./styles.css";

const areas = [
  {
    icon: BrainCircuit,
    label: "Models",
    detail: "DeepSeek, Llama, Mistral, OpenAI",
    status: "Ready to connect",
    tone: "violet",
  },
  {
    icon: Network,
    label: "MCP servers",
    detail: "Tools and context for every workflow",
    status: "Extension point",
    tone: "cyan",
  },
  {
    icon: Workflow,
    label: "Automations",
    detail: "Repeatable work that runs on your terms",
    status: "Extension point",
    tone: "amber",
  },
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={18} />
          </div>
          <div>
            <strong>Autonomy Hub</strong>
            <span>LOCAL / CLOUD</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          <a className="nav-item active" href="#overview">
            <LayoutDashboard size={17} />
            Overview
          </a>
          <a className="nav-item" href="#models">
            <Bot size={17} />
            Models
          </a>
          <a className="nav-item" href="#tools">
            <Boxes size={17} />
            Tools & MCP
          </a>
          <a className="nav-item" href="#automations">
            <Workflow size={17} />
            Automations
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="system-state">
            <CircleDot size={14} />
            <span>Local runtime idle</span>
          </div>
          <a className="nav-item" href="#settings">
            <Settings2 size={17} />
            Settings
          </a>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Sunday, September 6, 2026</p>
            <h1>Good evening, Sunny.</h1>
          </div>
          <button className="icon-button" aria-label="Open command palette">
            <Command size={18} />
          </button>
        </header>

        <div className="hero">
          <div>
            <div className="hero-label">
              <span className="pulse" />
              Your private AI command center
            </div>
            <h2>Build a system that works <em>with</em> you.</h2>
            <p>
              Bring your local models, cloud intelligence, and everyday workflows
              into one calm, observable workspace.
            </p>
            <button className="primary-button">
              <Plus size={17} />
              Add your first connection
            </button>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core"><Cpu size={25} /></div>
            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
          </div>
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">System map</p>
            <h3>Everything in one place</h3>
          </div>
          <a href="#architecture">View architecture <ChevronRight size={15} /></a>
        </div>

        <div className="area-grid">
          {areas.map(({ icon: Icon, label, detail, status, tone }) => (
            <article className="area-card" key={label}>
              <div className={`area-icon ${tone}`}><Icon size={19} /></div>
              <div className="area-copy">
                <div className="card-title-row">
                  <h4>{label}</h4>
                  <ChevronRight size={16} />
                </div>
                <p>{detail}</p>
                <span className={`status ${tone}`}>{status}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="lower-grid">
          <article className="activity-card">
            <div className="card-heading">
              <div>
                <p className="eyebrow">Activity</p>
                <h3>Ready when you are</h3>
              </div>
              <Code2 size={19} />
            </div>
            <p className="empty-copy">
              Connect a model or tool to start building your personal operating
              layer. Your activity will appear here.
            </p>
          </article>
          <article className="runtime-card">
            <div className="runtime-icon"><Cloud size={19} /></div>
            <div>
              <p className="eyebrow">Runtime strategy</p>
              <h3>Local first, cloud when useful.</h3>
              <p>Keep sensitive work on-device and bring in hosted models intentionally.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;

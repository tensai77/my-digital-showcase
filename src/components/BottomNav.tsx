import { Home, User, FolderKanban, Wrench, Mail } from "lucide-react";

export type TabId = "home" | "about" | "projects" | "skills" | "contact";

const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
];

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
        >
          <tab.icon size={20} strokeWidth={activeTab === tab.id ? 2.5 : 1.5} />
          <span className="font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;

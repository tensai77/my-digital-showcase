import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import BottomNav, { type TabId } from "@/components/BottomNav";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { Loader2 } from "lucide-react";

const sections: Record<string, React.FC<{ data: any }>> = {
  home: HomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  contact: ContactSection,
};

const Index = () => {
  const { data, loading } = usePortfolioData();
  const [activeTab, setActiveTab] = useState<TabId>("home");

  if (loading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <ActiveSection data={data} />
        </motion.div>
      </AnimatePresence>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;

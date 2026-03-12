import { motion } from "framer-motion";
import type { PortfolioData } from "@/types/portfolio";

const SkillsSection = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="section-container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="section-title"
      >
        Skills
      </motion.h2>

      <div className="space-y-8">
        {Object.entries(data.skills).map(([category, skills], ci) => (
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + ci * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary font-mono uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="space-y-4">
              {skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.3 + ci * 0.1 + si * 0.05, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

import { motion } from "framer-motion";
import type { PortfolioData } from "@/types/portfolio";

const AboutSection = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="section-container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="section-title"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground leading-relaxed mb-10"
      >
        {data.about}
      </motion.p>

      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-semibold mb-6"
      >
        Experience
      </motion.h3>

      <div className="space-y-0">
        {data.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="timeline-dot mt-1.5" />
              {i < data.experience.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="pb-8">
              <h4 className="font-semibold text-foreground">{exp.role}</h4>
              <p className="text-sm text-primary font-mono">{exp.organization} · {exp.period}</p>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;

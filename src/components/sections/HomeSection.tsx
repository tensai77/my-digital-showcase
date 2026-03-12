import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

const iconMap: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Mail: Mail,
};

const HomeSection = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="section-container flex flex-col items-center text-center min-h-[80vh] justify-center">
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={data.profileImage}
        alt={data.name}
        className="w-28 h-28 rounded-full border-2 border-primary mb-6 object-cover"
      />
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-4xl font-bold mb-2"
      >
        {data.name}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="text-lg text-primary font-medium font-mono mb-4"
      >
        {data.title}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-muted-foreground max-w-md leading-relaxed mb-8"
      >
        {data.introduction}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="flex gap-3"
      >
        {data.socialLinks.map((link) => {
          const Icon = iconMap[link.platform] || Github;
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HomeSection;

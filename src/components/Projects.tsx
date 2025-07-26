import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Kawada Point Cloud Editor",
      category: "3D Visualization Platform",
      description:
        "Engineered a high-performance 3D point cloud visualization web platform handling large-scale datasets (more than 50 million points) with dynamic LOD optimization.",
      achievements: [
        "Developed chunk-based point cloud management system reducing GPU memory consumption by 45%",
        "Built interactive features including real-time cross-section analysis and transparency controls",
        "Implemented optimized PLY file processing with 50% faster loading times and 40% reduced memory footprint",
      ],
      technologies: [
        "React.js",
        "Three.js",
        "WebGL",
        "TypeScript",
        "Performance Optimization",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      link: "https://uat--kawada-pointcloud.netlify.app", // You can add actual links here
    },
    {
      title: "Athena Startup Platform",
      category: "Business Platform",
      description:
        "Led the development of mobile-responsive web application enabling startup founders to register company and submit challenges and get help by the mentors and manage documents.",
      achievements: [
        "Implemented a multi-role system with role-switching for founders, mentors, startup support and admins",
        "Added features for profile photo cropping, enhancing UI personalization",
        "Integrated upload and viewing functionality for product images and documents",
        "Collaborated with clients for requirement gathering, ensuring timely delivery",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "File Upload",
        "Multi-role System",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Kawada Video Analysis Platform",
      category: "Media Processing",
      description:
        "Developed a platform for uploading and previewing recorded videos and live HLS streams, with video trimming functionality.",
      achievements: [
        "Added annotation features for both recorded and streaming videos using Fabric.js",
        "Implemented thumbnail generation by partially loading recorded videos and streaming previews",
        "Added Apache Echarts for better visualization of analyzed data",
      ],
      technologies: [
        "React.js",
        "Fabric.js",
        "HLS",
        "Video Processing",
        "Apache ECharts",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "https://uat--kts-video-analysis.netlify.app",
    },
    {
      title: "Bugsnap Internal Tool",
      category: "Developer Tool",
      description:
        "Developed an internal tool to streamline bug reporting for testers by integrating script directly into the HTML page of the testing website.",
      achievements: [
        "Implemented a Jira-integrated interface for seamless issue reporting",
        "Added features for capturing screenshots, annotating them, and recording screen activity",
        "Enabled testers to set task priorities and edit tickets, improving productivity",
        "Significantly reduced testing and reporting time while improving delivery quality",
      ],
      technologies: [
        "JavaScript",
        "Jira API",
        "Screen Recording",
        "Rich Text Editor",
        "Browser Integration",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Chrome Extension Workflow Tool",
      category: "Browser Extension",
      description:
        "Developed a Chrome extension guiding users through website tasks with Digital Adoption Platform (DAP).",
      achievements: [
        "Highlighted steps on the website using interactive spotlights from walktour package",
        "Simplified complex workflows, improving task completion rates",
        "Reduced navigation issues with real-time prompts and task-specific hints",
      ],
      technologies: [
        "Chrome Extension API",
        "JavaScript",
        "Walktour",
        "DOM Manipulation",
        "User Guidance",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of the innovative projects I've worked on at Codemonk
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-8 min-h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                    aria-label={`Visit ${project.title} project`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {project.achievements
                    .slice(
                      0,
                      hoveredProject === index ? project.achievements.length : 2
                    )
                    .map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-xs text-gray-600 dark:text-gray-400"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  {project.achievements.length > 2 &&
                    hoveredProject !== index && (
                      <li className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        +{project.achievements.length - 2} more achievements...
                      </li>
                    )}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-200 dark:border-gray-600 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

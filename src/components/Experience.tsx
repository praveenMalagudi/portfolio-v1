const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Codemonk</p>
                <p className="text-gray-600 dark:text-gray-300">Bengaluru, Karnataka</p>
              </div>
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  July 2023 – Present
                </span>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Working as a Software Engineer at Codemonk, I've been involved in developing various innovative web
                applications and tools. My role encompasses frontend development, user experience optimization, and
                collaboration with cross-functional teams to deliver high-quality software solutions.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Developing and maintaining complex web applications using React, TypeScript, and modern frontend
                      technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Collaborating with clients for requirement gathering and ensuring timely project delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>Implementing responsive designs and ensuring cross-browser compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>Optimizing application performance and implementing best practices for code quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

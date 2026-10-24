// App State
const appState = {
  currentPage: "home",
  isDarkMode: true,
  currentCourse: null,
  currentLesson: 0,
  userProgress: {
    "Web Design Mastery": 35,
    "Advanced JavaScript": 72,
    "React Pro": 45,
    "UI/UX Fundamentals": 88,
    "Python for Data Science": 20,
    "Digital Marketing Mastery": 55,
  },
  enrolledCourses: {
    "Web Design Mastery": 12,
    "Advanced JavaScript": 24,
    "React Pro": 8,
  },
}

// Course Data with HIGH QUALITY images
const courses = [
  {
    id: 1,
    title: "Web Design Mastery",
    category: "Design",
    description: "Master modern web design principles and create stunning interfaces.",
    instructor: "Sarah Johnson",
    rating: 4.8,
    duration: "8 weeks",
    level: "Beginner",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&q=80",
    fullDescription:
      "Learn to design beautiful, user-friendly websites from scratch. This comprehensive course covers color theory, typography, layout principles, and responsive design.",
    tools: ["Figma", "Adobe XD", "CSS", "HTML"],
    learningPoints: [
      "Master design fundamentals and color theory",
      "Create responsive layouts",
      "Design interactive prototypes",
      "Build a professional portfolio",
    ],
    lessons: [
      { id: 1, title: "Design Fundamentals", duration: "45 min" },
      { id: 2, title: "Color Theory & Typography", duration: "38 min" },
      { id: 3, title: "Layout & Composition", duration: "52 min" },
      { id: 4, title: "Responsive Design", duration: "41 min" },
      { id: 5, title: "Prototype in Figma", duration: "56 min" },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    category: "Programming",
    description: "Deep dive into JavaScript for professional development.",
    instructor: "Mike Chen",
    rating: 4.9,
    duration: "10 weeks",
    level: "Advanced",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&q=80",
    fullDescription:
      "Master advanced JavaScript concepts including async programming, closures, and modern ES6+ features.",
    tools: ["VS Code", "Node.js", "Jest", "Webpack"],
    learningPoints: [
      "Understand closures and scope",
      "Master async/await and promises",
      "Learn ES6+ features",
      "Write efficient algorithms",
    ],
    lessons: [
      { id: 1, title: "Advanced Functions", duration: "48 min" },
      { id: 2, title: "Async Programming", duration: "64 min" },
      { id: 3, title: "ES6+ Features", duration: "55 min" },
      { id: 4, title: "Working with APIs", duration: "42 min" },
    ],
  },
  {
    id: 3,
    title: "React Pro",
    category: "Framework",
    description: "Build professional React applications with modern best practices.",
    instructor: "Emma Wilson",
    rating: 4.7,
    duration: "12 weeks",
    level: "Intermediate",
    icon: "⚛️",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop&q=80",
    fullDescription: "Learn React from components to state management, hooks, and performance optimization.",
    tools: ["React", "Redux", "Next.js", "Testing Library"],
    learningPoints: [
      "Build reusable React components",
      "Master hooks and state management",
      "Optimize performance",
      "Deploy production apps",
    ],
    lessons: [
      { id: 1, title: "React Fundamentals", duration: "50 min" },
      { id: 2, title: "Hooks Deep Dive", duration: "58 min" },
      { id: 3, title: "State Management", duration: "61 min" },
    ],
  },
  {
    id: 4,
    title: "UI/UX Fundamentals",
    category: "Design",
    description: "Learn the principles of user interface and user experience design.",
    instructor: "Alex Turner",
    rating: 4.8,
    duration: "6 weeks",
    level: "Beginner",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&q=80",
    fullDescription:
      "Comprehensive introduction to UI/UX design principles, user research, and creating delightful experiences.",
    tools: ["Figma", "Sketch", "UserTesting", "Hotjar"],
    learningPoints: [
      "Understand user research methods",
      "Create effective wireframes",
      "Design user flows",
      "Conduct usability testing",
    ],
    lessons: [
      { id: 1, title: "UX Research Basics", duration: "44 min" },
      { id: 2, title: "Wireframing & Prototyping", duration: "51 min" },
      { id: 3, title: "Usability Testing", duration: "39 min" },
    ],
  },
  {
    id: 5,
    title: "Python for Data Science",
    category: "Data",
    description: "Analyze data and build machine learning models with Python.",
    instructor: "David Lee",
    rating: 4.9,
    duration: "14 weeks",
    level: "Intermediate",
    icon: "🐍",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop&q=80",
    fullDescription:
      "Learn Python programming with focus on data analysis, visualization, and machine learning algorithms.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    learningPoints: [
      "Master Python fundamentals",
      "Analyze and visualize data",
      "Build machine learning models",
      "Deploy AI applications",
    ],
    lessons: [
      { id: 1, title: "Python Basics", duration: "52 min" },
      { id: 2, title: "Data Analysis with Pandas", duration: "59 min" },
      { id: 3, title: "Machine Learning Intro", duration: "63 min" },
      { id: 4, title: "Neural Networks", duration: "67 min" },
    ],
  },
  {
    id: 6,
    title: "Digital Marketing Mastery",
    category: "Data",
    description: "Learn digital marketing strategies and analytics for business growth.",
    instructor: "Jessica Brown",
    rating: 4.7,
    duration: "9 weeks",
    level: "Beginner",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=500&h=300&fit=crop&q=80",
    fullDescription:
      "Master digital marketing strategies including SEO, social media, email marketing, and conversion optimization.",
    tools: ["Google Analytics", "SEO Tools", "Mailchimp", "Buffer"],
    learningPoints: [
      "Create digital marketing strategies",
      "Master SEO and content marketing",
      "Manage social media campaigns",
      "Analyze marketing metrics",
    ],
    lessons: [
      { id: 1, title: "Marketing Fundamentals", duration: "43 min" },
      { id: 2, title: "SEO & Content Strategy", duration: "54 min" },
      { id: 3, title: "Social Media Mastery", duration: "48 min" },
      { id: 4, title: "Analytics & Metrics", duration: "46 min" },
    ],
  },
]

// Navigation Function
function navigateTo(page) {
  appState.currentPage = page
  window.scrollTo(0, 0)
  renderPage()
}

// Mode Toggle
function toggleDarkMode() {
  appState.isDarkMode = !appState.isDarkMode
  document.body.classList.toggle("light-mode")
  localStorage.setItem("darkMode", appState.isDarkMode)
}

// Render Functions
function renderHome() {
  return `
    <div class="home-page">
        <div class="hero" style="background-image: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(168, 85, 247, 0.1)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop&q=80');">
            <div class="hero-content">
                <h1 class="hero-title">Learn Skills. Visually. Grow Digitally.</h1>
                <p class="hero-subtitle">Master in-demand skills with interactive courses taught by industry experts</p>
                <button class="btn btn-primary btn-large" onclick="navigateTo('courses')">Explore Courses</button>
            </div>
        </div>

        <div class="container">
            <div style="margin: 4rem 0; text-align: center;">
                <h2 class="section-title">Why Choose SkillHub?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🎓</div>
                        <h3>Expert Instructors</h3>
                        <p>Learn from industry professionals with years of experience</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📱</div>
                        <h3>Learn Anywhere</h3>
                        <p>Access courses on mobile, tablet, or desktop devices</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <h3>Certificates</h3>
                        <p>Earn recognized certificates upon course completion</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💬</div>
                        <h3>24/7 Support</h3>
                        <p>Get help whenever you need it from our support team</p>
                    </div>
                </div>
            </div>

            <div style="margin: 4rem 0;">
                <h2 class="section-title" style="margin-bottom: 2rem;">Popular Courses</h2>
                <div class="courses-grid" id="home-courses">
                    ${courses
                      .slice(0, 3)
                      .map((course) => createCourseCard(course))
                      .join("")}
                </div>
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-secondary" onclick="navigateTo('courses')">View All Courses</button>
                </div>
            </div>
        </div>
    </div>
  `
}

function createCourseCard(course) {
  const progress = appState.userProgress[course.title] || 0
  return `
    <div class="course-card" onclick="viewCourseDetail(${course.id})">
        <div class="course-thumbnail" style="background-image: url('${course.image}');"></div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <div class="instructor-info">
                    <div class="instructor-avatar"></div>
                    <span>${course.instructor}</span>
                </div>
                <div class="rating">⭐ ${course.rating}</div>
            </div>
            ${
              progress > 0
                ? `
                <div style="margin-top: 12px;">
                    <div style="font-size: 0.85rem; color: rgba(0, 217, 255, 0.8); margin-bottom: 4px;">${progress}% Complete</div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            `
                : ""
            }
            <button class="btn btn-primary" style="width: 100%; margin-top: 12px; padding: 0.75rem;">Enroll Now</button>
        </div>
    </div>
  `
}

function renderCourses() {
  const filters = ["All", "Design", "Programming", "Framework", "Data"]
  return `
    <div class="courses-page container">
        <h1 class="section-title" style="margin-bottom: 2rem;">All Courses</h1>
        
        <div class="filters">
            ${filters.map((f) => `<button class="filter-btn ${f === "All" ? "active" : ""}" onclick="filterCourses('${f}')">${f}</button>`).join("")}
        </div>
        
        <div class="search-box">
            <input type="text" placeholder="Search courses..." onkeyup="searchCourses(this.value)">
        </div>
        
        <div class="courses-grid" id="courses-grid">
            ${courses.map((course) => createCourseCard(course)).join("")}
        </div>
    </div>
  `
}

function renderCourseDetail() {
  const course = courses.find((c) => c.id === appState.currentCourse)
  if (!course) return renderCourses()

  return `
    <div class="course-detail container">
        <div class="course-banner" style="background-image: url('${course.image}');">
            <div class="course-banner-icon">${course.icon}</div>
        </div>
        
        <div class="course-details">
            <div class="course-info">
                <h1>${course.title}</h1>
                <p>${course.fullDescription}</p>
                
                <div class="learning-points">
                    <h3>What You'll Learn</h3>
                    <ul>
                        ${course.learningPoints.map((point) => `<li>${point}</li>`).join("")}
                    </ul>
                </div>
                
                <div>
                    <h3 style="margin-bottom: 12px;">Tools & Skills</h3>
                    <div class="tools-section">
                        ${course.tools.map((tool) => `<span class="tool-badge">${tool}</span>`).join("")}
                    </div>
                </div>
                
                <div class="curriculum">
                    <h3>Course Curriculum</h3>
                    ${course.lessons
                      .map(
                        (lesson, idx) => `
                        <div class="accordion-item ${idx === 0 ? "open" : ""}">
                            <div class="accordion-header" onclick="toggleAccordion(this)">
                                <div>
                                    <strong>Module ${lesson.id}: ${lesson.title}</strong>
                                </div>
                                <span class="accordion-icon">▼</span>
                            </div>
                            <div class="accordion-content">
                                <p>Learn the key concepts of ${lesson.title.toLowerCase()}. This module covers essential topics and includes practical exercises.</p>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <div>
                <div class="instructor-card">
                    <div class="instructor-avatar-large"></div>
                    <h3>${course.instructor}</h3>
                    <p>Expert Instructor</p>
                    <p>With 10+ years of experience in teaching and industry.</p>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="viewCoursePlayer(${course.id})">Start Learning</button>
                </div>
                
                <div style="margin-top: 2rem; padding: 1.5rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <p style="font-size: 0.95rem; margin-bottom: 1rem;">📚 <strong>${course.duration}</strong></p>
                    <p style="font-size: 0.95rem; margin-bottom: 1rem;">📈 Level: <strong>${course.level}</strong></p>
                    <p style="font-size: 0.95rem;">⭐ Rating: <strong>${course.rating}</strong></p>
                </div>
            </div>
        </div>
    </div>
  `
}

function renderPlayer() {
  const course = courses.find((c) => c.id === appState.currentCourse)
  if (!course) return renderCourses()

  const lesson = course.lessons[appState.currentLesson] || course.lessons[0]
  const progress = Math.round((appState.currentLesson / course.lessons.length) * 100)

  return `
    <div class="player-container container">
        <div>
            <div class="video-player" style="background-image: url('${course.image}');">
                <div class="video-frame">▶️</div>
                <div class="player-controls">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    
                    <div class="control-buttons">
                        <button class="control-btn" onclick="previousLesson()">⏮</button>
                        <button class="control-btn">▶️</button>
                        <button class="control-btn" onclick="nextLesson()">⏭</button>
                        <button class="control-btn">🔊</button>
                        <span class="video-time">12:34 / 45:00</span>
                    </div>
                </div>
            </div>
            
            <div class="player-info" style="margin-top: 2rem;">
                <h3>${lesson.title}</h3>
                <p>This lesson covers the fundamental concepts you need to master. Watch the video, take notes, and complete the exercises to deepen your understanding.</p>
                
                <button class="btn btn-primary" style="margin-top: 1rem; width: 100%;">✓ Mark as Completed</button>
            </div>
            
            <div class="notes-section">
                <h4>📝 Your Notes</h4>
                <textarea class="notes-input" placeholder="Add your notes here..."></textarea>
                <button class="save-notes-btn" onclick="alert('Notes saved successfully!')">Save Notes</button>
            </div>
        </div>
        
        <div class="sidebar">
            <div class="playlist">
                <div style="padding: 1rem; font-weight: 600; border-bottom: 1px solid rgba(0, 217, 255, 0.1);">Lessons</div>
                ${course.lessons
                  .map(
                    (l, idx) => `
                    <div class="playlist-item ${idx === appState.currentLesson ? "active" : ""}" onclick="switchLesson(${idx})">
                        <div class="playlist-title">Lesson ${idx + 1}: ${l.title}</div>
                        <div class="playlist-duration">${l.duration}</div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="resource-section">
                <h4>📁 Resources</h4>
                <div class="resource-item" onclick="alert('Downloading: Lesson PDF')">
                    <span>📄 Lesson PDF</span>
                </div>
                <div class="resource-item" onclick="alert('Downloading: Exercise Files')">
                    <span>📊 Exercise Files</span>
                </div>
                <div class="resource-item" onclick="alert('Downloading: Code Examples')">
                    <span>💾 Code Examples</span>
                </div>
            </div>
        </div>
    </div>
  `
}

function renderDashboard() {
  const enrolled = Object.keys(appState.userProgress).length
  const totalProgress = Object.values(appState.userProgress).reduce((a, b) => a + b, 0)
  const avgProgress = enrolled > 0 ? Math.round(totalProgress / enrolled) : 0

  return `
    <div class="dashboard-page container">
        <h1 class="section-title" style="margin-bottom: 2rem;">Your Learning Dashboard</h1>
        
        <div class="dashboard-grid">
            <div class="dashboard-card overview-card">
                <h3>Overall Progress</h3>
                <div class="progress-circle" style="--progress: ${avgProgress}%">
                    <div class="progress-circle-text">${avgProgress}%</div>
                </div>
                <p style="text-align: center; margin-top: 1rem;">
                    <strong>${enrolled}</strong> course${enrolled !== 1 ? "s" : ""} in progress
                </p>
            </div>

            <div class="dashboard-card">
                <h3>Learning Stats</h3>
                <div style="margin-top: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
                        <span>📚 Courses Enrolled</span>
                        <strong style="font-size: 1.2rem;">${enrolled}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(0, 217, 255, 0.1);">
                        <span>⏱️ Hours Learned</span>
                        <strong style="font-size: 1.2rem;">24h 30m</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>🏆 Certificates</span>
                        <strong style="font-size: 1.2rem;">1</strong>
                    </div>
                </div>
            </div>

            <div class="dashboard-card">
                <h3>Achievements</h3>
                <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="text-align: center; padding: 1rem; background: rgba(0, 217, 255, 0.1); border-radius: 8px;">
                        <div style="font-size: 2rem;">🥇</div>
                        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Beginner</p>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: rgba(236, 72, 153, 0.1); border-radius: 8px;">
                        <div style="font-size: 2rem;">🔥</div>
                        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Streak: 7d</p>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 3rem;">
            <h2 class="section-title" style="margin-bottom: 1.5rem;">Your Courses</h2>
            <div class="dashboard-courses">
                ${Object.keys(appState.userProgress)
                  .map((courseTitle) => {
                    const course = courses.find((c) => c.title === courseTitle)
                    const progress = appState.userProgress[courseTitle]
                    return `
                      <div class="dashboard-course-item">
                          <div class="course-thumbnail-small" style="background-image: url('${course.image}');"></div>
                          <div style="flex: 1;">
                              <h4>${course.title}</h4>
                              <p style="font-size: 0.85rem; color: rgba(228, 230, 235, 0.6); margin: 0.5rem 0;">${progress}% Complete</p>
                              <div class="progress-bar-container" style="height: 4px;">
                                  <div class="progress-bar-fill" style="width: ${progress}%"></div>
                              </div>
                          </div>
                          <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="viewCoursePlayer(${course.id})">Continue</button>
                      </div>
                    `
                  })
                  .join("")}
            </div>
        </div>
    </div>
  `
}

function renderAbout() {
  return `
    <div class="about-page container">
        <div style="text-align: center; margin: 3rem 0;">
            <h1 class="section-title">About SkillHub</h1>
            <p style="font-size: 1.1rem; color: rgba(228, 230, 235, 0.8); max-width: 800px; margin: 1.5rem auto; line-height: 1.8;">
                SkillHub is a modern online learning platform designed to help professionals and beginners master in-demand skills through interactive, visually engaging courses taught by industry experts.
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0;">
            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Mission</h3>
                <p>Democratize quality education and help millions of people reach their full potential through accessible, affordable online learning.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <h3>Vision</h3>
                <p>Become the global leader in online skill development, transforming careers and empowering communities worldwide.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💡</div>
                <h3>Values</h3>
                <p>We believe in the power of continuous learning, innovation, and community. Quality, accessibility, and student success drive everything we do.</p>
            </div>
        </div>

        <div style="margin: 3rem 0;">
            <h2 class="section-title" style="text-align: center; margin-bottom: 2rem;">Our Features</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>
                    <h3>Rich Content</h3>
                    <p>Courses with high-quality videos, interactive exercises, and real-world projects</p>
                </div>
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">👨‍🏫</div>
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of practical experience</p>
                </div>
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
                    <h3>Certificates</h3>
                    <p>Earn recognized certificates to showcase your skills to employers</p>
                </div>
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
                    <h3>Mobile Friendly</h3>
                    <p>Learn on the go with fully responsive design for all devices</p>
                </div>
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">💬</div>
                    <h3>Community Support</h3>
                    <p>Connect with peers, ask questions, and get support 24/7</p>
                </div>
                <div style="padding: 2rem; background: var(--dark-secondary); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.1);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
                    <h3>Flexible Learning</h3>
                    <p>Study at your own pace and schedule that fits your lifestyle</p>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin: 3rem 0; padding: 2rem; background: rgba(0, 217, 255, 0.1); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.2);">
            <h2 class="section-title">Ready to Start Learning?</h2>
            <p style="font-size: 1.1rem; margin: 1rem 0; color: rgba(228, 230, 235, 0.8);">Join thousands of learners already transforming their careers</p>
            <button class="btn btn-primary" onclick="navigateTo('courses')">Explore All Courses</button>
        </div>
    </div>
  `
}

function renderPage() {
  const app = document.getElementById("app")
  if (!app) return

  switch (appState.currentPage) {
    case "home":
      app.innerHTML = renderHome()
      break
    case "courses":
      app.innerHTML = renderCourses()
      break
    case "courseDetail":
      app.innerHTML = renderCourseDetail()
      break
    case "player":
      app.innerHTML = renderPlayer()
      break
    case "dashboard":
      app.innerHTML = renderDashboard()
      break
    case "about":
      app.innerHTML = renderAbout()
      break
    default:
      app.innerHTML = renderHome()
  }
}

function viewCourseDetail(courseId) {
  appState.currentCourse = courseId
  appState.currentPage = "courseDetail"
  renderPage()
  window.scrollTo(0, 0)
}

function viewCoursePlayer(courseId) {
  appState.currentCourse = courseId
  appState.currentLesson = 0
  appState.currentPage = "player"
  renderPage()
  window.scrollTo(0, 0)
}

function switchLesson(lessonIndex) {
  appState.currentLesson = lessonIndex
  renderPage()
  window.scrollTo(0, 0)
}

function nextLesson() {
  const course = courses.find((c) => c.id === appState.currentCourse)
  if (course && appState.currentLesson < course.lessons.length - 1) {
    appState.currentLesson++
    renderPage()
    window.scrollTo(0, 0)
  }
}

function previousLesson() {
  if (appState.currentLesson > 0) {
    appState.currentLesson--
    renderPage()
    window.scrollTo(0, 0)
  }
}

function filterCourses(category) {
  const buttons = document.querySelectorAll(".filter-btn")
  buttons.forEach((btn) => btn.classList.remove("active"))
  event.target.classList.add("active")

  const grid = document.getElementById("courses-grid")
  const filtered = category === "All" ? courses : courses.filter((c) => c.category === category)
  grid.innerHTML = filtered.map((course) => createCourseCard(course)).join("")
}

function searchCourses(query) {
  const grid = document.getElementById("courses-grid")
  if (!grid) return
  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase()),
  )
  grid.innerHTML =
    filtered.length > 0 ? filtered.map((course) => createCourseCard(course)).join("") : "<p>No courses found</p>"
}

function toggleAccordion(header) {
  const item = header.parentElement
  item.classList.toggle("open")
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", "true")
  }
  renderPage()
})

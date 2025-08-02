// JavaScript/TypeScript capabilities demonstration
class CapabilitiesDemo {
    constructor() {
        this.skills = new Map([
            ['frontend', ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3']],
            ['backend', ['Node.js', 'Express', 'Deno', 'REST APIs']],
            ['tools', ['Webpack', 'Vite', 'ESLint', 'Prettier']],
            ['testing', ['Jest', 'Cypress', 'Testing Library']]
        ]);
    }

    // Asynchronous data fetching simulation
    async fetchUserData(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: userId,
                    name: 'LiquidatorHub',
                    skills: Array.from(this.skills.values()).flat(),
                    projects: this.getProjects(),
                    activity: this.generateActivity()
                });
            }, 100);
        });
    }

    // Generate sample project data
    getProjects() {
        return [
            {
                name: 'GitHub Profile Snake',
                tech: ['SVG', 'Animation', 'JavaScript'],
                status: 'Active',
                description: 'Animated GitHub contribution grid'
            },
            {
                name: 'Portfolio Website',
                tech: ['React', 'TypeScript', 'Styled Components'],
                status: 'Planning',
                description: 'Personal showcase website'
            },
            {
                name: 'API Gateway',
                tech: ['Node.js', 'Express', 'MongoDB'],
                status: 'Development',
                description: 'Microservices orchestration'
            }
        ];
    }

    // Generate random activity data
    generateActivity() {
        const activities = ['commit', 'pull_request', 'issue', 'review'];
        const repos = ['project-alpha', 'web-utils', 'data-pipeline'];
        
        return Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            type: activities[Math.floor(Math.random() * activities.length)],
            repo: repos[Math.floor(Math.random() * repos.length)],
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
        }));
    }

    // Demonstrate array manipulation and functional programming
    processData(data) {
        return data
            .filter(item => item.status !== 'Archived')
            .map(item => ({
                ...item,
                techCount: item.tech.length,
                priority: this.calculatePriority(item)
            }))
            .sort((a, b) => b.priority - a.priority);
    }

    // Calculate project priority based on various factors
    calculatePriority(project) {
        const statusWeight = {
            'Active': 3,
            'Development': 2,
            'Planning': 1
        };
        
        return (statusWeight[project.status] || 0) + project.tech.length;
    }

    // Demonstrate modern ES6+ features
    async demonstrateCapabilities() {
        console.log('🚀 JavaScript/TypeScript Capabilities Demo');
        console.log('=' .repeat(45));

        try {
            // Async/await with error handling
            const userData = await this.fetchUserData(1);
            console.log('\n👤 User Data:', userData.name);
            
            // Destructuring and template literals
            const { skills, projects } = userData;
            console.log(`\n💼 Skills (${skills.length}):`, skills.join(', '));

            // Array methods and functional programming
            const processedProjects = this.processData(projects);
            console.log('\n📊 Processed Projects:');
            processedProjects.forEach(project => {
                console.log(`  • ${project.name} (Priority: ${project.priority})`);
                console.log(`    Tech: ${project.tech.join(', ')}`);
                console.log(`    Status: ${project.status}\n`);
            });

            // Map and Set operations
            console.log('🛠️ Skill Categories:');
            for (const [category, techs] of this.skills) {
                console.log(`  ${category}: ${techs.join(', ')}`);
            }

            // Recent activity with date formatting
            console.log('\n📈 Recent Activity:');
            userData.activity.forEach(activity => {
                const timeAgo = this.getTimeAgo(activity.timestamp);
                console.log(`  ${activity.type} in ${activity.repo} - ${timeAgo}`);
            });

        } catch (error) {
            console.error('Error demonstrating capabilities:', error);
        }
    }

    // Utility function for time formatting
    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        
        if (seconds < 60) return 'just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
        return `${Math.floor(seconds / 86400)}d ago`;
    }
}

// Usage example
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CapabilitiesDemo;
} else {
    // Browser environment
    const demo = new CapabilitiesDemo();
    demo.demonstrateCapabilities();
}

// Export for ES6 modules
export default CapabilitiesDemo;
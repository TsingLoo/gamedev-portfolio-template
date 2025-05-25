import { createRouter as _createRouter, createWebHistory } from 'vue-router';

// Route-level code splitting
const AboutView = () => import('../views/About.vue');
const ResumeView = () => import('../views/Resume.vue');
const GameProjectsView = () => import('../views/GameProjects.vue'); // Changed alias GameView to GameProjectsView for clarity
const OtherProjectsView = () => import('../views/OtherProjects.vue'); // Changed alias
const ContactView = () => import('../views/Contact.vue');
const E404View = () => import('../views/404.vue');
// const GameProjectsLayout = () => import('../views/GameProjectsLayout.vue'); // No longer needed
// ProjectDetailView is used by GameProjectsView, not directly in a route
// const ProjectDetailView = () => import('../views/ProjectDetailView.vue');


export function createRouter() {
  return _createRouter({
    history: createWebHistory('/portfolio/'), // Your base path
    routes: [
      {
        path: '/',
        redirect: '/index.html'
      },
      {
        path: '/index.html',
        name: 'Root',
        component: AboutView
      },
      {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
      },
      {
        // This is the single route definition for handling both the
        // list of game projects and individual project details by name.
        path: '/game-projects/:projectName?', // :projectName is optional
        name: 'GameProjects', // Consistent name for this route
        component: GameProjectsView, // This is your GameProjects.vue
        props: true // This is CRUCIAL: it passes route params (like projectName) as props to GameProjectsView
      },
      // The nested route structure for '/game-projects' that used GameProjectsLayout
      // and a '/game-projects/:projectId' child has been removed as it conflicts
      // with the desire to use '/game-projects/:projectName' for details.
      {
        path: '/other-projects',
        name: 'OtherProjects', // Consistent naming
        component: OtherProjectsView
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactView
      },
      {
        path: '/PageNotFound', // Specific path for a styled 404 page if manually linked
        name: 'PageNotFound',
        component: E404View
      },
      {
        // Catch-all route for any other paths, leading to your 404 component
        path: '/:pathMatch(.*)*', // Vue Router 4 syntax for catch-all
        name: 'CatchAllNotFound', // Distinct name for catch-all
        component: E404View
      },
    ]
  });
}
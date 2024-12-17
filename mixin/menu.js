export default {
    computed: {
		router_map() {
			return [
				{
					name: 'Services',
					path: null,
					dropdown: [
						'/services/overview',
						'/services/hire-remote-developers',
						'/services/remote-team-management',
						'/services/global-payroll',
						'/services/value-added-services'
					],
					childs: [
						{
							name: 'Services Overview',
							path: '/services/overview',
							icon: 'menu_icon_services1'
						},
						{
							name: 'Hire Remote Developers',
							path: '/services/hire-remote-developers',
							icon: 'menu_icon_services2'
						},
						{
							name: 'Remote Team Management',
							path: '/services/remote-team-management',
							icon: 'menu_icon_services3'
						},
						{
							name: 'Global Payroll',
							path: '/services/global-payroll',
							icon: 'menu_icon_services4'
						},
						{
							name: 'Value Added Services',
							path: '/services/value-added-services',
							icon: 'menu_icon_services5'
						}
					]
				},
				{
					name: 'Pricing',
					path: '/pricing',
					dropdown: ['/pricing', '/deposits', '/invoice-process']
				},
				{
					name: 'Case Studies',
					path: '/case-studies',
					dropdown: ['/case-studies']
				},
				{
					name: 'Blog',
					path: null,
					dropdown: ['/blogs/for-employer', '/blogs/for-developer'],
					childs: [
						{
							name: 'For employer',
							path: '/blogs/for-employer',
							icon: 'menu_icon_blogs1'
						},
						{
							name: 'For developer',
							path: '/blogs/for-developer',
							icon: 'menu_icon_blogs2'
						}
					]
				},
				{
					name: 'About',
					path: null,
					dropdown: ['/about', '/about-us/why-us', '/about-us/FAQ'],
					childs: [
						{
							name: 'About Us',
							path: '/about',
							icon: 'menu_icon_aboutus1'
						},
						{
							name: 'Why Us',
							path: '/about-us/why-us',
							icon: 'menu_icon_aboutus1'
						},
						{ 
							name: 'FAQ',
							path: '/about-us/FAQ',
							icon: 'menu_icon_aboutus2'
						}
					]
				},
				{
					name: 'Job Board',
					path: '/job-board',
					dropdown: ['/job-board', '/job-board/job-details', '/job-board/company-details']
				}
			]
		}
    }
};
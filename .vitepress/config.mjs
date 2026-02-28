import { defineConfig } from 'vitepress';
import { set_sidebar } from './utils/auto_sidebar.mjs';

export default defineConfig({
	// 1. 站点基础配置（可选，建议设置）
	lang: 'zh-CN', // 站点语言标识
	head: [['link', { rel: 'icon', href: '/logo.png' }]],
	title: 'YC的项目文档站',
	description: '两个菜鸟的项目文档站点',
	lastUpdated: {
		// 原生 Date 格式化函数
		format: (time) => {
			return new Date(time).toLocaleString('zh-CN', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			});
		},
	},
	markdown: {
		theme: {
			light: 'light-plus', // 浅色主题
			dark: 'dark-plus', // 深色主题
		},
	},
	// 忽略相对链接的死链接检测
	ignoreDeadLinks: true,

	// 2. 主题配置（核心：设置中文 locale）
	themeConfig: {
		outlineTitle: '页面导航',
		outline: [2, 6],
		logo: '/logo.png', // 配置logo位置，public目录
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '主页', link: '/' },
			{ text: '中小微企业服务平台', link: '/sme-docs/' },
			{ text: '二手物品交易管理系统', link: '/sts-doc/' },
			{
				text: '友情链接',
				items: [
					{ text: 'yujie的博客', link: 'https://yjblog.de5.net/' },
					{ text: 'colour008的博客', link: 'https://colour008.eu.org/' },
				],
			},
		],
		sidebar: {
			'/sme-docs': set_sidebar('/sme-docs'),
			'/sts-doc': set_sidebar('/sts-doc'),
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/Myj-2024' }],

		//底部配置
		footer: {
			copyright: 'Copyright © 2026 yujie&colour008',
		},
		// 设置搜索框的样式
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无匹配结果',
						resetButtonTitle: '清除查询条件',
						backButtonTitle: '返回上一级',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭',
						},
					},
				},
			},
		},

		// 文章翻页
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},

		darkModeSwitchTitle: '切换深色模式',
		lightModeSwitchTitle: '切换浅色模式',

		// 移动端 - 外观
		darkModeSwitchLabel: '切换明暗主题',

		// 移动端 - 返回顶部
		returnToTopLabel: '返回顶部',

		// 移动端 - menu
		sidebarMenuLabel: '文档目录',
		editLink: {
			// 1. 编辑链接的基础 URL（替换为你的仓库地址）
			// 格式：仓库地址 + 分支 + 文档根目录
			pattern: 'https://github.com/Myj-2024/docs/tree/main/:path',
			// 2. 按钮文字（可选，默认是「Edit this page」）
			text: '在 GitHub 上编辑此页面',
			// 3. 是否在主页（README.md）显示（可选，默认 true）
			// home: false
		},
		lastUpdatedText: '最后更新于',
	},
});

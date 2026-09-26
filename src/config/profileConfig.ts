import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://aniimo.ogoulart.dev/logo.png",

	// 名字
	name: "Aniimo Tools",

	// 个人signature
	bio: "Fan-site não-oficial de Aniimo, feito pela comunidade brasileira.",

	links: [
		{
			name: "Aniimo Tools",
			icon: "material-symbols:home",
			url: "https://aniimo.ogoulart.dev/",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/goul4rt/aniimo-tools",
			showName: false,
		},
		{
			name: "Ko-fi",
			icon: "fa7-solid:mug-hot",
			url: "https://ko-fi.com/ogoul4rt",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "/atom/",
			showName: false,
		},
	],
};

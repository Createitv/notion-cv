import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	// Configure `pageExtensions` to include markdown and MDX files
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		// ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	output: 'standalone',
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

export default nextConfig

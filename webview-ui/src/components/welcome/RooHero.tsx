import { useState } from "react"

/**
 * CodexFlow Hero Component
 * Modern, gradient-based logo display
 */
const CodexFlowHero = () => {
	return (
		<div className="mb-6 relative flex flex-col items-center pt-4">
			{/* CodexFlow Logo - Modern Gradient Style */}
			<div className="flex items-center gap-3 group">
				{/* Icon */}
				<div className="relative">
					<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
					{/* Glow effect */}
					<div className="absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
				</div>
				
				{/* Text */}
				<div className="flex flex-col">
					<span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
						CodexFlow
					</span>
					<span className="text-xs text-vscode-foreground/60">
						AI Agent • LiteLLM Gateway
					</span>
				</div>
			</div>
			
			{/* Decorative line */}
			<div className="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
		</div>
	)
}

export default CodexFlowHero


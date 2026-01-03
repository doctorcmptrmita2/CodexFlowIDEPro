import type { ModelInfo } from "../model.js"

// https://docs.litellm.ai/
// CodexFlow LiteLLM Gateway - https://codexflow.dev
export const litellmDefaultModelId = "cf-deep"

export const litellmDefaultModelInfo: ModelInfo = {
	maxTokens: 8192,
	contextWindow: 200_000,
	supportsImages: true,
	supportsPromptCache: true,
	supportsNativeTools: true,
	defaultToolProtocol: "native",
	inputPrice: 3.0,
	outputPrice: 15.0,
	cacheWritesPrice: 3.75,
	cacheReadsPrice: 0.3,
}

// CodexFlow Model Definitions
export const codexflowModels: Record<string, ModelInfo> = {
	// Fast Tier - Claude Haiku 3.5 (ucuz, hızlı)
	"cf-fast": {
		maxTokens: 900,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 0.80,
		outputPrice: 4.0,
		description: "Hızlı, basit işler için (Claude Haiku)",
	},
	
	// Deep Tier - Claude Sonnet 4 (karmaşık logic)
	"cf-deep": {
		maxTokens: 8192,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 3.0,
		outputPrice: 15.0,
		description: "Karmaşık logic için (Claude Sonnet 4)",
	},
	
	// Agent Tier - Grok 3 (tool calling)
	"cf-agent": {
		maxTokens: 4000,
		contextWindow: 128_000,
		supportsImages: false,
		supportsPromptCache: false,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 3.0,
		outputPrice: 15.0,
		description: "Agent/tool calling için (Grok 3)",
	},
	
	// Grok Tools - Grok 4.1 Fast (2M context!)
	"cf-grok-tools": {
		maxTokens: 8000,
		contextWindow: 2_000_000, // 2M context!
		supportsImages: false,
		supportsPromptCache: false,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 3.0,
		outputPrice: 15.0,
		description: "Arka plan analizleri için (Grok 4.1 Fast - 2M context)",
	},
	
	// Planner Tier - GPT-4o-mini (plan/chunk JSON)
	"cf-planner": {
		maxTokens: 500,
		contextWindow: 128_000,
		supportsImages: false,
		supportsPromptCache: false,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 0.15,
		outputPrice: 0.60,
		description: "Plan ve chunk JSON için (GPT-4o-mini)",
	},
	
	// Grace Tier - Llama 405B FREE (kota bitince)
	"cf-grace": {
		maxTokens: 800,
		contextWindow: 128_000,
		supportsImages: false,
		supportsPromptCache: false,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 0,
		outputPrice: 0,
		description: "Kota bitince ücretsiz (Llama 405B FREE)",
	},
	
	// Premium Coder - Claude Sonnet 4.5
	"cf-premium-coder": {
		maxTokens: 16000,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		supportsNativeTools: true,
		defaultToolProtocol: "native",
		inputPrice: 3.0,
		outputPrice: 15.0,
		description: "Critical kod için (Claude Sonnet 4.5)",
	},
}

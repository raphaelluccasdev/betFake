// ============================================
// NEXUS BET - Arquivo de Configuração
// ============================================

const CONFIG = {
    // Site
    SITE_NAME: "NexusBet",
    SITE_TITLE: "NexusBet | Cassino Educativo",
    SITE_DESCRIPTION: "Simulador de apostas educativo com jogos fictícios e sem dinheiro real",
    
    // Saldo
    INITIAL_BALANCE: 1000,
    MIN_BET: 10,
    MAX_BET: 10000,
    
    // Google AdSense
    ADSENSE_CLIENT_ID: "ca-pub-xxxxxxxxxxxxxxxx", // Substituir pelo seu ID
    ADSENSE_ENABLED: true,
    
    // Cores (CSS)
    COLORS: {
        primary: "#6366f1",
        primaryHover: "#4f46e5",
        bgDark: "#090d16",
        cardBg: "#111827",
        cardBorder: "#1f2937",
        accentGreen: "#10b981",
        textMain: "#f9fafb",
        textMuted: "#9ca3af",
        error: "#ef4444"
    },
    
    // Jogos
    GAMES: [
        { name: "Aviator (Crash)", emoji: "🚀", id: "aviator", enabled: true },
        { name: "Roleta Europeia", emoji: "🎰", id: "roulette", enabled: true },
        { name: "Plinko Ball", emoji: "⚪", id: "plinko", enabled: true },
        { name: "Fortune Tiger", emoji: "🐅", id: "fortune-tiger", enabled: true },
        { name: "Fortune Ox", emoji: "🐂", id: "fortune-ox", enabled: false },
        { name: "Sweet Bonanza", emoji: "🍬", id: "sweet-bonanza", enabled: false },
        { name: "Gates of Olympus", emoji: "⚡", id: "gates", enabled: false },
        { name: "Blackjack Pro", emoji: "🃏", id: "blackjack", enabled: true },
        { name: "Mines (Minas)", emoji: "💣", id: "mines", enabled: true },
        { name: "Spaceman", emoji: "🪐", id: "spaceman", enabled: true },
        { name: "Coin Flip", emoji: "🪙", id: "coin-flip", enabled: true },
        { name: "Dice Roller", emoji: "🎲", id: "dice", enabled: true }
    ],
    
    // Multiplicadores RTP (Return To Player) - quanto retorna ao jogador
    RTP: {
        aviator: 0.96,        // 96% RTP
        roulette: 0.973,      // 97.3% RTP
        plinko: 0.95,         // 95% RTP
        blackjack: 0.99,      // 99% RTP
        mines: 0.97,          // 97% RTP
        spaceman: 0.96,       // 96% RTP
        fortuneTiger: 0.94,   // 94% RTP
        coinFlip: 0.98,       // 98% RTP
        dice: 0.95            // 95% RTP
    },
    
    // Mensagens personalizadas
    MESSAGES: {
        welcomeTitle: "Bem-vindo ao NexusBet",
        welcomeText: "Simulador 100% fictício e educativo. Seu saldo inicial é R$ 1.000,00",
        insufficientBalance: "Saldo insuficiente! Clique em 'Resetar Banca' para começar novamente.",
        invalidBet: "Aposta inválida! Mínimo R$ 10, Máximo R$ 10.000",
        resetConfirm: "Tem certeza que deseja resetar sua banca para R$ 1.000,00?",
        resetSuccess: "Banca resetada com sucesso!"
    },
    
    // Debug
    DEBUG: false, // Ativa logs no console
    STORAGE_KEY: "nexusbet_game_state", // Chave localStorage
    
    // Notificações
    NOTIFICATIONS_ENABLED: true,
    SOUND_ENABLED: false // Para adicionar sons depois
};

// Função helper para obter configuração
function getConfig(key) {
    const keys = key.split('.');
    let value = CONFIG;
    for (let k of keys) {
        value = value[k];
    }
    return value;
}

// Função para debug
function debugLog(message, data = null) {
    if (CONFIG.DEBUG) {
        console.log(`[${CONFIG.SITE_NAME}]`, message, data || '');
    }
}

// Função para atualizar configuração em runtime
function setConfig(key, value) {
    const keys = key.split('.');
    let obj = CONFIG;
    for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    debugLog(`Config updated: ${key} = ${value}`);
}

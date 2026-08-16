# 🎰 NexusBet - Simulador de Cassino Educativo

Um site de apostas **100% fictício e educativo**, inspirado na [Stake](https://stake.com), desenvolvido para diversão e aprendizado. Monetizado via **Google AdSense**.

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node-18%2B-green)

---

## 🎯 O Projeto

**NexusBet** é uma plataforma simulada de jogos de cassino onde:
- ✅ Os usuários jogam com **dinheiro fictício** (sem risco real)
- ✅ Oferece diversos jogos populares (Aviator, Roleta, Plinko, etc)
- ✅ Sistema de saldo que persiste no navegador (localStorage)
- ✅ Monetização através de **Google AdSense**
- ✅ Interface moderna e responsiva (tipo Stake)
- ✅ 100% educacional e legal

---

## 🎮 Jogos Disponíveis

| Jogo | Tipo | Probabilidade |
|------|------|-----------------|
| **Aviator** 🚀 | Crash | Multiplicador aleatório (0.5x - 10x) |
| **Roleta Europeia** 🎰 | Sorte | 37 slots (2.7% de vantagem da casa) |
| **Plinko** ⚪ | Habilidade | Múltiplos buckets (8 caminhos) |
| **Blackjack** 🃏 | Estratégia | 50/50 com vantagem do dealer |
| **Mines** 💣 | Risco/Recompensa | 3 minas em 25 células |
| **Spaceman** 🪐 | Crash | Similar ao Aviator (tema espaço) |
| **Fortune Tiger** 🐅 | Slots | 3 slots com multiplicadores |
| **Coin Flip** 🪙 | 50/50 | Cara ou Coroa |
| **Dice Roller** 🎲 | D20 | Roll acima do alvo |

---

## 🚀 Quick Start

### Requisitos
- Node.js 18+
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/raphaelluccasdev/betFake.git
cd betFake

# Instale as dependências
npm install

# Abra em um servidor local (ou use Live Server do VS Code)
# Abra em http://localhost:5500 (ou similar)
```

### Usar via GitHub Pages

```bash
# Build e deploy
npm run build
# Arquivo bet.html já está pronto para usar
```

---

## 📁 Estrutura do Projeto

```
betFake/
├── bet.html              # Página principal (UI + Modal)
├── game.js               # Lógica dos jogos (GameSimulator class)
├── animatedCounter.js    # Componente React (opcional)
├── package.json          # Dependências
├── README.md             # Este arquivo
├── ADSENSE_SETUP.md      # Guia Google AdSense
└── .gitignore
```

### Arquivos Principais

#### `bet.html`
- Interface responsiva (móvel e desktop)
- Grid de 6 colunas com 12 jogos únicos
- Modal interativo para jogar
- Integração com Google AdSense
- Sistema de saldo em tempo real

#### `game.js`
- Classe `GameSimulator` com lógica de todos os jogos
- Persistência de dados (localStorage)
- Sistema de histórico de apostas
- Algoritmos realistas para cada jogo

---

## 🎮 Como Usar

### Interface
1. **Abra** `bet.html` no navegador
2. **Veja seu saldo** no canto superior direito (começa com R$ 1.000,00)
3. **Clique em um jogo** para abrir o modal
4. **Defina sua aposta** (R$ 10 - R$ 10.000)
5. **Configure opções específicas** (ex: Preto na roleta)
6. **Clique "JOGAR"** e veja o resultado
7. **Repita!**

### Resetar Banca
Clique em **"Resetar Banca"** no header para voltar aos R$ 1.000,00

---

## 💰 Monetização com Google AdSense

### Configuração Básica
1. Registre-se em [Google AdSense](https://www.google.com/adsense/start)
2. Substitua `ca-pub-xxxxxxxxxxxxxxxx` no `bet.html`
3. Adicione unidades de anúncios nas laterais (300x600px)

### Receita Estimada
- **RPM Brasil**: R$ 1-3 por 1000 impressões
- **Tráfego de 1.000 usuários/dia**: ~R$ 30-90/mês
- **Tráfego de 10.000 usuários/dia**: ~R$ 300-900/mês

📖 Veja [ADSENSE_SETUP.md](./ADSENSE_SETUP.md) para instruções detalhadas.

---

## 🛠️ Desenvolvimento

### Adicionar um Novo Jogo

1. **Defina a lógica em `game.js`**:
```javascript
playMeuJogo(betAmount) {
    const resultado = Math.random() < 0.5;
    const ganho = resultado ? betAmount : -betAmount;
    
    this.balance += ganho;
    this.saveBalance();
    this.saveHistory('Meu Jogo', betAmount, 'Resultado', ganho);
    
    return { resultado, ganho, balance: this.balance };
}
```

2. **Adicione na lista de jogos em `bet.html`**:
```javascript
const games = [
    ...
    { name: "Meu Jogo", emoji: "🎮", id: "meu-jogo" }
];
```

3. **Trate o resultado no `playGame()`**:
```javascript
else if (currentGame.id === 'meu-jogo') {
    result = gameSimulator.playMeuJogo(betAmount);
    displayResult('Seu resultado', 'Status', result.ganho);
}
```

### Customizar Cores
Edite as variáveis CSS no `bet.html`:
```css
:root {
    --primary: #6366f1;           /* Cor principal (indigo) */
    --accent-green: #10b981;      /* Verde lucro */
    --bg-dark: #090d16;           /* Fundo escuro */
    --card-bg: #111827;           /* Fundo cards */
    --text-main: #f9fafb;         /* Texto principal */
}
```

---

## 📊 Features

- ✅ **12 Jogos Únicos** com mecânicas diferentes
- ✅ **Sistema de Saldo** persistente (localStorage)
- ✅ **Histórico de Apostas** (últimas 100 apostas)
- ✅ **Responsivo** (Mobile, Tablet, Desktop)
- ✅ **UI Moderna** tipo Stake
- ✅ **Google AdSense** integrado
- ✅ **Zero Dependências Externas** (exceto framer-motion opcional)
- ✅ **100% Educativo e Legal**

---

## 🚨 Informações Importantes

### ⚠️ Aviso Legal
- Este é um **simulador educativo** apenas
- **Não envolve dinheiro real**
- Não é um serviço de apostas
- Cumpre com as políticas do Google AdSense (conteúdo educativo)
- Não é licenciado como cassino ou serviço de apostas

### 🔒 Privacidade
- Os dados são armazenados **localmente no navegador**
- **Nenhuma informação** é enviada para servidores
- Cada usuário tem seu próprio saldo isolado

### 📱 Compatibilidade
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Responsivo em todos os tamanhos

---

## 🎨 Customizações

### Mudar Saldo Inicial
Em `game.js`, linha 2:
```javascript
this.balance = parseFloat(localStorage.getItem('balance')) || 1000; // Mude 1000
```

### Mudar Nome do Site
Em `bet.html`, procure por "NexusBet" e altere para seu nome

### Mudar Paleta de Cores
Edite as variáveis `:root` no CSS do `bet.html`

---

## 📈 SEO & Performance

### Otimizações Implementadas
- ✅ Meta tags corretas
- ✅ Charset UTF-8
- ✅ Viewport responsivo
- ✅ Lazy loading de anúncios
- ✅ Sem dependências pesadas (apenas framer-motion)

### Melhorar Posicionamento
1. Criar backlinks de qualidade
2. Adicionar conteúdo educativo (artigos sobre apostas)
3. Otimizar títulos e meta descriptions
4. Aumentar tempo de permanência no site
5. Reduzir bounce rate com bom UX

---

## 📞 Suporte & Contribuição

### Reportar Bugs
Abra uma issue no GitHub com:
- Descrição do problema
- Navegador/SO
- Passos para reproduzir

### Contribuir
1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- Inspirado em [Stake.com](https://stake.com)
- Ícones emojis da comunidade
- Google AdSense para monetização

---

## 📞 Contato

**Desenvolvedor**: Raphael Lucas (raphaelluccasdev)

**Email**: [seu-email]
**GitHub**: [github.com/raphaelluccasdev/betFake](https://github.com/raphaelluccasdev/betFake)

---

**Última atualização**: Agosto 2026
**Versão**: 1.0.0
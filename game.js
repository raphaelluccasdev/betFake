// ============================================
// NEXUS BET - Simulador de Jogos de Apostas
// ============================================

const GameSimulator = class {
    constructor() {
        this.balance = parseFloat(localStorage.getItem('balance')) || 1000;
        this.history = JSON.parse(localStorage.getItem('history')) || [];
    }

    saveBalance() {
        localStorage.setItem('balance', this.balance);
    }

    saveHistory(game, bet, result, winAmount) {
        const entry = {
            timestamp: new Date().toLocaleString('pt-BR'),
            game,
            bet,
            result,
            winAmount,
            balanceAfter: this.balance
        };
        this.history.unshift(entry);
        if (this.history.length > 100) this.history.pop();
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    // AVIATOR - Crash Game
    playAviator(betAmount) {
        const multiplier = (Math.random() * 10 + 0.5).toFixed(2); // Entre 0.50x e 10.50x
        const crashed = Math.random() < 0.4; // 40% de crash antes do player

        let result = `Multiplicador: ${multiplier}x - ${crashed ? '❌ CRASH!' : '✅ LUCRO!'}`;
        let winAmount = crashed ? -betAmount : betAmount * multiplier;
        
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Aviator', betAmount, result, winAmount);
        
        return { multiplier, crashed, winAmount, balance: this.balance };
    }

    // ROLETA EUROPEIA (37 slots: 0-36)
    playEuropeanRoulette(betAmount, betType, betValue) {
        const spin = Math.floor(Math.random() * 37); // 0-36
        const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(spin);
        const isEven = spin !== 0 && spin % 2 === 0;

        let won = false;
        let multiplier = 0;

        if (betType === 'number' && spin === betValue) {
            won = true;
            multiplier = 36; // Pagamento 36:1
        } else if (betType === 'red' && isRed) {
            won = true;
            multiplier = 2; // Pagamento 1:1
        } else if (betType === 'black' && !isRed && spin !== 0) {
            won = true;
            multiplier = 2;
        } else if (betType === 'even' && isEven) {
            won = true;
            multiplier = 2;
        } else if (betType === 'odd' && !isEven && spin !== 0) {
            won = true;
            multiplier = 2;
        }

        const winAmount = won ? betAmount * (multiplier - 1) : -betAmount;
        const result = `Caiu em: ${spin} ${isRed ? '🔴' : (spin === 0 ? '⚪' : '⚫')} - ${won ? '✅ VENCEU!' : '❌ PERDEU'}`;
        
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Roleta Europeia', betAmount, result, winAmount);
        
        return { spin, won, winAmount, balance: this.balance };
    }

    // PLINKO - Bolas caem em pinos (estilo Pachinko)
    playPlinko(betAmount) {
        const paths = [0, 0, 1, 0, 1, 1, 0, 1]; // 8 decisões binárias
        let finalBucket = 0;
        
        for (let decision of paths) {
            finalBucket = finalBucket * 2 + decision;
        }

        const buckets = [0.1, 0.2, 0.5, 1.0, 5.0, 2.0, 0.8, 3.0, 6.0]; // Multiplicadores
        const multiplier = buckets[finalBucket % buckets.length];
        const winAmount = betAmount * multiplier - betAmount;

        const result = `Bola caiu no bucket ${finalBucket} - ${multiplier}x - ✅ ${winAmount > 0 ? 'LUCRO' : 'PERDA'}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Plinko', betAmount, result, winAmount);

        return { bucket: finalBucket, multiplier, winAmount, balance: this.balance };
    }

    // MINES - Escolha células seguras vs minas
    playMines(betAmount, cellsClicked, minasCount = 3) {
        const totalCells = 25;
        const safeCells = totalCells - minasCount;
        
        // Probabilidade de cada célula estar segura
        let multiplier = 1;
        for (let i = 0; i < cellsClicked; i++) {
            multiplier *= (safeCells - i) / (totalCells - i);
        }

        const hitMine = Math.random() > multiplier;
        const winAmount = hitMine ? -betAmount : betAmount * (cellsClicked * 0.5 + 1) - betAmount;

        const result = `${cellsClicked} células clicadas - ${hitMine ? '💣 BATEU NA MINA!' : '✅ SEGURO'}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Mines', betAmount, result, winAmount);

        return { hitMine, cellsClicked, winAmount, balance: this.balance };
    }

    // BLACKJACK SIMPLIFICADO
    playBlackjack(betAmount) {
        const getHandValue = () => {
            let value = 0;
            let aces = 0;
            for (let i = 0; i < 2; i++) {
                const card = Math.floor(Math.random() * 13) + 1;
                if (card === 1) aces++;
                else if (card > 10) value += 10;
                else value += card;
            }
            if (aces > 0 && value + 11 <= 21) value += 11;
            else value += aces;
            return value;
        };

        const playerHand = getHandValue();
        const dealerHand = getHandValue();

        let won = false;
        if (playerHand <= 21 && (dealerHand > 21 || playerHand > dealerHand)) {
            won = true;
        } else if (playerHand === dealerHand) {
            won = 'push'; // Empate
        }

        let winAmount = 0;
        if (won === true) winAmount = betAmount;
        else if (won === false) winAmount = -betAmount;

        const result = `Você: ${playerHand} | Dealer: ${dealerHand} - ${won === true ? '✅ VENCEU!' : (won === 'push' ? '➖ EMPATE' : '❌ PERDEU')}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Blackjack', betAmount, result, winAmount);

        return { playerHand, dealerHand, won, winAmount, balance: this.balance };
    }

    // COIN FLIP - Simples 50/50
    playCoinFlip(betAmount, choice) {
        const flip = Math.random() < 0.5 ? 'heads' : 'tails';
        const won = flip === choice;
        const winAmount = won ? betAmount : -betAmount;

        const result = `Moeda: ${flip === 'heads' ? 'Cara' : 'Coroa'} - ${won ? '✅ ACERTOU!' : '❌ ERROU'}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Coin Flip', betAmount, result, winAmount);

        return { flip, won, winAmount, balance: this.balance };
    }

    // DICE - D20
    playDice(betAmount, targetNumber) {
        const roll = Math.floor(Math.random() * 20) + 1;
        const won = roll >= targetNumber;
        const winAmount = won ? betAmount * (21 - targetNumber) / 10 : -betAmount;

        const result = `Dados: ${roll} - ${won ? '✅ SUCESSO!' : '❌ FALHA'}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Dice Roller', betAmount, result, winAmount);

        return { roll, won, winAmount, balance: this.balance };
    }

    // SPACEMAN - Similar ao Aviator mas em espaço
    playSpaceman(betAmount) {
        const distance = (Math.random() * 100 + 10).toFixed(1); // 10 a 110 km
        const exploded = Math.random() < 0.35; // 35% de explosão

        const multiplier = (distance / 10).toFixed(1);
        const winAmount = exploded ? -betAmount : betAmount * multiplier;

        const result = `Distância: ${distance}km - ${exploded ? '💥 EXPLOROU!' : '✅ ESCAPOU!'}`;
        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Spaceman', betAmount, result, winAmount);

        return { distance, exploded, multiplier, winAmount, balance: this.balance };
    }

    // FORTUNE TIGER - Slots com tema asiático
    playFortuneTiger(betAmount) {
        const symbols = ['🐯', '🧧', '🏮', '💰', '🎋', '✨'];
        const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

        let multiplier = 0;
        if (reel1 === reel2 && reel2 === reel3) {
            multiplier = 50; // Jackpot
        } else if (reel1 === reel2 || reel2 === reel3) {
            multiplier = 3;
        } else if (reel1 === reel3) {
            multiplier = 2;
        }

        const winAmount = multiplier > 0 ? betAmount * (multiplier - 1) : -betAmount;
        const result = `${reel1} ${reel2} ${reel3} - ${multiplier > 0 ? `✅ ${multiplier}x!` : '❌ Nada'}`;

        this.balance += winAmount;
        this.saveBalance();
        this.saveHistory('Fortune Tiger', betAmount, result, winAmount);

        return { reel1, reel2, reel3, multiplier, winAmount, balance: this.balance };
    }

    getBalance() {
        return this.balance;
    }

    getHistory() {
        return this.history;
    }

    resetBalance() {
        this.balance = 1000;
        this.saveBalance();
        return this.balance;
    }
}

// Exportar para uso global
const gameSimulator = new GameSimulator();

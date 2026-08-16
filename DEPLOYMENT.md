# 📲 Guia Rápido de Deployment - NexusBet

## 1️⃣ Deploy em GitHub Pages (5 minutos)

### Passo 1: Prepare o repositório

```bash
# Clone ou crie um novo repositório
git init
git add .
git commit -m "Initial commit - NexusBet v1.0"
```

### Passo 2: Push para GitHub

```bash
# Adicione seu repositório remoto
git remote add origin https://github.com/SEU_USUARIO/betFake.git
git branch -M main
git push -u origin main
```

### Passo 3: Configure GitHub Pages

1. Vá para **Settings** do seu repositório
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **Save**

### Passo 4: Aguarde o deploy

- GitHub vai processar em 1-2 minutos
- Seu site estará em: `https://SEU_USUARIO.github.io/betFake`

---

## 2️⃣ Deploy em Netlify (3 minutos)

### Opção A: Via Git (Recomendado)

1. **Acesse https://app.netlify.com**
2. **Clique em "Add new site"** > **"Import an existing project"**
3. **Escolha seu Git provider** (GitHub, GitLab, etc)
4. **Selecione seu repositório betFake**
5. **Configurações padrão** já funcionam
6. **Clique "Deploy site"**

**Seu site estará em:** `https://seu-site.netlify.app`

### Opção B: Via Drag & Drop

1. **Acesse https://app.netlify.com**
2. **Arraste a pasta `betFake` para a área de upload**
3. **Deploy instantâneo!**

**Seu site estará em:** `https://random-name.netlify.app`

---

## 3️⃣ Deploy em Vercel (3 minutos)

1. **Acesse https://vercel.com**
2. **Clique "New Project"**
3. **Importe seu repositório GitHub**
4. **Pronto! Deploy automático.**

**Seu site estará em:** `https://betfake-seu-usuario.vercel.app`

---

## 4️⃣ Adicionar Domínio Próprio (Opcional)

### Comprar domínio
- **Namecheap**: https://www.namecheap.com (~R$ 40/ano)
- **Register.com**: https://www.register.com (~R$ 50/ano)
- **Godaddy**: https://www.godaddy.com (~R$ 60/ano)

### Conectar a GitHub Pages

1. **Acesse seu registrador de domínio**
2. **Vá para DNS/Nameservers**
3. **Adicione esses registros A:**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. **Em GitHub > Settings > Pages, adicione seu domínio**
5. **Aguarde propagação DNS (24h)**

---

## 5️⃣ Implementar Google AdSense

### Antes de fazer deploy:

1. **Abra `bet.html`**
2. **Procure por:**
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
   ```
3. **Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelo seu ID do AdSense**
4. **Commit e push**

### Registre seu site no AdSense:

1. **Acesse https://www.google.com/adsense/start**
2. **Insira a URL do seu site** (ex: seu-usuario.github.io/betFake)
3. **Copie o código fornecido** e adicione ao `bet.html`
4. **Aguarde aprovação** (24-48 horas)
5. **Pronto! Anúncios habilitados.**

---

## 6️⃣ Monitorar Performance

### Google Analytics (GRÁTIS)

```html
<!-- Adicione ao <head> do bet.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Obtenha seu ID em: https://analytics.google.com

### Google Search Console (GRÁTIS)

1. **Acesse https://search.google.com/search-console**
2. **Adicione sua propriedade**
3. **Verifique ownership**
4. **Monitore impressões e clicks**

---

## 7️⃣ Atualizações e Mudanças

### Local Development
```bash
# Edite seus arquivos localmente
# Teste no navegador (abra bet.html)

# Quando satisfeito com as mudanças:
git add .
git commit -m "Descrição da mudança"
git push origin main
```

### Deploy Automático
- **GitHub Pages**: Automático após push
- **Netlify**: Automático após push
- **Vercel**: Automático após push

---

## ⚡ Comparação Rápida

| Plataforma | Deploy Time | Uptime | Performance | Free Tier |
|---|---|---|---|---|
| GitHub Pages | <2 min | 99.9% | Ótimo | ✅ Sim |
| Netlify | <1 min | 99.9% | Excelente | ✅ Sim |
| Vercel | <1 min | 99.9% | Excelente | ✅ Sim |
| Infinityfree | 5 min | 95% | Bom | ✅ Sim |

**Recomendação:** Use **Netlify** ou **Vercel** para melhor performance.

---

## 🆘 Troubleshooting

### Anúncios não aparecem?
- [ ] Verificou se o código AdSense foi adicionado?
- [ ] Aguardou 24h após deploy?
- [ ] Site está aprovado no AdSense?
- [ ] Bloqueador de anúncios está desabilitado?

### Site lento?
- [ ] Use Netlify ou Vercel (melhor performance)
- [ ] Reduza tamanho de imagens
- [ ] Minifique CSS/JS
- [ ] Use CDN

### Erro 404?
- [ ] Verificou a URL correta?
- [ ] GitHub Pages está ativado?
- [ ] Aguardou 2-5 minutos após push?

---

## 📊 Checklist Pós-Deploy

- [ ] Site está acessível em produção?
- [ ] Todos os jogos funcionam?
- [ ] AdSense está implementado?
- [ ] Saldo persiste corretamente?
- [ ] Design responsivo em mobile?
- [ ] Google Analytics configurado?
- [ ] Domínio próprio conectado (opcional)?
- [ ] Compartilhado nas redes sociais?

---

**Pronto para ir ao ar!** 🎉

Qualquer dúvida, consulte os guias principais:
- [README.md](README.md) - Documentação completa
- [ADSENSE_SETUP.md](ADSENSE_SETUP.md) - Guia AdSense
- [HOSTING_GUIDE.md](HOSTING_GUIDE.md) - Guia de hospedagem

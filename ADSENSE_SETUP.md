# NexusBet - Guia de Configuração Google AdSense

## 📋 Como Implementar Google AdSense

### Passo 1: Registre sua conta no Google AdSense
1. Acesse: https://www.google.com/adsense/start
2. Faça login com sua conta Google
3. Forneça informações do seu site
4. Aguarde aprovação (geralmente 24-48 horas)

### Passo 2: Obtenha seu código de cliente
1. Na dashboard do AdSense, vá em **Configurações** > **Contas** > **Informações da conta**
2. Encontre seu **ID de publicador** (formato: `ca-pub-xxxxxxxxxxxxxxxx`)
3. Copie este código

### Passo 3: Implemente no seu site
No arquivo `bet.html`, encontre esta linha:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx" crossorigin="anonymous"></script>
```

Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelo seu código de cliente.

### Passo 4: Adicione Unidades de Anúncios

#### Banners Verticais (nas laterais - 300x600)
Adicione este código onde quer que o anúncio apareça:
```html
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:600px"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="XXXXXXXXXX"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

#### Banners Horizontais (728x90)
```html
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="XXXXXXXXXX"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

#### Anúncios Responsivos
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### Passo 5: Encontre seus Data Slots
1. Na dashboard do AdSense, vá em **Anúncios** > **Unidades de anúncios**
2. Crie novas unidades para cada posição
3. Copie o `data-ad-slot` de cada unidade

## 🎯 Estratégia de Monetização Recomendada

### Posicionamento dos Anúncios:
1. **Laterais (300x600)** - 2 banners (esquerda e direita)
2. **Entre seções de jogos** - 1-2 anúncios responsivos
3. **Header/Footer** - 1 banner horizontal (728x90)

### RPM Esperado (Revenue Per Mille):
- **Brasil**: R$ 1-3 por 1000 impressões
- **Países desenvolvidos**: $3-8 por 1000 impressões

### Dicas para Aumentar Receita:
✅ Mantenha alta taxa de cliques (CTR)
✅ Coloque anúncios em áreas visíveis
✅ Use anúncios responsivos
✅ Não clique nos seus próprios anúncios
✅ Gere tráfego consistente
✅ Melhor CTR = maior RPM

## 📝 Política de Conteúdo AdSense

**Proibido:**
- ❌ Conteúdo sexual ou violência
- ❌ Cliques fraudulentos nos anúncios
- ❌ Enganar usuários
- ❌ Conteúdo pirata ou ilegal
- ❌ Apostas com dinheiro real

**Permitido:**
- ✅ Simuladores/educacional
- ✅ Anúncios de terceiros
- ✅ Conteúdo lúdico

## 🚀 Otimizações Adicionais

### Melhorar Performance AdSense:
```javascript
// Lazy load para anúncios (melhora velocidade do site)
<ins class="adsbygoogle" 
     loading="lazy"
     ...
```

### Tracking de Cliques:
```javascript
// Rastrear cliques nos anúncios
window.addEventListener('click', function(e) {
    if (e.target.closest('.adsbygoogle')) {
        console.log('Clique em anúncio detectado');
        // Envie para seu analytics
    }
});
```

## 📊 Analytics Integration

Recomenda-se integrar Google Analytics para rastrear:
- Usuários únicos
- Tempo no site
- Páginas por sessão
- Taxa de cliques nos anúncios

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Suporte
- Dashboard AdSense: https://www.google.com/adsense/app
- Documentação: https://support.google.com/adsense
- Fórum: https://support.google.com/adsense/community

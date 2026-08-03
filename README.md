# Rodrigues Mansur Assessoria Administrativa 🏢✨

Este é o repositório do site institucional da **Rodrigues Mansur Assessoria Administrativa**, uma landing page moderna, premium e responsiva construída com práticas recomendadas de design e performance para o ecossistema Next.js.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** `Next.js 16.2.1` (Utilizando App Router para rotas otimizadas e renderização ágil)
- **Biblioteca:** `React 19.2.4`
- **Estilização:** `Tailwind CSS 4.x` (Via `@tailwindcss/postcss` com as paletas e variáveis integradas no tema)
- **Tipagem:** `TypeScript 5.x`

---

## 🎨 Paleta de Cores & Design System

A identidade visual do projeto segue uma estética sofisticada baseada nas variáveis de tema definidas em `src/app/globals.css`:
- **Preto Profundo (`bg-rm-black` / `--color-rm-black`):** `#373736` (Utilizado como fundo geral das seções escuras).
- **Creme Suave (`bg-rm-cream` / `--color-rm-cream`):** `#FBF1ED` (Utilizado como fundo geral das seções claras para respiro visual).
- **Dourado (`text-rm-gold` | `border-rm-gold`):** `#CFBC87` e `#9A8549` (Ideal para ícones, detalhes e botões de destaque).
- **Azul Nobre (`text-rm-blue` | `--color-rm-blue`):** `#4D6DB3` (Usado para realces e títulos em fundos claros).

---

## 🖥️ Layout e Seções do Site

O site foi estruturado como uma Landing Page em página única (`src/app/page.tsx`) e é composto pelas seguintes seções modulares em `src/components/`:

1. **Header (`Header.tsx`):** Barra de navegação fixa com efeito blur, botões de ação rápidos e menu mobile hambúrguer responsivo.
2. **Hero (`Hero.tsx`):** Painel de entrada com imagem executiva estilizada em background, monograma (logo), títulos com tipografia forte, animações puras em CSS e botão principal para rolagem.
3. **Sobre Nós (`About.tsx`):** Fundo creme de alto contraste contendo a apresentação institucional da empresa ("Tradição em Excelência, Foco no Resultado") e os 3 pilares: Transparência, Ética e Inovação. Acompanha a foto oficial da equipe (`QuemSomos.png`).
4. **Nossos Serviços (`Services.tsx`):** Grid de 11 cards objetivos ilustrando as principais áreas de atuação da assessoria (Legalização, BPO, DP, Simples Nacional, Lucro Real, etc.), acompanhado de uma citação em destaque.
5. **Diferenciais (`Differentials.tsx`):** Lista ilustrada destacando tecnologia, segurança, atendimento personalizado e rentabilidade para o cliente.
6. **Depoimentos (`Testimonials.tsx`):** Estrutura de prova social com carrossel/grid de testemunhos reais de clientes parceiros.
7. **Formulário de Contato (`Contact.tsx`):** Campo imersivo para novos clientes deixarem suas informações de contato (Nome, E-mail, Celular) e mensagem direta, além de listagem rápida dos contatos da empresa.
8. **Footer (`Footer.tsx`):** Encerramento com copyright, resumo institucional e atalhos rápidos de navegação.

---

## 🔍 Análise do Estado Atual (Onde Paramos?)

Fizemos um levantamento completo no repositório. O projeto **está compilando com sucesso** (`npm run build` executado sem erros), e o servidor de desenvolvimento inicia normalmente.

### Alterações Não Codificadas no Git (Modificações Locais Ativas)

Você estava no meio de um ajuste nas seguintes partes estruturais e de estilização que **ainda não foram commitadas**:
- **`src/components/Services.tsx`:** Atualizado com a lista de 11 serviços mais focada e enxuta (removendo textos inline longos e focando no formato de cards de ação rápida).
- **`src/components/Hero.tsx`:** O botão "Conheça nossas Soluções" foi envelopado com um elemento `<Link>` para direcionar corretamente o fluxo do usuário para a seção `#servicos`.
- **`src/components/Header.tsx` e `src/components/Footer.tsx`:** Ajustes finos de espaçamento e consistência de código.

### Arquivos Não Rastreados (Novas Imagens de Branding)
Na pasta `public/images/`, foram adicionadas duas novas versões oficiais do logotipo da empresa:
- `public/images/rm-logo-horizontal.png`
- `public/images/rm-logo-square.png`

---

## 🛠️ Próximos Passos (Lista de Tarefas 📝)

Para continuar com o desenvolvimento do site de onde parou, siga os seguintes itens:

### 1. Atualizar e Consolidar os Logotipos do Site 🖼️
Atualmente, as seções continuam buscando o arquivo placeholder antigo (`/images/LogoRM.png`). É recomendável atualizar para as novas versões oficiais:
- **No Header (`Header.tsx`):** Utilizar recursos responsivos do Tailwind para alternar entre as logos.
  - Exibir a versão horizontal para computadores (`rm-logo-horizontal.png`) usando a classe `hidden md:block`.
  - Exibir a versão quadrada (`rm-logo-square.png`) para aparelhos móveis usando a classe `block md:hidden`.
- **No Hero (`Hero.tsx`):** O logotipo inserido na bolha redonda (`rounded-full`) se encaixa perfeitamente com a logo redonda/quadrada (`rm-logo-square.png`).
- **No Footer (`Footer.tsx`):** Trocar pelo logo horizontal (`rm-logo-horizontal.png`).

### 2. Otimizar a Seção Hero (Remover Contraponto Redundante) ✒️
- Remova o bloco contendo a repetição do nome `Rodrigues Mansur / Assessoria Administrativa` em texto bruto logo abaixo do monograma e acima do H1 (linhas ~27-32 do `Hero.tsx`). Como o monograma ilustra as iniciais e o menu superior já identifica a marca, o H1 direto ganha muito mais força de impacto.

### 3. Conexão do Formulário de Contato 📩
- O formulário em `src/components/Contact.tsx` atualmente está em layout estático com `onSubmit={(e) => e.preventDefault()}`.
- **Implementar:** Configure uma rota de API (`src/app/api/contact/route.ts`) ou uma Next.js Server Action com serviços como **Resend**, **EmailJS** ou **Formspree** para o envio real dos e-mails a partir dos dados preenchidos no formulário.

### 4. Blog (Seção Comentada) 📰
- Em `src/app/page.tsx` (linha ~21), a chamada `<div id="blog"><BlogPreview /></div>` está comentada. Caso queira introduzir a visualização rápida de artigos posteriormente, basta descomentar e estruturar as chamadas de API no arquivo `src/components/BlogPreview.tsx`.

### 5. Revisão Geral de Contatos Oficiais 📞
- Verifique se os dados inseridos na mudança recente (em `Contact.tsx`) estão corretos para produção:
  - Telefone comercial atualizado: `+55 (22) 99243-4321`
  - E-mail de destino principal: `rmcontabilcm@gmail.com`

---

## 🛠️ Como Executar o Projeto Localmente

### 1. Instalar as Dependências
Caso ocorra alguma mudança de máquina ou ambiente:
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Abra o link [http://localhost:3000](http://localhost:3000) no seu navegador para ver o site em tempo de execução.

### 3. Verificar Erros de Tipo e Linter
```bash
npm run lint
```

### 4. Compilar para Produção (Build)
```bash
npm run build
```
O build estático e otimizado é criado na pasta `.next/`.

# US02: Refinamento e Alterações

## Contextualização

Após análise inicial da User Story 02, foram identificadas oportunidades de refinamento para alinhar a funcionalidade com práticas reais de gestão acadêmica e tornar a implementação mais coerente com o contexto educacional.

## Alterações Realizadas

### 1. Conceito de "Criar Disciplina"

**Situação Original:**
- Professor criaria disciplinas do zero, definindo livremente nome, código e demais informações

**Situação Refinada:**
- Professor **ativa/oferece** disciplinas de um catálogo pré-existente
- Disciplinas fazem parte de uma grade curricular institucional
- Professor personaliza a oferta com informações específicas da turma

**Justificativa:**
Essa abordagem reflete melhor o funcionamento real de instituições de ensino, onde disciplinas são padronizadas e professores oferecem turmas dessas disciplinas em semestres específicos.

---

### 2. Fluxo de Criação de Disciplina

**Processo Detalhado:**

1. **Acesso ao Modal de Criação**
   - Professor clica no botão "Criar Disciplina"
   - Modal é aberto com formulário

2. **Seleção da Disciplina**
   - Campo/Select para escolher matéria/área de atuação do professor
   - Após seleção da matéria, exibe Select com disciplinas disponíveis daquela área
   - Disciplinas vêm de um catálogo pré-mockado (JSON)

3. **Preenchimento de Informações da Oferta**
   - **Disciplina:** selecionada do catálogo (nome vem do JSON)
   - **Código da turma:** definido pelo professor (ex: "A", "B", "2024-1-A")
   - **Descrição:** personalizada pelo professor para aquela oferta específica
   - **Semestre/Ano:** período em que a disciplina será oferecida

4. **Confirmação e Ativação**
   - Ao submeter, disciplina aparece como "ativa" nos cards
   - Inicia com dados agregados do JSON + dados inseridos pelo professor

---

### 3. Origem dos Dados

**Dados do JSON (mockado):**
- Nome da disciplina
- Quantidade de alunos matriculados (simulado)

**Dados Inseridos pelo Professor:**
- Código da turma
- Descrição personalizada
- Semestre/Ano
- Status inicial (sempre "ativa" ao criar)

**Agregação:**
Os dados do JSON e os dados do formulário são combinados no estado React para formar a disciplina completa exibida nos cards.

---

### 4. Persistência de Dados

**Escopo Atual:**
- **Não há persistência** entre sessões
- Dados existem apenas no estado React durante a sessão do navegador
- Ao recarregar a página, retorna ao estado inicial

**Justificativa:**
Para fins de aprendizado e implementação isolada da US02, a persistência não é necessária neste momento. O foco está em:
- Consumo de API fake (fetch com JSON)
- Gerenciamento de estado React
- Formulários com validação
- Renderização condicional e filtros

---

### 5. Estrutura de Dados Mockados

**Catálogo de Disciplinas (JSON):**
- Lista de disciplinas disponíveis por matéria/área
- Cada disciplina contém:
  - ID único
  - Nome da disciplina
  - Matéria/Área
  - Quantidade de alunos (mockado para simulação)

**Exemplo Conceitual:**
```json
{
  "disciplinas": [
    {
      "id": "disc001",
      "nome": "Algoritmos e Estruturas de Dados I",
      "materia": "Ciência da Computação",
      "alunosMatriculados": 35
    },
    {
      "id": "disc002", 
      "nome": "Cálculo Diferencial e Integral I",
      "materia": "Matemática",
      "alunosMatriculados": 42
    }
  ]
}
```

---

## Critérios de Aceitação (Atualizados)

### Criação/Ativação de Disciplina
- [ ] Professor seleciona matéria/área de atuação
- [ ] Sistema exibe disciplinas disponíveis daquela matéria
- [ ] Professor seleciona disciplina do catálogo
- [ ] Professor preenche: código da turma, descrição personalizada e semestre/ano
- [ ] Ao confirmar, disciplina aparece imediatamente na lista como "ativa"

### Visualização
- [ ] Disciplinas exibidas em formato de cards
- [ ] Cada card exibe: nome (do catálogo), código da turma, quantidade de alunos (do JSON) e status
- [ ] Em dispositivos mobile, cards se reorganizam em coluna única

### Edição
- [ ] Professor pode editar informações da oferta: código da turma e descrição
- [ ] Nome da disciplina não pode ser editado (vem do catálogo)

### Inativação
- [ ] Professor pode inativar disciplinas ao final do período letivo
- [ ] Disciplinas inativas permanecem visíveis mas com status alterado

### Busca e Filtros
- [ ] Campo de busca por nome da disciplina ou código da turma
- [ ] Filtro dinâmico (atualiza em tempo real)
- [ ] Busca funciona tanto em disciplinas ativas quanto inativas

---

## Tarefas Técnicas (Atualizadas)

### Componentes React
- [ ] Criar page `Disciplinas`
- [ ] Criar component `ModalDisciplina` (criação/edição)
- [ ] Criar component `CardDisciplina` (reutilizável)
- [ ] Criar component `FiltroBusca`

### Gerenciamento de Estado
- [ ] Estado para lista de disciplinas ativas/inativas
- [ ] Estado para filtro de busca
- [ ] Estado para controle do modal (aberto/fechado, modo criação/edição)

### Consumo de Dados
- [ ] Criar arquivo JSON com catálogo de disciplinas mockadas
- [ ] Implementar fetch para consumir JSON
- [ ] Função para agregar dados do JSON + dados do formulário

### Formulário
- [ ] Implementar com React Hook Form
- [ ] Select de matéria (filtra disciplinas)
- [ ] Select de disciplina (baseado na matéria selecionada)
- [ ] Validação: código, descrição e semestre/ano obrigatórios
- [ ] Modo criação vs edição (mesma modal, comportamentos diferentes)

### Estilização
- [ ] CSS Modules para page Disciplinas
- [ ] CSS Modules para CardDisciplina
- [ ] CSS Modules para ModalDisciplina
- [ ] Layout responsivo (grid desktop → coluna mobile)
- [ ] Mobile-first approach

### Git Flow
- [ ] Branch: `feature/us02-disciplinas`
- [ ] Commits semânticos incrementais
- [ ] Merge na develop ao finalizar

---

## Observações de Implementação

### Simplicidade Funcional
A implementação deve manter o equilíbrio entre:
- Funcionalidade completa conforme critérios
- Código simples e compreensível
- Foco no aprendizado dos conceitos (fetch, formulários, estado)

### Prática de Fetch
O uso de JSON mockado serve para praticar:
- Requisições assíncronas
- Manipulação de dados retornados
- Tratamento de loading/erro
- Agregação de dados de múltiplas fontes

### Escalabilidade Futura
Embora não haja persistência agora, a estrutura deve permitir:
- Futura integração com API real
- Substituição do fetch do JSON por endpoints REST
- Adição de autenticação e autorização
- Implementação de backend para persistência

---

## Data de Refinamento
11 de fevereiro de 2026

---

## Cronograma de Implementação

### Fase 1: Preparação da Estrutura Base
**Objetivo:** Criar fundação do projeto sem lógica complexa

#### 1.1 Configuração Inicial
- [ ] Criar branch `feature/us02-disciplinas`
- [ ] Criar estrutura de pastas necessárias:
  - `src/pages/Disciplinas/`
  - `src/components/CardDisciplina/`
  - `src/components/ModalDisciplina/`
  - `src/data/`

**Commit esperado:** `feat: cria estrutura base para US02 - disciplinas`

#### 1.2 Dados Mockados (JSON)
- [ ] Criar arquivo `src/data/disciplinas.json`
- [ ] Mockar 5-8 disciplinas com estrutura:
  - `id` (único)
  - `nome` (pré-preenchido)
  - `materia` (pré-preenchido)
  - `alunosMatriculados` (pré-preenchido, número mockado)
  - `codigoTurma` (vazio inicialmente: `""`)
  - `descricao` (vazio inicialmente: `""`)
  - `semestre` (vazio inicialmente: `""`)
  - `status` (vazio inicialmente: `""`)
- [ ] Incluir disciplinas de pelo menos 2-3 matérias diferentes

**Commit esperado:** `feat: adiciona dados mockados de disciplinas`

---

### Fase 2: Página Disciplinas - Visualização Básica
**Objetivo:** Exibir cards mesmo que ainda sem dados completos

#### 2.1 Page Disciplinas (estrutura)
- [ ] Criar `Disciplinas.jsx` em `src/pages/Disciplinas/`
- [ ] Criar estrutura HTML básica:
  - Container principal
  - Seção de topo (onde ficarão busca + botão criar)
  - Grid/container para os cards
- [ ] Adicionar rota no router para `/disciplinas`

**Commit esperado:** `feat: cria page Disciplinas com estrutura básica`

#### 2.2 Fetch do JSON
- [ ] Implementar `useEffect` para fetch do JSON ao montar componente
- [ ] Criar estado `disciplinas` para armazenar dados carregados
- [ ] Criar estado `loading` para controle de carregamento
- [ ] Criar estado `erro` para tratamento de erros
- [ ] Testar no console se dados estão sendo carregados

**Commit esperado:** `feat: implementa fetch de disciplinas do JSON`

#### 2.3 Component CardDisciplina
- [ ] Criar `CardDisciplina.jsx` em `src/components/CardDisciplina/`
- [ ] Criar `CardDisciplina.module.css`
- [ ] Receber props: `nome`, `codigoTurma`, `alunosMatriculados`, `status`
- [ ] Estrutura do card:
  - Título (nome da disciplina)
  - Código da turma
  - Quantidade de alunos
  - Badge/tag de status (ativa/inativa)
- [ ] Estilização básica desktop (sem responsivo ainda)

**Commit esperado:** `feat: cria componente CardDisciplina`

#### 2.4 Renderização dos Cards
- [ ] Na page Disciplinas, mapear array de disciplinas
- [ ] Renderizar CardDisciplina para cada item
- [ ] Aplicar renderização condicional:
  - Mostrar loading enquanto carrega
  - Mostrar mensagem se lista vazia
  - Mostrar erro se fetch falhar

**Commit esperado:** `feat: implementa renderização de cards de disciplinas`

#### 2.5 Estilização da Page
- [ ] Criar `Disciplinas.module.css`
- [ ] Estilizar layout da página (desktop first por enquanto)
- [ ] Grid de cards (3 colunas, por exemplo)
- [ ] Espaçamentos e alinhamentos
- [ ] Testar visualmente com dados mockados

**Commit esperado:** `style: adiciona estilos para page Disciplinas`

---

### Fase 3: Filtro de Busca
**Objetivo:** Permitir busca dinâmica por nome ou código

#### 3.1 Campo de Busca
- [ ] Adicionar input de busca na seção de topo da page
- [ ] Criar estado `termoBusca` com useState
- [ ] Conectar input ao estado (controlled component)
- [ ] Estilizar campo de busca

**Commit esperado:** `feat: adiciona campo de busca na página Disciplinas`

#### 3.2 Lógica de Filtro
- [ ] Criar função de filtro que retorna disciplinas filtradas
- [ ] Filtrar por `nome` OU `codigoTurma` contendo o termo
- [ ] Usar disciplinas filtradas no map ao invés do array completo
- [ ] Testar busca funcionando em tempo real
- [ ] Mostrar mensagem quando nenhuma disciplina for encontrada

**Commit esperado:** `feat: implementa lógica de filtro de busca dinâmica`

---

### Fase 4: Modal de Criação/Edição - Estrutura
**Objetivo:** Criar modal sem formulário ainda

#### 4.1 Component ModalDisciplina (estrutura)
- [ ] Criar `ModalDisciplina.jsx` em `src/components/ModalDisciplina/`
- [ ] Criar `ModalDisciplina.module.css`
- [ ] Estrutura básica:
  - Overlay (fundo escuro)
  - Container do modal (centralizado)
  - Botão fechar (X)
  - Área de conteúdo (onde ficará formulário)
- [ ] Receber props: `isOpen`, `onClose`
- [ ] Renderização condicional baseada em `isOpen`

**Commit esperado:** `feat: cria estrutura do componente ModalDisciplina`

#### 4.2 Controle de Abertura do Modal
- [ ] Na page Disciplinas, criar estado `modalAberto`
- [ ] Adicionar botão "Criar Disciplina" no topo da página
- [ ] Botão abre modal (muda estado para true)
- [ ] Modal fecha ao clicar no X ou no overlay
- [ ] Testar abertura/fechamento

**Commit esperado:** `feat: implementa controle de abertura/fechamento do modal`

#### 4.3 Estilização do Modal
- [ ] Estilizar overlay (backdrop escuro, transparência)
- [ ] Estilizar container do modal (centralizado, sombra, etc)
- [ ] Estilizar botão fechar
- [ ] Adicionar animação de entrada (opcional, mas recomendado)

**Commit esperado:** `style: adiciona estilos ao modal de disciplinas`

---

### Fase 5: Formulário de Criação - React Hook Form
**Objetivo:** Criar formulário funcional com validação

#### 5.1 Setup do React Hook Form
- [ ] Instalar dependências: `react-hook-form` e `yup` + `@hookform/resolvers`
- [ ] Criar schema de validação com Yup:
  - `materia`: obrigatório
  - `disciplinaId`: obrigatório
  - `codigoTurma`: obrigatório, string
  - `descricao`: obrigatório, mínimo de caracteres
  - `semestre`: obrigatório
  - `status`: obrigatório (default "ativa")
- [ ] Configurar useForm no ModalDisciplina

**Commit esperado:** `feat: configura React Hook Form e validação com Yup`

#### 5.2 Campos do Formulário
- [ ] Select de matéria (opções baseadas nas matérias do JSON)
- [ ] Select de disciplina (filtrado pela matéria escolhida)
- [ ] Input código da turma
- [ ] Textarea descrição
- [ ] Input semestre/ano
- [ ] Checkbox/toggle status (ativa/inativa)
- [ ] Todos conectados ao register do React Hook Form

**Commit esperado:** `feat: adiciona campos do formulário de disciplina`

#### 5.3 Select Dependente (Matéria → Disciplina)
- [ ] Usar `watch` do React Hook Form para observar campo matéria
- [ ] Quando matéria mudar, filtrar disciplinas disponíveis
- [ ] Atualizar opções do select de disciplina dinamicamente
- [ ] Limpar seleção de disciplina quando matéria mudar

**Commit esperado:** `feat: implementa select dependente matéria-disciplina`

#### 5.4 Exibição de Erros
- [ ] Exibir mensagens de erro abaixo de cada campo
- [ ] Usar `errors` do React Hook Form
- [ ] Estilizar mensagens de erro (cor vermelha, tamanho menor)
- [ ] Testar validação funcionando

**Commit esperado:** `feat: adiciona exibição de erros de validação`

#### 5.5 Botões de Ação
- [ ] Botão "Cancelar" (fecha modal sem salvar)
- [ ] Botão "Salvar" (submit do formulário)
- [ ] Desabilitar botão salvar durante processamento
- [ ] Estilizar botões

**Commit esperado:** `feat: adiciona botões de ação no formulário`

---

### Fase 6: Lógica de Criação (sem localStorage ainda)
**Objetivo:** Criar disciplina e exibir no card (apenas em estado)

#### 6.1 Função de Submit
- [ ] Criar função `handleSubmit` no ModalDisciplina
- [ ] Receber dados validados do formulário
- [ ] Buscar dados da disciplina selecionada do JSON (nome, qtde alunos)
- [ ] Combinar com dados do formulário
- [ ] Criar objeto completo da disciplina

**Commit esperado:** `feat: implementa função de submit do formulário`

#### 6.2 Adicionar ao Estado
- [ ] Passar função via props do ModalDisciplina para Disciplinas page
- [ ] Na page, criar função que adiciona nova disciplina ao estado
- [ ] Atualizar array de disciplinas
- [ ] Fechar modal após sucesso
- [ ] Resetar formulário

**Commit esperado:** `feat: adiciona disciplina criada ao estado da aplicação`

#### 6.3 Testes de Criação
- [ ] Testar criação de disciplina
- [ ] Verificar se aparece imediatamente nos cards
- [ ] Verificar se busca funciona com nova disciplina
- [ ] Verificar se dados estão completos no card

**Commit esperado:** `test: valida fluxo de criação de disciplina`

---

### Fase 7: LocalStorage - Persistência de Dados
**Objetivo:** Salvar e recuperar disciplinas do localStorage

#### 7.1 Entender localStorage (ESTUDO)
- [ ] **PAUSA PARA APRENDIZADO**
- [ ] Estudar conceitos de localStorage
- [ ] Entender API: `setItem`, `getItem`, `removeItem`
- [ ] Entender formato: sempre string (JSON.stringify/parse)
- [ ] Testar no console do navegador

**Sem commit - apenas estudo**

#### 7.2 Salvar no localStorage
- [ ] Criar função `salvarNoLocalStorage(disciplinas)`
- [ ] Usar `localStorage.setItem('disciplinas', JSON.stringify(disciplinas))`
- [ ] Chamar essa função sempre que array de disciplinas mudar
- [ ] Usar `useEffect` com dependency array `[disciplinas]`

**Commit esperado:** `feat: implementa salvamento de disciplinas no localStorage`

#### 7.3 Carregar do localStorage
- [ ] Modificar fetch inicial para:
  - Primeiro tentar carregar do localStorage
  - Se existir, usar esses dados
  - Se não existir, fazer fetch do JSON
  - Mesclar dados: usar localStorage como base, completar vazios do JSON
- [ ] Criar função `carregarDisciplinas()`

**Commit esperado:** `feat: implementa carregamento de disciplinas do localStorage`

#### 7.4 Sincronização Completa
- [ ] Garantir que criação salva no localStorage
- [ ] Garantir que edição salva no localStorage
- [ ] Garantir que inativação salva no localStorage
- [ ] Testar refresh da página → dados persistem

**Commit esperado:** `feat: sincroniza todas operações com localStorage`

---

### Fase 8: Edição de Disciplinas
**Objetivo:** Permitir editar disciplinas já criadas

#### 8.1 Botão Editar no Card
- [ ] Adicionar botão "Editar" no CardDisciplina
- [ ] Passar função `onEditar` via props
- [ ] Clicar no botão abre modal com dados preenchidos

**Commit esperado:** `feat: adiciona botão de edição no card`

#### 8.2 Modo Edição no Modal
- [ ] Adicionar prop `disciplinaParaEditar` no ModalDisciplina
- [ ] Se prop existir = modo edição, se não = modo criação
- [ ] Preencher formulário com dados da disciplina (usar `reset` do useForm)
- [ ] Alterar título do modal: "Criar" vs "Editar"
- [ ] Alterar texto do botão: "Salvar" vs "Atualizar"

**Commit esperado:** `feat: implementa modo de edição no modal`

#### 8.3 Atualizar Disciplina
- [ ] Criar função `atualizarDisciplina` na page
- [ ] Encontrar disciplina no array pelo ID
- [ ] Substituir dados antigos pelos novos
- [ ] Atualizar estado
- [ ] localStorage será atualizado automaticamente via useEffect

**Commit esperado:** `feat: implementa atualização de disciplina existente`

---

### Fase 9: Inativação de Disciplinas
**Objetivo:** Marcar disciplinas como inativas

#### 9.1 Botão Inativar
- [ ] Adicionar botão "Inativar" no card (apenas se status === "ativa")
- [ ] Adicionar botão "Reativar" no card (apenas se status === "inativa")
- [ ] Passar função `onToggleStatus` via props

**Commit esperado:** `feat: adiciona botão de inativar/reativar disciplina`

#### 9.2 Lógica de Toggle Status
- [ ] Criar função que altera status entre "ativa" ↔ "inativa"
- [ ] Atualizar no estado
- [ ] localStorage atualiza automaticamente
- [ ] Card deve refletir visualmente o status (cor, opacidade, badge)

**Commit esperado:** `feat: implementa toggle de status de disciplina`

#### 9.3 Estilização de Status
- [ ] Card de disciplina inativa com visual diferenciado
- [ ] Badge/tag de status com cores distintas (verde/vermelho)
- [ ] Opcional: opacidade reduzida para inativas

**Commit esperado:** `style: diferencia visualmente disciplinas ativas e inativas`

---

### Fase 10: Responsividade
**Objetivo:** Adaptar para mobile (mobile-first)

#### 10.1 Page Disciplinas - Mobile
- [ ] Criar media queries no CSS Module
- [ ] Grid de cards → coluna única em mobile
- [ ] Ajustar tamanhos de fonte
- [ ] Ajustar espaçamentos
- [ ] Campo de busca ocupa largura total

**Commit esperado:** `style: torna page Disciplinas responsiva para mobile`

#### 10.2 CardDisciplina - Mobile
- [ ] Ajustar layout interno do card
- [ ] Botões podem empilhar verticalmente se necessário
- [ ] Testar em diferentes tamanhos de tela

**Commit esperado:** `style: torna CardDisciplina responsivo para mobile`

#### 10.3 Modal - Mobile
- [ ] Modal ocupa mais espaço da tela em mobile (ou tela cheia)
- [ ] Formulário empilha verticalmente
- [ ] Selects e inputs com largura total
- [ ] Testar usabilidade em tela pequena

**Commit esperado:** `style: torna ModalDisciplina responsivo para mobile`

---

### Fase 11: Melhorias e Refinamentos
**Objetivo:** Polir experiência do usuário

#### 11.1 Feedback Visual
- [ ] Mensagem de sucesso ao criar/editar disciplina
- [ ] Animação ao adicionar novo card
- [ ] Loading states mais claros
- [ ] Transições suaves

**Commit esperado:** `feat: adiciona feedback visual para ações do usuário`

#### 11.2 Validações Extras
- [ ] Impedir código de turma duplicado
- [ ] Validar formato do semestre (ex: "2026.1")
- [ ] Mensagens de validação mais descritivas

**Commit esperado:** `feat: adiciona validações extras de formulário`

#### 11.3 Acessibilidade
- [ ] Labels adequados em inputs
- [ ] Aria-labels onde necessário
- [ ] Foco gerenciado no modal
- [ ] Navegação por teclado funcional

**Commit esperado:** `a11y: melhora acessibilidade da página Disciplinas`

---

### Fase 12: Testes e Finalização
**Objetivo:** Garantir qualidade e preparar para merge

#### 12.1 Testes Manuais
- [ ] Testar todos os fluxos:
  - Criar disciplina
  - Editar disciplina
  - Inativar/Reativar
  - Busca
  - Persistência (refresh da página)
- [ ] Testar em diferentes navegadores
- [ ] Testar em diferentes tamanhos de tela

**Sem commit - apenas testes**

#### 12.2 Revisão de Código
- [ ] Revisar código procurando:
  - Console.logs esquecidos
  - Código comentado desnecessário
  - Imports não utilizados
  - Formatação inconsistente
- [ ] Refatorar se necessário

**Commit esperado (se houver):** `refactor: limpa e otimiza código da US02`

#### 12.3 Documentação
- [ ] Atualizar README se necessário
- [ ] Comentários em código complexo
- [ ] Marcar checkboxes da US02 como concluídas

**Commit esperado:** `docs: atualiza documentação da US02`

#### 12.4 Merge
- [ ] Garantir que branch está atualizada com develop
- [ ] Resolver conflitos se houver
- [ ] Merge de `feature/us02-disciplinas` → `develop`
- [ ] Deletar branch feature

**Commit de merge:** `Merge branch 'feature/us02-disciplinas' into develop`

---

## Estimativa de Tempo por Fase

| Fase | Descrição | Tempo Estimado |
|------|-----------|----------------|
| 1 | Preparação da Estrutura Base | 30-45 min |
| 2 | Página Disciplinas - Visualização Básica | 1-1.5h |
| 3 | Filtro de Busca | 30-45 min |
| 4 | Modal de Criação - Estrutura | 45min-1h |
| 5 | Formulário - React Hook Form | 1.5-2h |
| 6 | Lógica de Criação (estado) | 45min-1h |
| 7 | **LocalStorage - Persistência** | **1-1.5h (+ estudo)** |
| 8 | Edição de Disciplinas | 1h |
| 9 | Inativação de Disciplinas | 30-45 min |
| 10 | Responsividade | 1-1.5h |
| 11 | Melhorias e Refinamentos | 1h |
| 12 | Testes e Finalização | 1h |
| **TOTAL** | | **~12-15h** |

---

## Notas Importantes

### Commits Semânticos
Seguir padrão estabelecido:
- `feat:` - nova funcionalidade
- `style:` - mudanças de estilo/CSS
- `refactor:` - refatoração sem alterar comportamento
- `docs:` - documentação
- `test:` - testes
- `fix:` - correção de bugs
- `a11y:` - melhorias de acessibilidade

### Pontos de Pausa para Aprendizado
- **Fase 7.1:** LocalStorage será um momento específico de aprendizado
- Não pular etapas para entender conceitos progressivamente
- Testar cada fase antes de avançar

### Flexibilidade
- Ordem pode ser ajustada conforme necessidade
- Commits podem ser agrupados se mudanças muito pequenas
- Mas evite commits gigantes - mantenha atômicos

---

## Status
✅ Refinamento aprovado e documentado
✅ Cronograma de implementação definido
⏳ Aguardando início da implementação

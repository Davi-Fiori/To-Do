# To-Do

Aplicação de lista de tarefas (To‑Do) construída com React + TypeScript. Permite criar, editar, excluir e marcar tarefas como concluídas. Projeto componentizado com foco em legibilidade e extensibilidade.

## Recursos
- Criar, editar e excluir tarefas
- Marcar/desmarcar tarefas como concluídas
- Estados de loading (skeletons e botões com loading)
- Componentes reutilizáveis (Card, InputText, InputCheckbox, ButtonIcon, Skeleton)
- Hook personalizado para lógica de tarefas (`use-task`)
- Import de SVG como componentes React (SVGR)

## Tecnologias
- React
- TypeScript
- Vite
- Tailwind CSS (classes utilitárias)
- class-variance-authority
- SVGR
- Node.js / npm

## Requisitos
- Node.js >= 18
- npm >= 8

## Instalação (Windows)
1. Abra PowerShell ou CMD.
2. Navegue até a pasta do projeto:
   cd "c:\Users\05725\Downloads\To-Do-master (9)\To-Do-master"
3. Instale dependências:
   npm install

## Executar em desenvolvimento
npm run dev

Abra o endereço exibido no terminal (ex.: http://localhost:5173).

## Build para produção
npm run build
npm run preview

## Scripts comuns (package.json)
- npm run dev — servidor de desenvolvimento
- npm run build — build de produção
- npm run preview — preview do build
- npm test — executar testes (se configurado)

## Estrutura principal (resumo)
src/
  assets/                 # ícones e imagens
  components/             # componentes reutilizáveis
  core-components/        # composições (ex.: task-items.tsx)
  hooks/                  # hooks (ex.: use-task.ts)
  models/                 # tipos e enums (ex.: Task, TaskState)
  main.tsx                # entrada da aplicação

Ajuste conforme a estrutura real do seu projeto.

## Problemas comuns e soluções rápidas

- TypeScript: "Property 'isDeletingTask' does not exist on type ..."
  - Abra `src/hooks/use-task.ts`.
  - Garanta que o hook declare e retorne `isDeletingTask`. Exemplo (resumido):
    ```ts
    const [isDeletingTask, setIsDeletingTask] = React.useState(false);

    async function deleteTask(id: string) {
      setIsDeletingTask(true);
      try {
        // lógica de exclusão
      } finally {
        setIsDeletingTask(false);
      }
    }

    return {
      // ...
      deleteTask,
      isDeletingTask,
      // ...
    };
    ```

- Ícone da lixeira (TrashIcon) não aparece em tarefas criadas:
  - Verifique se o item inicia em modo de edição (`isEditing`) quando `task.state === TaskState.Creating`. Nesse modo o ícone de lixeira não é renderizado por design.
  - Também verifique `src/core-components/task-items.tsx` para não haver um atributo `loading` solto no JSX (por exemplo `loading` sem `={...}`), pois isso pode forçar o botão a mostrar estado de loading e ocultar o ícone.
  - Se desejar que a lixeira apareça mesmo durante a criação, inicialize `isEditing` como `false` ou ajuste a condição de renderização.

- Reiniciar TS Server (VSCode) após mudanças de tipos/exports:
  Ctrl+Shift+P → "TypeScript: Restart TS Server"

## Contribuição
1. Fork → criar branch com feature/bugfix → commit claro → Pull Request
2. Siga convenções de tipagem e formatação
3. Adicione testes para mudanças relevantes

## Deploy
- Gere build (`npm run build`) e faça deploy do conteúdo da pasta `dist` em Netlify, Vercel, GitHub Pages ou outro provedor.
- Configure variáveis de ambiente se necessário.

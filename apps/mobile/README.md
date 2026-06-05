# Mobile (`apps/mobile`)

App mobile do projeto fetin-2k26, construído com Expo + React Native.

## Tecnologias

- Expo + React Native
- Expo Router (rotas file-based)
- NativeWind (estilo via Tailwind CSS)
- shadcn/ui para React Native (componentes via `@rn-primitives`)
- TanStack Query (cache / estado remoto)
- Axios (cliente HTTP)

## Estrutura

```txt
apps/mobile/
  app/                   # Rotas Expo Router (file-based)
    _layout.tsx          # Layout raiz (providers globais)
    (tabs)/
      _layout.tsx        # Layout das tabs
      index.tsx          # Tela home
  src/
    components/
      ui/                # Componentes shadcn — Button, Input, etc.
    hooks/               # Custom hooks (ex: use-api-health-query.ts)
    lib/
      utils.ts           # Utilitário cn() — clsx + tailwind-merge
    providers/
      query-provider.tsx # QueryClientProvider
    screens/             # Composição de telas por fluxo
    services/
      config/
        http-client.ts   # Instância Axios com EXPO_PUBLIC_API_URL
      query/
        query-client.ts  # Configuração do QueryClient
    store/               # Estado local (Zustand, Context — adicionar por feature)
  constants/
    theme.ts             # Tokens de cor e fonte
  hooks/
    use-color-scheme.ts       # Wrapper nativo
    use-color-scheme.web.ts   # Wrapper para SSR/web
  components.json        # Configuração do shadcn CLI
  global.css             # Diretivas Tailwind (@tailwind base/components/utilities)
```

## Fluxo de dados

1. `src/services/config/http-client.ts` configura o cliente Axios com a URL base (`EXPO_PUBLIC_API_URL`).
2. Hooks em `src/hooks/` encapsulam o cliente HTTP com TanStack Query.
3. Telas em `app/` e composições em `src/screens/` consomem os hooks — nunca HTTP diretamente.

## Convenções

### Arquivos e pastas

- **Nomes de arquivos**: `kebab-case` — ex: `use-api-health-query.ts`, `http-client.ts`
- **Componentes exportados**: `PascalCase` — ex: `Button`, `QueryProvider`
- **Pastas**: `kebab-case` — ex: `src/components`, `src/services`

### Rotas

- Rotas em `app/` seguem a convenção file-based do Expo Router.
- Grupos de layout: `(tabs)`, `(auth)`, etc.
- Layouts: `_layout.tsx`.
- Telas de modal: `modal.tsx` na raiz de `app/`.

### Componentes

- Componentes de UI base ficam em `src/components/ui/`.
- São gerados/adicionados via shadcn CLI (`npx shadcn@latest add <component>`).
- Utilizam CVA (`class-variance-authority`) para variantes.
- Estilização exclusivamente via classes NativeWind, nunca `StyleSheet.create` em componentes de UI.

### Hooks

- Custom hooks ficam em `src/hooks/`.
- Nome: `use-<nome-descritivo>.ts` — ex: `use-user-query.ts`, `use-login-mutation.ts`.
- Hooks de query encapsulam TanStack Query + cliente HTTP.
- Componentes e telas nunca chamam Axios diretamente.

### Estado

- **Estado remoto**: sempre via TanStack Query (hooks em `src/hooks/`).
- **Estado local de UI/domínio**: em `src/store/` (adicionar Zustand ou Context por feature, quando TanStack Query não for suficiente).

### Tipagem compartilhada

- Tipos compartilhados entre API e mobile ficam em `packages/shared/src/types/`.
- Import no mobile: `import type { ... } from '@repo/shared'`.
- Nunca duplique tipos que pertencem ao contrato de API — defina em `@repo/shared`.

### Estilização

- Todas as classes Tailwind são aplicadas via NativeWind (`className` prop).
- O utilitário `cn()` em `src/lib/utils.ts` combina `clsx` + `tailwind-merge` para merge seguro de classes.
- Tema de cores em `constants/theme.ts` e no preset `@repo/tailwind-config/native`.
- Dark mode via classes `dark:` do NativeWind + `useColorScheme`.

## Shadcn no React Native

Este projeto usa shadcn como biblioteca padrão de componentes, adaptada para React Native via `@rn-primitives`.

### Adicionar um componente

```bash
npx shadcn@latest add <component>
```

O componente será gerado em `src/components/ui/`.

### Dependências base

- `@rn-primitives/slot` e `@rn-primitives/types`: camada headless (equivalente ao Radix UI no web).
- `lucide-react-native` + `react-native-svg`: ícones.
- `class-variance-authority` + `clsx` + `tailwind-merge`: variantes e merge de classes.

## Variáveis de ambiente

Copie `.env.example` e ajuste conforme necessário:

```bash
cp .env.example .env
```

| Variável | Padrão | Descrição |
|---|---|---|
| `EXPO_PUBLIC_API_URL` | `http://localhost:3333` | URL base da core-api |

## Execução

```bash
# a partir da raiz do monorepo
pnpm dev:mobile

# ou diretamente neste diretório
pnpm start          # Expo dev server
pnpm android        # Android
pnpm ios            # iOS
pnpm web            # Web
```

## Checagem de tipos

```bash
pnpm typecheck
```

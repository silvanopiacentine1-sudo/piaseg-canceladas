# Piaseg · Apólices Canceladas

Painel para cada franqueado acompanhar os clientes que tiveram apólice cancelada (relatório
`RptDocsEmitidos` de cancelamentos do Quiver) e informar o motivo de cada cancelamento. O gestor tem a visão
geral mês a mês (pela data do cancelamento) por franqueado.

Mesmo conceito do painel de Apólices não Renovadas (`piaseg-apolices`).

- `backend/` — FastAPI + PostgreSQL (Render). Login com o mesmo usuário/senha do Portal do Franqueado
  (`piaseg_usuarios` em `https://www.piaseg.com.br/get_data.php`, sha256).
- `frontend/` — Next.js (Vercel). `NEXT_PUBLIC_API_URL` aponta para o backend.

A planilha é importada pelo gestor na tela "Importar e acessos" (nenhum dado de cliente fica neste repositório).

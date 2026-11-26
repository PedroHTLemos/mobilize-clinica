# Mobilize · Landing page para clínica de fisioterapia (Next.js)

Landing page institucional de uma clínica fictícia de ortopedia e fisioterapia, feita com **Next.js**, **TypeScript** e **Tailwind CSS**.

> Desenvolvi esta página como **proposta visual para um possível cliente** em dez/2025. A clínica "Mobilize", os telefones e o endereço são fictícios. Não há back-end: é uma página estática de apresentação.

---

## Seções

- **Header** fixo com navegação por âncoras (Início, Sobre, Especialidades, Contato).
- **Hero** com chamada principal.
- **Sobre** a clínica.
- **Especialidades** em cards: lombalgia, hérnia de disco, dor cervical, reabilitação pós-cirúrgica, lesões esportivas, ATM, ombro e joelho.
- **Diferenciais** do atendimento.
- **Localização** com mapa do Google Maps incorporado (iframe) e link para o WhatsApp.
- **FAQ** em acordeão, com estado controlado por `useState`.
- **Botão flutuante de WhatsApp** presente em todas as seções.
- **Footer** com contatos e redes sociais.

---

## Tecnologias

| Item | Uso |
|---|---|
| Next.js 16 (App Router) + React 19 | Estrutura da página |
| TypeScript | Componentes tipados |
| Tailwind CSS 4 | Estilização e layout responsivo |
| next/font (Inter) | Fonte otimizada |
| lucide-react e react-icons | Ícones |

---

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Organização

```
app/
├── layout.tsx        # Metadados, fonte, Header e botão flutuante
├── page.tsx          # Composição das seções
├── globals.css
└── components/       # Hero, About, Specialties, Differentials, Locations, FAQ, Footer...
public/images/        # Imagens da página
```

---

## Limitações conhecidas

- Telefones, endereço e links de redes sociais são placeholders.
- Não há formulário de contato nem back-end; o contato é feito por links para o WhatsApp.
- `Contact.tsx` não é usado na página (a seção de localização assumiu esse papel).

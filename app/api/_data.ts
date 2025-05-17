export interface Post {
  id: number;
  slug: string;
  userId: number;
  title: string;
  body: string;
  img: string; // Added image property
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

let postIdSeq = 1;
let commentIdSeq = 1;

// Real data for the first two posts
export const posts: Post[] = [
  {
    id: postIdSeq++,
    slug: "dominar-el-principio-de-responsabilidad-unica-en-react",
    userId: 1,
    title: "Dominar el Principio de Responsabilidad Única en React",
    body: `Una de las mejores formas de destacar como desarrollador de React es interiorizar y aplicar realmente los principios de la ingeniería de software — especialmente el Principio de Responsabilidad Única (SRP, por sus siglas en inglés).

Aunque SRP proviene del diseño orientado a objetos, es extremadamente relevante en el mundo de React, donde la estructura de los componentes y su mantenibilidad pueden definir el éxito o fracaso de una base de código.`,
    img: "/srp.png"
  },
  {
    id: postIdSeq++,
    slug: "criterios-y-guia-para-revisiones-de-codigo-en-proyectos-con-react",
    userId: 1,
    title: "Criterios y Guía para Revisiones de Código (en proyectos con React)",
    body: `Empezá con la mentalidad adecuada
Antes de revisar el código, tené en cuenta estos valores fundamentales:

🎯 Propósito ante todo
Entendé qué busca lograr el PR antes de revisar cómo está implementado.

🤝 Feedback respetuoso
El objetivo es mejorar el código, no criticar a quien lo escribió. Concentrate en el trabajo, asumí buenas intenciones y usá un lenguaje amable y colaborativo.`,
    img: "/codeReview.png"
  },
  {
    id: postIdSeq++,
    slug: "criterios-y-guia-para-revisiones-de-codigo-en-proyectos-con-react",
    userId: 1,
    title: "Criterios y Guía para Revisiones de Código (en proyectos con React)",
    body: `Empezá con la mentalidad adecuada
Antes de revisar el código, tené en cuenta estos valores fundamentales:

🎯 Propósito ante todo
Entendé qué busca lograr el PR antes de revisar cómo está implementado.

🤝 Feedback respetuoso
El objetivo es mejorar el código, no criticar a quien lo escribió. Concentrate en el trabajo, asumí buenas intenciones y usá un lenguaje amable y colaborativo.`,
    img: "/codeReview.png"
  }
];

// 3 comments per post
export const comments: Comment[] = posts.flatMap((p) =>
  Array.from({ length: 3 }, () => ({
    id: commentIdSeq,
    postId: p.id,
    name: `User ${commentIdSeq}`,
    email: `user${commentIdSeq}@example.com`,
    body: `Comment ${commentIdSeq++} on post ${p.id}.`,
  }))
);

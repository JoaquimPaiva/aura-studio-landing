import React from "react";
import { createRoot } from "react-dom/client";
import { Button, Glass } from "glisse";
import "glisse/styles.css";
import "../script.js";

const goTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

createRoot(document.getElementById("header-action-root")).render(
  <Button className="glisse-header-button" onClick={() => goTo("contacto")}>
    Vamos conversar <span aria-hidden="true">↗</span>
  </Button>,
);

createRoot(document.getElementById("hero-action-root")).render(
  <Button className="button button-light glisse-primary-button" variant="filled" onClick={() => goTo("trabalho")}>
    Explorar projetos <span aria-hidden="true">↘</span>
  </Button>,
);

createRoot(document.getElementById("menu-action-root")).render(
  <Button className="menu-toggle glisse-menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="primary-navigation" variant="glass">
    <span aria-hidden="true"></span><span aria-hidden="true"></span>
  </Button>,
);

createRoot(document.getElementById("hero-badge-root")).render(
  <Glass className="eyebrow glisse-surface">
    <i className="live-dot" aria-hidden="true"></i> ESTÚDIO CRIATIVO INDEPENDENTE <span>· LISBOA</span>
  </Glass>,
);

createRoot(document.getElementById("hero-note-root")).render(
  <Glass className="hero-note glisse-surface">
    <span className="note-icon" aria-hidden="true">✳</span>
    <span>Design com intenção.<br /><strong>Impacto com significado.</strong></span>
  </Glass>,
);

[
  ["project-label-one", "CONCEITO 01 · IDENTIDADE"],
  ["project-label-two", "CONCEITO 02 · MARCA"],
  ["project-label-three", "CONCEITO 03 · ESPAÇO"],
].forEach(([id, label]) => {
  createRoot(document.getElementById(id)).render(
    <Glass className="project-index glisse-surface">{label}</Glass>,
  );
});

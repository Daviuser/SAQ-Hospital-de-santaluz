// Configuração dos canais. Preencha somente com dados oficiais confirmados.
const CONFIG = {
  whatsappNumber: "5575988442372", // WhatsApp oficial: (75) 98844-2372 (formato internacional, só dígitos)
  evaluationUrl: "",    // link de avaliação definido pela administração
  ombudsmanUrl: "",     // link oficial da Ouvidoria
  reclameAquiUrl: ""    // perfil oficial no Reclame Aqui, após confirmação
};

const ICONS = {
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  message: '<path d="M21 12a8 8 0 0 1-11.7 7L4 20l1.2-4.3A8 8 0 1 1 21 12Z"/><path d="M9 10h6M9 14h4"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
};

const CHANNELS = [
  { key: "evaluationUrl", icon: "star", title: "Avalie seu atendimento", desc: "Compartilhe sua experiência e ajude-nos a melhorar." },
  { key: "ombudsmanUrl", icon: "message", title: "Reclamações e sugestões", desc: "Envie sua manifestação pelo canal oficial disponível." },
  { key: "reclameAquiUrl", icon: "external", title: "Reclame Aqui", desc: "Consulte o perfil oficial no canal externo." }
];

function validUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function whatsappUrl(number) {
  const digits = String(number).replace(/\D/g, "");
  return digits.length >= 12 ? "https://wa.me/" + digits : "";
}

function svg(path, cls) {
  return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' + path + "</svg>";
}

function renderChannel(channel) {
  const href = validUrl(CONFIG[channel.key]) ? CONFIG[channel.key] : "";
  const li = document.createElement("li");
  const el = document.createElement(href ? "a" : "div");
  el.className = "channel" + (href ? "" : " is-unavailable");
  if (href) {
    el.href = href;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
  el.innerHTML =
    '<span class="channel-icon">' + svg(ICONS[channel.icon], "") + "</span>" +
    '<span class="channel-text"><span class="channel-title">' + channel.title +
    '</span><span class="channel-desc">' + channel.desc + "</span></span>" +
    (href ? svg('<path d="M9 6l6 6-6 6"/>', "channel-arrow") : '<span class="channel-status">Indisponível no momento</span>');
  li.appendChild(el);
  return li;
}

function init() {
  const list = document.getElementById("channel-list");
  CHANNELS.forEach((c) => list.appendChild(renderChannel(c)));

  const btn = document.getElementById("whatsapp-btn");
  const note = document.getElementById("whatsapp-note");
  const wa = whatsappUrl(CONFIG.whatsappNumber);
  if (wa) {
    btn.href = wa;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.hidden = false;
  } else {
    note.hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", init);

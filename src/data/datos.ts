// Datos de ejemplo con la misma forma que los modelos de la API de MongoDB del proyecto de servidor.
// Cada documento tiene un _id de MongoDB y las relaciones se guardan con el _id del otro documento.
// Se simula que el usuario "izan" tiene la sesión iniciada.

export const users = [
  { _id: '6650a1f2c3d4e5f6a7b8c901', userName: 'izan', fullName: 'Izan Fernández', description: 'Estudiante de DAW.', email: 'izan@example.com', birthDate: '2005-03-14' },
  { _id: '6650a1f2c3d4e5f6a7b8c902', userName: 'lauracodigo', fullName: 'Laura Código', description: 'Tutoriales de programación web.', email: 'laura@example.com', birthDate: '1998-06-02' },
  { _id: '6650a1f2c3d4e5f6a7b8c903', userName: 'marioviajes', fullName: 'Mario Viajes', description: 'Rutas y viajes.', email: 'mario@example.com', birthDate: '1995-11-20' },
  { _id: '6650a1f2c3d4e5f6a7b8c904', userName: 'cocinarapida', fullName: 'Cocina Rápida', description: 'Recetas en pocos minutos.', email: 'cocina@example.com', birthDate: '1990-01-08' },
];

const [izan, laura, mario, cocina] = users.map((u) => u._id);

export const videos = [
  { _id: '6650b2a3d4e5f6a7b8c9d001', title: 'Aprende HTML en 10 minutos', description: 'Repaso de las etiquetas más importantes de HTML.', thumbnail: 'https://placehold.co/320x180/1e1b4b/c4b5fd?text=Video+1', url: 'https://example.com/videos/html.mp4', publishedAt: '2026-11-02', kidsFriendly: true, user: laura },
  { _id: '6650b2a3d4e5f6a7b8c9d002', title: 'Ruta por los Pirineos', description: 'Resumen de mi viaje a pie por los Pirineos.', thumbnail: 'https://placehold.co/320x180/1e1b4b/c4b5fd?text=Video+2', url: 'https://example.com/videos/pirineos.mp4', publishedAt: '2026-10-28', kidsFriendly: true, user: mario },
  { _id: '6650b2a3d4e5f6a7b8c9d003', title: 'Pasta cremosa en 15 minutos', description: 'Receta rápida para cenas entre semana.', thumbnail: 'https://placehold.co/320x180/1e1b4b/c4b5fd?text=Video+3', url: 'https://example.com/videos/pasta.mp4', publishedAt: '2026-11-10', kidsFriendly: false, user: cocina },
  { _id: '6650b2a3d4e5f6a7b8c9d004', title: 'CSS Grid desde cero', description: 'Cómo hacer maquetaciones con Grid.', thumbnail: 'https://placehold.co/320x180/1e1b4b/c4b5fd?text=Video+4', url: 'https://example.com/videos/grid.mp4', publishedAt: '2026-11-15', kidsFriendly: true, user: laura },
];

const [html, pirineos, pasta, grid] = videos.map((v) => v._id);

export const comments = [
  { _id: '6650c3b4e5f6a7b8c9d0e001', text: '¡Muy claro, gracias!', publishedAt: '2026-11-03', user: mario, video: html },
  { _id: '6650c3b4e5f6a7b8c9d0e002', text: 'Me ha servido para la práctica.', publishedAt: '2026-11-04', user: izan, video: html },
  { _id: '6650c3b4e5f6a7b8c9d0e003', text: '¡Qué paisajes!', publishedAt: '2026-10-29', user: laura, video: pirineos },
  { _id: '6650c3b4e5f6a7b8c9d0e004', text: 'Muy útil.', publishedAt: '2026-11-16', user: cocina, video: grid },
];

export const likes = [
  { _id: '6650d4c5f6a7b8c9d0e1f001', user: izan, video: html },
  { _id: '6650d4c5f6a7b8c9d0e1f002', user: mario, video: html },
  { _id: '6650d4c5f6a7b8c9d0e1f003', user: cocina, video: html },
  { _id: '6650d4c5f6a7b8c9d0e1f004', user: laura, video: pirineos },
  { _id: '6650d4c5f6a7b8c9d0e1f005', user: izan, video: pasta },
  { _id: '6650d4c5f6a7b8c9d0e1f006', user: laura, video: pasta },
  { _id: '6650d4c5f6a7b8c9d0e1f007', user: cocina, video: grid },
];

export const subscriptions = [
  { _id: '6650e5d6a7b8c9d0e1f2a001', subscriber: izan, channel: laura, subscribedAt: '2026-09-01', reminder: true },
  { _id: '6650e5d6a7b8c9d0e1f2a002', subscriber: izan, channel: mario, subscribedAt: '2026-10-12', reminder: false },
  { _id: '6650e5d6a7b8c9d0e1f2a003', subscriber: izan, channel: cocina, subscribedAt: '2026-10-20', reminder: false },
  { _id: '6650e5d6a7b8c9d0e1f2a004', subscriber: laura, channel: izan, subscribedAt: '2026-10-25', reminder: false },
  { _id: '6650e5d6a7b8c9d0e1f2a005', subscriber: mario, channel: izan, subscribedAt: '2026-11-01', reminder: false },
];

export const views = [
  { _id: '6650f6e7b8c9d0e1f2a3b001', user: izan, video: html, day: '2026-11-04' },
  { _id: '6650f6e7b8c9d0e1f2a3b002', user: mario, video: html, day: '2026-11-03' },
  { _id: '6650f6e7b8c9d0e1f2a3b003', user: cocina, video: html, day: '2026-11-05' },
  { _id: '6650f6e7b8c9d0e1f2a3b004', user: laura, video: html, day: '2026-11-06' },
  { _id: '6650f6e7b8c9d0e1f2a3b005', user: laura, video: pirineos, day: '2026-10-29' },
  { _id: '6650f6e7b8c9d0e1f2a3b006', user: izan, video: pirineos, day: '2026-10-30' },
  { _id: '6650f6e7b8c9d0e1f2a3b007', user: izan, video: pasta, day: '2026-11-11' },
  { _id: '6650f6e7b8c9d0e1f2a3b008', user: laura, video: pasta, day: '2026-11-12' },
  { _id: '6650f6e7b8c9d0e1f2a3b009', user: mario, video: pasta, day: '2026-11-12' },
  { _id: '6650f6e7b8c9d0e1f2a3b010', user: cocina, video: grid, day: '2026-11-16' },
];

export type Usuario = (typeof users)[number];

// Usuario con la sesión iniciada
export const usuarioActual = users[0];

// Funciones para juntar los datos de las distintas colecciones
export const getUsuario = (id: string) => users.find((u) => u._id === id)!;
export const getVisualizaciones = (videoId: string) => views.filter((v) => v.video === videoId).length;
export const getLikes = (videoId: string) => likes.filter((l) => l.video === videoId).length;
export const getComentarios = (videoId: string) => comments.filter((c) => c.video === videoId);
export const getSuscripciones = (userId: string) => subscriptions.filter((s) => s.subscriber === userId).map((s) => getUsuario(s.channel));
export const getSuscriptores = (userId: string) => subscriptions.filter((s) => s.channel === userId).length;

// La API no guarda avatar, así que se genera una imagen con las iniciales del nombre
export const avatar = (user: Usuario, size = 40) =>
  `https://placehold.co/${size}x${size}/5b21b6/ede9fe?text=${user.fullName
    .split(' ')
    .map((p) => p[0])
    .join('')}`;

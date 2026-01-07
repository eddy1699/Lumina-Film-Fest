
import { Movie, Screening } from './types';

export const FESTIVAL_NAME = "Lumina Film Fest 2025";
export const FESTIVAL_DATES = "15 - 22 de Octubre";

export const MOVIES: Movie[] = [
  {
    id: "m1",
    title: "Ecos del Mañana",
    director: "Sofía Martínez",
    genre: ["Sci-Fi", "Drama"],
    duration: "115 min",
    year: 2024,
    synopsis: "En un futuro donde los recuerdos pueden ser editados, una detective descubre una conspiración que amenaza la realidad misma.",
    posterUrl: "https://picsum.photos/seed/sci1/400/600",
    rating: "PG-13",
    tags: ["futurista", "misterio", "latino"]
  },
  {
    id: "m2",
    title: "Bajo la Piel del Océano",
    director: "Lucas Thorne",
    genre: ["Documental"],
    duration: "88 min",
    year: 2024,
    synopsis: "Una exploración visualmente impactante de las profundidades inexploradas del Atlántico Sur.",
    posterUrl: "https://picsum.photos/seed/doc1/400/600",
    rating: "G",
    tags: ["naturaleza", "mar", "visual"]
  },
  {
    id: "m3",
    title: "Noches de Neón",
    director: "Kenji Sato",
    genre: ["Acción", "Thriller"],
    duration: "102 min",
    year: 2025,
    synopsis: "Un mensajero en bicicleta queda atrapado en una guerra de bandas en el centro de Tokio durante una noche de tormenta.",
    posterUrl: "https://picsum.photos/seed/thr1/400/600",
    rating: "R",
    tags: ["adrenalina", "estético", "urbano"]
  },
  {
    id: "m4",
    title: "El Último Verso",
    director: "Elena Rossi",
    genre: ["Romance", "Histórico"],
    duration: "130 min",
    year: 2024,
    synopsis: "La historia prohibida entre una joven poeta y un soldado durante la resistencia en la Italia de 1944.",
    posterUrl: "https://picsum.photos/seed/rom1/400/600",
    rating: "PG-13",
    tags: ["poesía", "guerra", "emotivo"]
  },
  {
    id: "m5",
    title: "Algoritmos del Alma",
    director: "David Chen",
    genre: ["Drama", "Animación"],
    duration: "95 min",
    year: 2025,
    synopsis: "Una IA que desarrolla sentimientos intenta entender qué significa ser humano a través del arte.",
    posterUrl: "https://picsum.photos/seed/ani1/400/600",
    rating: "PG",
    tags: ["innovador", "reflexivo", "arte"]
  },
  {
    id: "m6",
    title: "Sombra Fugaz",
    director: "Marc Dupont",
    genre: ["Terror", "Misterio"],
    duration: "90 min",
    year: 2024,
    synopsis: "Un fotógrafo captura algo en una mansión abandonada que no debería existir.",
    posterUrl: "https://picsum.photos/seed/hor1/400/600",
    rating: "R",
    tags: ["suspenso", "sobrenatural", "oscuro"]
  }
];

export const SCREENINGS: Screening[] = [
  { id: "s1", movieId: "m1", time: "18:00", venue: "Teatro Imperial", date: "Lun 15", isSoldOut: false },
  { id: "s2", movieId: "m2", time: "20:30", venue: "Sala Cinephile", date: "Lun 15", isSoldOut: true },
  { id: "s3", movieId: "m3", time: "22:00", venue: "Teatro Imperial", date: "Mar 16", isSoldOut: false },
  { id: "s4", movieId: "m4", time: "17:00", venue: "Jardín del Arte", date: "Mar 16", isSoldOut: false },
  { id: "s5", movieId: "m5", time: "19:00", venue: "Teatro Imperial", date: "Mié 17", isSoldOut: false },
  { id: "s6", movieId: "m6", time: "23:59", venue: "Sala Cinephile", date: "Mié 17", isSoldOut: false },
];

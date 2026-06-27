# La Caprichosa

## Contenido

- [Introducción](#introducción-y-origen-del-proyecto)
- [El problema](#el-problema)
- [Objetivo](#objetivo-general)
- [Alcance del MVP](#alcance-del-mvp)
- [Arquitectura](#arquitectura)
- [Stack](#stack)
- [Instalación](#instalación)
- [Licencia](#licencia)

---

## Introducción y origen del proyecto

Hace muchos años que con mis amigos jugamos al fútbol y un día propuse registrar como salían los partidos y los goleadores. Empezó por las risas pero terminó volviéndose algo serio, nadie quería perderse los partidos para poder escalar en la tabla de posiciones. Los domingos a la tarde, una vez terminada la convocatoria de jugadores, se arman los equipos buscando que sean lo más parejo posible para que sea un lindo partido. Se arman dos equipos, dependiendo de la cancha donde juguemos la cantidad de jugadores por equipo varía, normalmente jugamos en cancha de 7. Al final del partido, anotamos quién hizo los goles. 
Lo más importante es la tabla general, donde aparecen todos los jugadores, partidos jugados, porcentaje de asistencia, goles a favor, promedio de gol, goles en contra, partidos ganados, perdidos y empatados. (Asistencias de gol no las contabilizamos porque es difícil recordar luego del partido y las novias o personas que vienen a ver los partidos con mate de por medio, no quieren ser data entry no remunerado).

Lo que comenzó como una simple anotación entre amigos terminó generando una necesidad real: disponer de un sistema que permita conservar el historial de partidos y medir objetivamente el rendimiento de cada jugador a lo largo del tiempo.

[Planilla actual de La Caprichosa](https://tinyurl.com/lacaprichosa)

---

## El Problema

A medida que el grupo fue subiendo la cantidad de jugadores diferentes y acumulando años de partidos, comenzó a surgir una necesidad: poder consultar información histórica de manera confiable.
Aunque los resultados y goleadores se registraban manualmente, la información quedaba dispersa y era difícil responder preguntas simples como:

- ¿Quién es el goleador histórico?
- ¿Quién tiene más partidos ganados?
- ¿Quién mantiene el mejor promedio de gol?
- ¿Qué jugadores tienen mayor asistencia?
- ¿Cuál fue el resultado de un partido específico?

La Caprichosa App surge para centralizar esta información y transformar los registros de cada partido en estadísticas útiles que permitan medir objetivamente el rendimiento de los jugadores a lo largo del tiempo.

---

## Objetivo General

Desarrollar una aplicación web que permita registrar partidos de fútbol amateur y generar estadísticas históricas consolidadas de los jugadores de manera automática.

---

## Alcance del MVP

La primera versión de La Caprichosa App estará enfocada en resolver el problema principal: registrar partidos y generar estadísticas históricas de los jugadores.

### Funcionalidades incluidas

#### Gestión de jugadores
- Alta de jugadores.
- Edición de jugadores.

#### Registro de partidos
- Creación de partidos.
- Registro de fecha y cancha.

#### Participación de jugadores
- Asociación de jugadores a un equipo dentro de cada partido.
- Registro de cantidad de goles por jugador dentro de cada partido.
- Registro de cantidad de goles en contra por jugador dentro de cada partido.
- Soporte para diferentes cantidades de jugadores por encuentro.

#### Estadísticas
- Partidos jugados.
- Porcentaje de asistencia.
- Partidos ganados.
- Partidos empatados.
- Partidos perdidos.
- Goles convertidos.
- Goles en contra.
- Promedio de gol.

#### Dashboard
- Tabla general de jugadores ordenada por criterios deportivos.
- Consulta histórica de partidos.

### Funcionalidades fuera del alcance del MVP

Con el objetivo de priorizar la entrega de una solución funcional y enfocada en el problema principal, las siguientes funcionalidades fueron excluidas de la primera versión:

- Sistema de autenticación y múltiples usuarios. 
- Gestión de múltiples grupos de fútbol.
- Estadísticas avanzadas (rachas, rivalidades históricas).
- Registro de asistencias de gol.
- Armado automático de equipos equilibrados.
- Exportación de estadísticas.
- Registro de torneos extra esporádicos (triangular, cuadrangular, o cualquier modalidad que implique más de 2 equipos).

---

## Arquitectura

La aplicación sigue una arquitectura por capas y utiliza los patrones Repository y Service Layer para separar las responsabilidades del sistema.
```text
UI
↓
Services
↓
Repositories
↓
Supabase
↓
PostgreSQL
```

## Stack

| Tecnología | Motivo de la elección |
|------------|-----------------------|
| Next.js 16 | Framework recomendado para el challenge y una excelente oportunidad para aprender desarrollo web moderno con React. |
| React 19 | Biblioteca ampliamente utilizada para construir interfaces de usuario mediante componentes reutilizables. |
| TypeScript | Elegido por mi preferencia por el tipado estático, ya que mejora la mantenibilidad del código y permite detectar errores durante el desarrollo. |
| Tailwind CSS | Framework CSS recomendado para el challenge, que facilita la construcción de interfaces de forma rápida y consistente. |
| Supabase | Solución de backend recomendada para el challenge. Permite disponer de una base de datos PostgreSQL y una API lista para usar, facilitando el desarrollo sin tener que implementar un backend desde cero. |
| PostgreSQL | Base de datos relacional robusta, utilizada para almacenar toda la información de la aplicación. |
---

## Instalación

---

## Licencia

Proyecto desarrollado como challenge técnico y con fines educativos.
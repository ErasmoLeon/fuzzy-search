
# Fuzzy-Search

El algoritmo fuzzy usado fue distancia de levenshtein. [https://en.wikipedia.org/wiki/Levenshtein_distance]

**Razón del uso:**

Para el caso de uso actual y con la información que se proporcionó es irrelevante el tipo de algoritmo que se usa, pero en dado caso que el problema creciera o fuera mucho mas especifico en cuanto cantidad de información que se registrara, se podría reutilizar la distancia de levenshtein para implementar un algoritmo mas especifico adecuandolo a las necesidades con un mayor detalle, este algoritmo es más flexible y reutilizable.
**Instrucciones.** 
- Clonar repo
>git clone https://github.com/ErasmoLeon/fuzzy-search.git

- Instalar dependencias
> npm i

- Compilar
> npm run build

- Comandos disponibles

- Agregar:
> npm run app add {"name": "Diegos Antonio Perez"}

- Listar:
> npm run app list

- Búsqueda:
> npm run app fuzzy-search {"search": "Daigos Antonios"}




### README.md for Cetacean Blog

# Welcome to My Cetacean Blog 🐋✨
![Cetacean Blog Banner](https://yourlink.com/banner.jpg)

## What to Expect 🐬
Welcome to the My Cetacean Blog repository! Here, you'll discover a treasure trove of information related to the fascinating world of cetaceans. Expect to find detailed species profiles, conservation news, deep dives into cetacean behavior, interactive maps of cetacean migrations, and much more. Dive deep into the mysterious world of whales, dolphins, and porpoises.

## Getting Started 🌊
To get started with My Cetacean Blog, follow these simple steps:

### Clone the repository:
```bash
git clone https://github.com/your-username/my-cetacean-blog.git
```

### Navigate to the project directory:
```bash
cd my-cetacean-blog
```

### Install dependencies using npm:
```bash
npm install
```

### Start the development server:
```bash
npm run dev
```

### View the Blog
Open your browser and navigate to [CetaceansBlog](https://my-blog-one-beige-60.vercel.app/?#/login)  to view the blog.

## Technologies Used 🛠️
- **React**: A JavaScript library for building user interfaces, enabling the creation of reusable UI components.
- **Vite**: A modern web development build tool that offers a fast server start and HMR.
- **useForm and useAuth and useApi Hooks**: Custom React hooks for managing form states and authentication and api managment.
- **JWT**: For secure user authentication and authorization throughout the blog.
- **Bootstrap**: For the UI.

## Enjoy the Blog! 📘✨
Embark on a journey through the vast oceans to explore the lives of cetaceans. Enjoy your adventure in My Cetacean Blog, where every click brings you closer to understanding these magnificent creatures. Happy reading!

## Screenshots 📸
![image](https://github.com/Sofiamishel2003/My_Blog/assets/98661058/4fc3d99f-6b29-48f3-a565-acaf1d955a65)
!![image](https://github.com/Sofiamishel2003/My_Blog/assets/98661058/fad8b0f5-4e42-491c-94ad-78fa77345cd8)
![image](https://github.com/Sofiamishel2003/My_Blog/assets/98661058/7cbc6400-4564-4a97-a020-f74f68fb26fc)
![image](https://github.com/Sofiamishel2003/My_Blog/assets/98661058/23a3bd04-1433-4db8-b99a-eeb453ab5d3a)

```
### Explanation
- **First Image**: Login Page to enter the blog, if you don´t have an account yet, click on the register link.
- **Blog Posts**: Blog posts display.
- **Edit a Posit**: List all the atributes of the post and the option to edit and delete.
- **User**: User Page, with the name of the user, the role and the logout button.
```

## Requisitos Cumplidos

- **Código compatible con eslint javascript/standard (20 puntos)**: Se implemento correctamente, desde la api, hasta el blog y no tiene ningún error.
- **React Suspense para el lazy loading (20 puntos)**: implementado correctamente en el manejo de `LoadingScreen`
- **Router (10 puntos)**: implementado correctamente, en la carpeta de hooks adentro se encuentra el `HOC` y ahí dentro está el Admin y el Router creado.
- **Api Hook (10 puntos)**: Se implementó correctamente en la carpeta de `src/Hooks` se encuentra el `useApi`
- **Local token (10 puntos)**: Se implemento con la firma de `jwt` con su secret en el .env, en el login se hace la firma y se guarda en su hook the useAuth, este token dura 24 h. 
- **Token de auticación en TODAS las request:(15 puntos)**: Se elabró correctamente, se puede ver en el hook del api las llamadas facilmente.
- **UseForm  hook (10 puntos)**:Se implementó correctamente en la carpeta de `src/Hooks` se encuentra el `useForm`
**Puntuación Total**: 95/95 + Subjetivo( 50 puntos)
